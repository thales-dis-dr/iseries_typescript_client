import { DeviceConfig, load_config } from "./Config.mjs";
import { WebSocket } from "ws";
import { DeviceConnection } from "./DeviceConnection.mjs";
import { DeviceConnection2 } from "./DeviceConnection2.mjs";
import { ReaderDataType } from "./drmcl/ReaderDataType.mjs";
import { SettingsMessageLike } from "./drmcl/settingsMessage.mjs";
import { MessageWrapper } from "./Message.mjs";
import { DataResponse } from "./drmcl/dataResponse.mjs";

async function connect_device2(
  config: DeviceConfig,
  constant_capture: boolean,
  settings?: SettingsMessageLike
) {
  const ws = new WebSocket(`ws://${config.ip}`);
  let device = new DeviceConnection2(ws);
  await device.open();
  await device.sendConnect(config.apiId, config.apiKey);
  if (settings) await device.sendSettings(settings);
  while (constant_capture) {
    await device.sendOpenSession();

    let results: Promise<void>[] = [];
    for await (const msg of device.sendCaptureData()) {
      let d = msg.d;
      switch (d.type) {
        case ReaderDataType.IMAGEVIS:
        case ReaderDataType.IMAGEVISREAR:
          results.push(
            device.sendRetrieveData({ id: d.id, type: d.type }).then((msg) => {
              // TODO: Store the results
            })
          );
          break;
      }
    }

    await Promise.all(results);

    await device.sendCloseSession();
  }
}

async function main() {
  let config = await load_config();

  let devices: Promise<void>[] = [];
  for (let device of config.devices) {
    devices.push(
      connect_device2(device, config.constant_capture || false, config.settings)
    );
  }

  await Promise.all(devices);
}

await main();
