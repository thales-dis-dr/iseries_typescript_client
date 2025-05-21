/*
 * DO NOT EDIT.  Generated Message from WebApi.networkConfigMessage.json
 * Copyright © Thales, 2023
 */

import { WiredSettings ,type  WiredSettingsLike, isWiredSettings} from './wiredSettings.mts';
import { WifiSettings ,type  WifiSettingsLike, isWifiSettings} from './wifiSettings.mts';

export function isNetworkConfigMessage(obj: any): obj is NetworkConfigMessageLike {
  return  obj && // not null AND
    (( obj instanceof NetworkConfigMessage) || // instance of NetworkConfigMessage OR
    ( typeof obj === 'object' && /*"bt_enabled" in obj && */ /*"lan" in obj && */ /*"wifi" in obj && */     true) // its an object with all the right properties
    );
}
/**
 */
export interface NetworkConfigMessageLike {
/**
 * Enable Bluetooth
 */
  bt_enabled?: boolean | undefined | null;
/**
 * Wired LAN settings
 */
  lan?: WiredSettingsLike | undefined | null;
/**
 * Wifi LAN settings
 */
  wifi?: WifiSettingsLike | undefined | null;
  /** Indexer */
  [key: string]: any;
}

/**
 * Contains settings for all the network configuration.
 */
export class NetworkConfigMessage /*extends MessageData implements NetworkConfigMessageLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.bt_enabled = null;
    this.lan = null;
    this.wifi = null;
  }

/**
 * Enable Bluetooth
 */
  bt_enabled?: boolean | undefined | null;
/**
 * Wired LAN settings
 */
  lan?: WiredSettings | undefined | null;
/**
 * Wifi LAN settings
 */
  wifi?: WifiSettings | undefined | null;
  /**
   * parses a string into a NetworkConfigMessage.  
   * @returns a new NetworkConfigMessage; or undefined if the object could not be parsed.
   */
  static parse(data:string): NetworkConfigMessage {
    const obj = JSON.parse(data);
    if(obj && isNetworkConfigMessage(obj)){
      return NetworkConfigMessage.copy(obj);
    }
    throw Error("Cannot parse NetworkConfigMessage from " + data);
  } // END parse

  /**
   * Returns a copy of NetworkConfigMessage or undefined if the original object is not copyable.
   */
  static copy(obj: NetworkConfigMessageLike): NetworkConfigMessage {
    if(isNetworkConfigMessage(obj)){
      let copy = new NetworkConfigMessage();
      copy = Object.assign(copy, obj);
      if(obj.lan) {
        if(isWiredSettings(obj.lan)){ copy.lan = WiredSettings.copy(obj.lan); } else { throw Error("Missing required property lan of NetworkConfigMessage") }
      }
      if(obj.wifi) {
        if(isWifiSettings(obj.wifi)){ copy.wifi = WifiSettings.copy(obj.wifi); } else { throw Error("Missing required property wifi of NetworkConfigMessage") }
      }
      return copy;
    }
    throw Error("Cannot copy NetworkConfigMessage from Object.");
  } // END copy
} // END NetworkConfigMessage
