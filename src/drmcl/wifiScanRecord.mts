/*
 * DO NOT EDIT.  Generated Message from WebApi.wifiScanRecord.json
 * Copyright © Thales, 2023
 */

export function isWifiScanRecord(obj: any): obj is WifiScanRecordLike {
  return  obj && // not null AND
    (( obj instanceof WifiScanRecord) || // instance of WifiScanRecord OR
    ( typeof obj === 'object' && /*"bssid" in obj && */ /*"flags" in obj && */ /*"frequency" in obj && */ /*"signalLevel" in obj && */ /*"ssid" in obj && */     true) // its an object with all the right properties
    );
}
/**
 */
export interface WifiScanRecordLike {
/**
 * The access points BSSID
 */
  bssid?: string | undefined | null;
/**
 * Access points flags
 */
  flags?: string | undefined | null;
/**
 * Access points frequency
 */
  frequency?: any | undefined | null;
/**
 * Access points signalLevel
 */
  signalLevel?: any | undefined | null;
/**
 * The access points SSID
 */
  ssid?: string | undefined | null;
  /** Indexer */
  [key: string]: any;
}

/**
 * Results of scanning for a Wifi access point.
 */
export class WifiScanRecord /*extends MessageData implements WifiScanRecordLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.bssid = null;
    this.flags = null;
    this.frequency = null;
    this.signalLevel = null;
    this.ssid = null;
  }

/**
 * The access points BSSID
 */
  bssid?: string | undefined | null;
/**
 * Access points flags
 */
  flags?: string | undefined | null;
/**
 * Access points frequency
 */
  frequency?: any | undefined | null;
/**
 * Access points signalLevel
 */
  signalLevel?: any | undefined | null;
/**
 * The access points SSID
 */
  ssid?: string | undefined | null;
  /**
   * parses a string into a WifiScanRecord.  
   * @returns a new WifiScanRecord; or undefined if the object could not be parsed.
   */
  static parse(data:string): WifiScanRecord {
    const obj = JSON.parse(data);
    if(obj && isWifiScanRecord(obj)){
      return WifiScanRecord.copy(obj);
    }
    throw Error("Cannot parse WifiScanRecord from " + data);
  } // END parse

  /**
   * Returns a copy of WifiScanRecord or undefined if the original object is not copyable.
   */
  static copy(obj: WifiScanRecordLike): WifiScanRecord {
    if(isWifiScanRecord(obj)){
      let copy = new WifiScanRecord();
      copy = Object.assign(copy, obj);
      return copy;
    }
    throw Error("Cannot copy WifiScanRecord from Object.");
  } // END copy
} // END WifiScanRecord
