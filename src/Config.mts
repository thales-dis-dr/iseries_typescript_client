import JSON5 from "json5";
import fs from "fs/promises";
import { SettingsMessageLike } from "./drmcl/settingsMessage.mjs";

async function load_file(path: string) {
  let content = (await fs.readFile(path)).toString();
  return JSON5.parse(content);
}

export async function load_config(): Promise<Config> {
  let x = await load_file("config/default.json5");

  // TODO: check that the file really is a Config
  return x as Config;
}

export interface DeviceConfig {
  ip: string;
  apiKey: string;
  apiId: string;
  jwt: string | undefined;
}

export interface Config {
  constant_capture?: boolean;
  settings?: SettingsMessageLike;
  devices: DeviceConfig[];
}
