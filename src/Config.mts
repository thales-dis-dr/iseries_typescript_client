import JSON5 from "json5";
import fs from "fs/promises";
import { type SettingsMessageLike } from "./drmcl/settingsMessage.mts";

async function load_json_file(path: string) {
  let content = (await fs.readFile(path)).toString();
  return JSON5.parse(content);
}

export async function load_config(): Promise<Config> {
  let output: Config;
  let defaults = Config.from(await load_json_file("config/default.json5"));

  try {
    let settings = Config.from(await load_json_file("config/settings.json5"));
    defaults = Config.merge(defaults, settings);
  } catch (err) {
    console.error(`Error loading settings.json5\n${err}`);
  }
  return Config.merge({ devices: [] }, defaults);
}

export class DeviceConfig {
  address: string;
  port?: number;
  protocol?: "ws" | "wss";
  apiKey: string;
  apiId: string;
  jwt?: string;

  constructor(
    address: string,
    apiKey: string,
    apiId: string,
    port: number | undefined | null,
    protocol: "ws" | "wss" | undefined | null,
    jwt: string | undefined | null
  ) {
    this.address = address;
    this.port = port || undefined;
    this.protocol = protocol || undefined;
    this.apiKey = apiKey;
    this.apiId = apiId;
    if (jwt) this.jwt = jwt;
  }

  static from(obj: any): DeviceConfigLike {
    // TODO: validate the obj
    return obj as DeviceConfigLike;
  }

  /**
   * creates a device url.
   *
   * Defaults to using port 443 and the wss protocol if parameters are not set.
   *
   * @param config The configuration object.
   * @returns a url string
   */
  url() {
    let protocol = this.protocol || "wss";
    let port = this.port || (protocol == "ws" ? 80 : 443);

    // TODO: normally the default port is hidden. that seems extra here.
    return `${protocol}://${this.address}:${port}/`;
  }

  static merge(
    target: DeviceConfigLike,
    source: DeviceConfigLike
  ): DeviceConfig {
    const { apiId, apiKey, ...output } = { ...target, ...source };

    if (!apiId) {
      throw Error("apiId is required");
    } else if (!apiKey) {
      throw Error("apiId is required");
    }

    return new DeviceConfig(
      output.address,
      apiKey,
      apiId,
      output.port,
      output.protocol,
      output.jwt
    );
  }
}

type DeviceConfigLike = Partial<DeviceConfig> &
  Required<Pick<DeviceConfig, "address">>;

type ConfigLike = Partial<Config> & Required<Pick<Config, "devices">>;

export class Config {
  constant_capture?: boolean;
  ca_cert_path?: string;
  settings?: SettingsMessageLike;
  devices: DeviceConfig[];

  async get_ca_cert() {
    if (this.ca_cert_path) {
      console.log(`Loading CA cert from ${this.ca_cert_path}`);
      return await fs.readFile(this.ca_cert_path);
    }
  }

  constructor(
    constant_capture: boolean | undefined | null,
    settings: SettingsMessageLike | undefined | null,
    devices: DeviceConfig[] | undefined | null,
    ca_cert_path: string | undefined | null
  ) {
    this.constant_capture = constant_capture || undefined;
    this.settings = settings || undefined;
    this.devices = devices || [];
    this.ca_cert_path = ca_cert_path || undefined;
  }

  static from(obj: any) {
    if (!("devices" in obj)) {
      obj.devices = [];
    }
    return obj as ConfigLike;
  }

  static merge(targetLike: ConfigLike, source: ConfigLike): Config {
    const { devices: sourceDevices, ...src } = source;
    const { devices: targetDevices, ...target } = targetLike;
    const output = { ...target, ...src } as Partial<Config>;

    // Merge devices by address
    const mergedDevices: DeviceConfig[] = [];
    const usedSourceIndexes = new Set<number>();

    for (const targetDevice of targetDevices) {
      let found = false;
      for (const sourceDevice of sourceDevices) {
        if (targetDevice.address === sourceDevice.address) {
          mergedDevices.push(DeviceConfig.merge(targetDevice, sourceDevice));
          usedSourceIndexes.add(sourceDevices.indexOf(sourceDevice));
          found = true;
          break;
        }
      }
      if (!found)
        mergedDevices.push(
          DeviceConfig.merge({ address: targetDevice.address }, targetDevice)
        );
    }

    // Add source devices that didn't match any target device
    sourceDevices.forEach((srcDev, idx) => {
      if (!usedSourceIndexes.has(idx)) {
        mergedDevices.push(
          DeviceConfig.merge({ address: srcDev.address }, srcDev)
        );
      }
    });

    output.devices = mergedDevices;

    return new Config(
      output.constant_capture,
      output.settings,
      mergedDevices,
      output.ca_cert_path
    );
  }
}
