/*
 * DO NOT EDIT.  Generated Message from WebApi.networkSetting.json
 * Copyright © Thales, 2023
 */

export function isNetworkSetting(obj: any): obj is NetworkSettingLike {
  return  obj && // not null AND
    (( obj instanceof NetworkSetting) || // instance of NetworkSetting OR
    ( typeof obj === 'object' && "a" in obj && "g" in obj && "n" in obj &&     true) // its an object with all the right properties
    );
}
/**
 */
export interface NetworkSettingLike {
/**
 * Address
 * Alias for address
 */
  a: string;
/**
 * Gateway
 * Alias for gateway
 */
  g: string;
/**
 * Netmask
 * Alias for netmask
 */
  n: string;
  /** Indexer */
  [key: string]: any;
}

/**
 * Network settings
 */
export class NetworkSetting /*extends MessageData implements NetworkSettingLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.a = "";
    this.g = "";
    this.n = "";
  }

/**
 * Address
 * Alias for address
 */
  a: string;
  get address(): string { return this.a; }
  set address(value: string) { this.a = value; }
/**
 * Gateway
 * Alias for gateway
 */
  g: string;
  get gateway(): string { return this.g; }
  set gateway(value: string) { this.g = value; }
/**
 * Netmask
 * Alias for netmask
 */
  n: string;
  get netmask(): string { return this.n; }
  set netmask(value: string) { this.n = value; }
  /**
   * parses a string into a NetworkSetting.  
   * @returns a new NetworkSetting; or undefined if the object could not be parsed.
   */
  static parse(data:string): NetworkSetting {
    const obj = JSON.parse(data);
    if(obj && isNetworkSetting(obj)){
      return NetworkSetting.copy(obj);
    }
    throw Error("Cannot parse NetworkSetting from " + data);
  } // END parse

  /**
   * Returns a copy of NetworkSetting or undefined if the original object is not copyable.
   */
  static copy(obj: NetworkSettingLike): NetworkSetting {
    if(isNetworkSetting(obj)){
      let copy = new NetworkSetting();
      copy = Object.assign(copy, obj);
      return copy;
    }
    throw Error("Cannot copy NetworkSetting from Object.");
  } // END copy
} // END NetworkSetting
