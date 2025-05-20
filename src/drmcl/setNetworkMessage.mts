/*
 * DO NOT EDIT.  Generated Message from WebApi.setNetworkMessage.json
 * Copyright © Thales, 2023
 */

import { WiredSettings , WiredSettingsLike, isWiredSettings} from './wiredSettings.mjs';
import { WifiSettings , WifiSettingsLike, isWifiSettings} from './wifiSettings.mjs';

export function isSetNetworkMessage(obj: any): obj is SetNetworkMessageLike {
  return  obj && // not null AND
    (( obj instanceof SetNetworkMessage) || // instance of SetNetworkMessage OR
    ( typeof obj === 'object' && /*"l" in obj && */ /*"w" in obj && */     true) // its an object with all the right properties
    );
}
/**
 */
export interface SetNetworkMessageLike {
/**
 * Wired LAN settings
 * Alias for lan
 */
  l?: WiredSettingsLike | undefined | null;
/**
 * Wifi LAN settings
 * Alias for wifi
 */
  w?: WifiSettingsLike | undefined | null;
  /** Indexer */
  [key: string]: any;
}

/**
 * Structure of network data.
 */
export class SetNetworkMessage /*extends MessageData implements SetNetworkMessageLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.l = null;
    this.w = null;
  }

/**
 * Wired LAN settings
 * Alias for lan
 */
  l?: WiredSettings | undefined | null;
  get lan(): WiredSettings | undefined | null { return this.l; }
  set lan(value: WiredSettings | undefined | null) { this.l = value; }
/**
 * Wifi LAN settings
 * Alias for wifi
 */
  w?: WifiSettings | undefined | null;
  get wifi(): WifiSettings | undefined | null { return this.w; }
  set wifi(value: WifiSettings | undefined | null) { this.w = value; }
  /**
   * parses a string into a SetNetworkMessage.  
   * @returns a new SetNetworkMessage; or undefined if the object could not be parsed.
   */
  static parse(data:string): SetNetworkMessage {
    const obj = JSON.parse(data);
    if(obj && isSetNetworkMessage(obj)){
      return SetNetworkMessage.copy(obj);
    }
    throw Error("Cannot parse SetNetworkMessage from " + data);
  } // END parse

  /**
   * Returns a copy of SetNetworkMessage or undefined if the original object is not copyable.
   */
  static copy(obj: SetNetworkMessageLike): SetNetworkMessage {
    if(isSetNetworkMessage(obj)){
      let copy = new SetNetworkMessage();
      copy = Object.assign(copy, obj);
      if(obj.l) {
        if(isWiredSettings(obj.l)){ copy.l = WiredSettings.copy(obj.l); } else { throw Error("Missing required property l of SetNetworkMessage") }
      }
      if(obj.w) {
        if(isWifiSettings(obj.w)){ copy.w = WifiSettings.copy(obj.w); } else { throw Error("Missing required property w of SetNetworkMessage") }
      }
      return copy;
    }
    throw Error("Cannot copy SetNetworkMessage from Object.");
  } // END copy
} // END SetNetworkMessage
