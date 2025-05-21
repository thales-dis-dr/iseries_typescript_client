import { DeviceConfig, load_config } from "./Config.mts";
import { WebSocket } from "ws";
import { DeviceConnection } from "./DeviceConnection.mts";
import { ReaderDataType } from "./drmcl/ReaderDataType.mts";
import { type SettingsMessageLike } from "./drmcl/settingsMessage.mts";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import fs from "fs/promises";

async function connect_device(
  config: DeviceConfig,
  constant_capture: boolean,
  settings?: SettingsMessageLike,
  ca_cert?: Buffer<ArrayBufferLike>
) {
  const ws = new WebSocket(config.url(), {
    ca: ca_cert,
  });

  let device = new DeviceConnection(ws);
  await device.open();
  console.log(`Connection open to ${config.address}`);
  await device.sendConnect(config.apiId, config.apiKey);
  console.log(`Connection authenticated for ApiId ${config.apiId}`);
  if (settings) await device.sendSettings(settings);
  console.log(`Start Session`);
  await device.sendOpenSession();

  do {
    let results: Promise<void>[] = [];

    console.log(`Start Capture`);
    for await (const msg of device.sendCaptureData()) {
      let d = msg.d;
      console.log(`Captured ${d.id} ${d.type}`);
      
      switch (d.type) {
        case ReaderDataType.IMAGEVIS:
        case ReaderDataType.IMAGEVISREAR:
          console.log(`Get Data for ${d.type}`);
          results.push(
            device.sendRetrieveData({ id: d.id, type: d.type }).then(async (msg) => {
              // TODO: Store the results
              if(msg.d.img?.data)
                await fs.writeFile(`vis.jpg`, Buffer.from(msg.d.img.data, "base64"));
            })
          );
          break;
      }
    }

    console.log("Waiting for data");
    await Promise.all(results);
  } while (constant_capture);
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
          config.constant_capture || false,
          config.settings,
          ca
        )
      );
    }

    await Promise.all(devices);
  }
}

await main();
