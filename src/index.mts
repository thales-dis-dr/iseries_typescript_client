import { DeviceConfig, load_config } from "./Config.mts";
import { WebSocket } from "ws";
import { DeviceConnection } from "./DeviceConnection.mts";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import fs from "fs/promises";
import {
  ConnectionEvents,
  type DeviceSettingsLike,
  EventCodes,
  ReaderDataType,
} from "./drmcl/index.mts";
import * as rx from "rxjs";

async function connect_device(
  config: DeviceConfig,
  constant_capture: boolean,
  settings?: DeviceSettingsLike,
  ca_cert?: Buffer<ArrayBufferLike>,
  wait_for_doc_remove?: boolean
) {
  const ws = new WebSocket(config.url(), {
    ca: ca_cert,
  });

  let device = new DeviceConnection(ws);
  await device.open();
  console.log(`Connection open to ${config.address}`);

  await device.sendConnect(config.apiId, config.apiKey);
  console.log(`Connection authenticated for ApiId ${config.apiId}`);

  console.log(`Start Session`);
  await device.sendOpenSession();

  if (settings) {
    console.log("Send Settings");
    let t = await device.sendSettings(settings);
  }

  // create a subject to track doc_on_window state
  let doc_removed = new rx.BehaviorSubject<boolean>(false);
  if (wait_for_doc_remove) {
    console.log("Listen to events");
    await device.sendListenEvents();
    device.observerEvents().subscribe((eventId) => {
      console.log(`Event ${EventCodes[eventId]}`);
      if (eventId === EventCodes.DOC_REMOVED) {
        doc_removed.next(true);
      }
    });
  }

  do {
    let results: Promise<void>[] = [];

    console.log(`Start Capture`);
    for await (const msg of device.sendCaptureData()) {
      let d = msg.d;
      console.log(`Captured ${d.id} ${ReaderDataType[d.type]}(${d.type})`);

      switch (d.type) {
        case ReaderDataType.IMAGEVIS:
        case ReaderDataType.IMAGEVISREAR:
          console.log(`Get Data for ${d.type}`);
          results.push(
            device
              .sendRetrieveData({ id: d.id, type: d.type })
              .then(async (msg) => {
                // TODO: Store the results
                if (msg.d.img?.data)
                  await fs.writeFile(
                    `out/vis.jpg`,
                    Buffer.from(msg.d.img.data, "base64")
                  );
              })
          );
          break;
      }
    }

    console.log("Waiting for data");
    await Promise.all(results);

    if (wait_for_doc_remove) {
      console.log("Waiting for doc removed");
      await rx.firstValueFrom(
        doc_removed.pipe(rx.filter((removed) => removed))
      );
      doc_removed.next(false); // reset for next capture
    }
  } while (constant_capture);

  if (wait_for_doc_remove) {
    doc_removed.complete();
    // we turned on event listening, so turn it off again.
    await device.sendStopListenEvents();
  }

  console.log("Close Session");
  await device.sendCloseSession();

  console.log("Close Connection");
  ws.close();
}

async function main() {
  const config = await load_config();
  const argv = await yargs(hideBin(process.argv))
    .option("print_config", {
      alias: "print-config",
      type: "boolean",
      default: false,
    })
    .option("wait_doc_remove", {
      alias: "wait-doc-remove",
      type: "boolean",
      default: false,
    })
    .option("constant_capture", {
      alias: "constant-capture",
      type: "boolean",
      default: false,
    })
    .parse();

  if (argv.print_config) {
    console.log(JSON.stringify(config, null, 2));
  } else {
    const ca = await config.get_ca_cert();
    const devices: Promise<void>[] = [];
    for (let device of config.devices) {
      devices.push(
        connect_device(
          device,
          config.constant_capture || argv.constant_capture,
          config.settings,
          ca,
         config.wait_doc_remove || argv.wait_doc_remove
        )
      );
    }

    await Promise.all(devices);
  }
}

await main();
