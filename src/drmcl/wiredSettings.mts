/*
 * DO NOT EDIT.  Generated Message from WebApi.wiredSettings.json
 * Copyright © Thales, 2023
 */

import { NetworkSetting , type NetworkSettingLike, isNetworkSetting} from './networkSetting.mts';

export function isWiredSettings(obj: any): obj is WiredSettingsLike {
  return  obj && // not null AND
    (( obj instanceof WiredSettings) || // instance of WiredSettings OR
    ( typeof obj === 'object' && /*"d" in obj && */ /*"n" in obj && */     true) // its an object with all the right properties
    );
}
/**
 */
export interface WiredSettingsLike {
/**
 * This value indicates DHCP or not.  if not the a,m and g properties should be set.
 * Alias for isDhcp
 */
  d?: boolean | undefined | null;
/**
 * Address
 * Alias for net
 */
  n?: NetworkSettingLike | undefined | null;
  /** Indexer */
  [key: string]: any;
}

/**
 * Ethernet settings
 */
export class WiredSettings /*extends MessageData implements WiredSettingsLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.d = null;
    this.n = null;
  }

/**
 * This value indicates DHCP or not.  if not the a,m and g properties should be set.
 * Alias for isDhcp
 */
  d?: boolean | undefined | null;
  get isDhcp(): boolean | undefined | null { return this.d; }
  set isDhcp(value: boolean | undefined | null) { this.d = value; }
/**
 * Address
 * Alias for net
 */
  n?: NetworkSetting | undefined | null;
  get net(): NetworkSetting | undefined | null { return this.n; }
  set net(value: NetworkSetting | undefined | null) { this.n = value; }
  /**
   * parses a string into a WiredSettings.  
   * @returns a new WiredSettings; or undefined if the object could not be parsed.
   */
  static parse(data:string): WiredSettings {
    const obj = JSON.parse(data);
    if(obj && isWiredSettings(obj)){
      return WiredSettings.copy(obj);
    }
    throw Error("Cannot parse WiredSettings from " + data);
  } // END parse

  /**
   * Returns a copy of WiredSettings or undefined if the original object is not copyable.
   */
  static copy(obj: WiredSettingsLike): WiredSettings {
    if(isWiredSettings(obj)){
      let copy = new WiredSettings();
      copy = Object.assign(copy, obj);
      if(obj.n) {
        if(isNetworkSetting(obj.n)){ copy.n = NetworkSetting.copy(obj.n); } else { throw Error("Missing required property n of WiredSettings") }
      }
      return copy;
    }
    throw Error("Cannot copy WiredSettings from Object.");
  } // END copy
} // END WiredSettings
