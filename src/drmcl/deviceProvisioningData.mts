/*
 * DO NOT EDIT.  Generated Message from WebApi.deviceProvisioningData.json
 * Copyright © Thales, 2023
 */

import { DeviceCredentials , type DeviceCredentialsLike, isDeviceCredentials} from './deviceCredentials.mts';
import { OnboardKeyValuePair , type OnboardKeyValuePairLike, isOnboardKeyValuePair} from './onboardKeyValuePair.mts';
import { WiredSettings , type WiredSettingsLike, isWiredSettings} from './wiredSettings.mts';
import { WifiSettings , type WifiSettingsLike, isWifiSettings} from './wifiSettings.mts';

export function isDeviceProvisioningData(obj: any): obj is DeviceProvisioningDataLike {
  return  obj && // not null AND
    (( obj instanceof DeviceProvisioningData) || // instance of DeviceProvisioningData OR
    ( typeof obj === 'object' && /*"bluetooth" in obj && */ "c" in obj && /*"kvp" in obj && */ /*"l" in obj && */ /*"reboot" in obj && */ /*"w" in obj && */     true) // its an object with all the right properties
    );
}
/**
 */
export interface DeviceProvisioningDataLike {
/**
 * Enable or Disable Bluetooth.  Defaults to disabled (false).
 */
  bluetooth?: boolean | undefined | null;
/**
 * Security Credential
 * Alias for credentials
 */
  c: DeviceCredentialsLike[];
/**
 * Key Value Data
 * Alias for KeyValuePairs
 */
  kvp?: OnboardKeyValuePairLike[] | undefined | null;
/**
 * Wired LAN settings
 * Alias for lan
 */
  l?: WiredSettingsLike | undefined | null;
/**
 * Reboot after provision
 */
  reboot?: boolean | undefined | null;
/**
 * Wifi LAN settings
 * Alias for wifi
 */
  w?: WifiSettingsLike | undefined | null;
  /** Indexer */
  [key: string]: any;
}

/**
 * Structure of the onboarding data.
 */
export class DeviceProvisioningData /*extends MessageData implements DeviceProvisioningDataLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.bluetooth = null;
    this.c = [];
    this.kvp = null;
    this.l = null;
    this.reboot = null;
    this.w = null;
  }

/**
 * Enable or Disable Bluetooth.  Defaults to disabled (false).
 */
  bluetooth?: boolean | undefined | null;
/**
 * Security Credential
 * Alias for credentials
 */
  c: DeviceCredentials[];
  get credentials(): DeviceCredentials[] { return this.c; }
  set credentials(value: DeviceCredentials[]) { this.c = value; }
/**
 * Key Value Data
 * Alias for KeyValuePairs
 */
  kvp?: OnboardKeyValuePair[] | undefined | null;
  get KeyValuePairs(): OnboardKeyValuePair[] | undefined | null { return this.kvp; }
  set KeyValuePairs(value: OnboardKeyValuePair[] | undefined | null) { this.kvp = value; }
/**
 * Wired LAN settings
 * Alias for lan
 */
  l?: WiredSettings | undefined | null;
  get lan(): WiredSettings | undefined | null { return this.l; }
  set lan(value: WiredSettings | undefined | null) { this.l = value; }
/**
 * Reboot after provision
 */
  reboot?: boolean | undefined | null;
/**
 * Wifi LAN settings
 * Alias for wifi
 */
  w?: WifiSettings | undefined | null;
  get wifi(): WifiSettings | undefined | null { return this.w; }
  set wifi(value: WifiSettings | undefined | null) { this.w = value; }
  /**
   * parses a string into a DeviceProvisioningData.  
   * @returns a new DeviceProvisioningData; or undefined if the object could not be parsed.
   */
  static parse(data:string): DeviceProvisioningData {
    const obj = JSON.parse(data);
    if(obj && isDeviceProvisioningData(obj)){
      return DeviceProvisioningData.copy(obj);
    }
    throw Error("Cannot parse DeviceProvisioningData from " + data);
  } // END parse

  /**
   * Returns a copy of DeviceProvisioningData or undefined if the original object is not copyable.
   */
  static copy(obj: DeviceProvisioningDataLike): DeviceProvisioningData {
    if(isDeviceProvisioningData(obj)){
      let copy = new DeviceProvisioningData();
      copy = Object.assign(copy, obj);
      copy.c = new Array<DeviceCredentials>();
      for(const el of obj.c){
        if(isDeviceCredentials(el)){
          copy.c.push(DeviceCredentials.copy(el));
        } else { throw Error("Missing required property c of DeviceProvisioningData") }
      }
      if(obj.kvp) {
        copy.kvp = new Array<OnboardKeyValuePair>();
        for(const el of obj.kvp){
          if(isOnboardKeyValuePair(el)){
            copy.kvp.push(OnboardKeyValuePair.copy(el));
          } else { throw Error("Missing required property kvp of DeviceProvisioningData") }
        }
      }
      if(obj.l) {
        if(isWiredSettings(obj.l)){ copy.l = WiredSettings.copy(obj.l); } else { throw Error("Missing required property l of DeviceProvisioningData") }
      }
      if(obj.w) {
        if(isWifiSettings(obj.w)){ copy.w = WifiSettings.copy(obj.w); } else { throw Error("Missing required property w of DeviceProvisioningData") }
      }
      return copy;
    }
    throw Error("Cannot copy DeviceProvisioningData from Object.");
  } // END copy
} // END DeviceProvisioningData
