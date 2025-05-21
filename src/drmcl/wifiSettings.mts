/*
 * DO NOT EDIT.  Generated Message from WebApi.wifiSettings.json
 * Copyright © Thales, 2023
 */

import { NetworkSetting , type NetworkSettingLike, isNetworkSetting} from './networkSetting.mts';

export function isWifiSettings(obj: any): obj is WifiSettingsLike {
  return  obj && // not null AND
    (( obj instanceof WifiSettings) || // instance of WifiSettings OR
    ( typeof obj === 'object' && /*"d" in obj && */ /*"o" in obj && */ /*"n" in obj && */ /*"p" in obj && */ /*"s" in obj && */     true) // its an object with all the right properties
    );
}
/**
 */
export interface WifiSettingsLike {
/**
 * This value indicates DHCP or not.  if not the a,m and g properties should be set.
 * Alias for isDhcp
 */
  d?: boolean | undefined | null;
/**
 * Determines if the Adapter is turned on by default
 * Alias for isEnabled
 */
  o?: boolean | undefined | null;
/**
 * Address
 * Alias for net
 */
  n?: NetworkSettingLike | undefined | null;
/**
 * pre-shared key
 * Alias for psk
 */
  p?: string | undefined | null;
/**
 * ssid
 * Alias for ssid
 */
  s?: string | undefined | null;
  /** Indexer */
  [key: string]: any;
}

/**
 * Wifi Settings
 */
export class WifiSettings /*extends MessageData implements WifiSettingsLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.d = null;
    this.o = null;
    this.n = null;
    this.p = null;
    this.s = null;
  }

/**
 * This value indicates DHCP or not.  if not the a,m and g properties should be set.
 * Alias for isDhcp
 */
  d?: boolean | undefined | null;
  get isDhcp(): boolean | undefined | null { return this.d; }
  set isDhcp(value: boolean | undefined | null) { this.d = value; }
/**
 * Determines if the Adapter is turned on by default
 * Alias for isEnabled
 */
  o?: boolean | undefined | null;
  get isEnabled(): boolean | undefined | null { return this.o; }
  set isEnabled(value: boolean | undefined | null) { this.o = value; }
/**
 * Address
 * Alias for net
 */
  n?: NetworkSetting | undefined | null;
  get net(): NetworkSetting | undefined | null { return this.n; }
  set net(value: NetworkSetting | undefined | null) { this.n = value; }
/**
 * pre-shared key
 * Alias for psk
 */
  p?: string | undefined | null;
  get psk(): string | undefined | null { return this.p; }
  set psk(value: string | undefined | null) { this.p = value; }
/**
 * ssid
 * Alias for ssid
 */
  s?: string | undefined | null;
  get ssid(): string | undefined | null { return this.s; }
  set ssid(value: string | undefined | null) { this.s = value; }
  /**
   * parses a string into a WifiSettings.  
   * @returns a new WifiSettings; or undefined if the object could not be parsed.
   */
  static parse(data:string): WifiSettings {
    const obj = JSON.parse(data);
    if(obj && isWifiSettings(obj)){
      return WifiSettings.copy(obj);
    }
    throw Error("Cannot parse WifiSettings from " + data);
  } // END parse

  /**
   * Returns a copy of WifiSettings or undefined if the original object is not copyable.
   */
  static copy(obj: WifiSettingsLike): WifiSettings {
    if(isWifiSettings(obj)){
      let copy = new WifiSettings();
      copy = Object.assign(copy, obj);
      if(obj.n) {
        if(isNetworkSetting(obj.n)){ copy.n = NetworkSetting.copy(obj.n); } else { throw Error("Missing required property n of WifiSettings") }
      }
      return copy;
    }
    throw Error("Cannot copy WifiSettings from Object.");
  } // END copy
} // END WifiSettings
