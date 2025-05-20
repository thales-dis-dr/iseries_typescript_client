/*
 * DO NOT EDIT.  Generated Message from WebApi.wifiScanResult.json
 * Copyright © Thales, 2023
 */

import { WifiScanRecord , WifiScanRecordLike, isWifiScanRecord} from './wifiScanRecord.mjs';

export function isWifiScanResult(obj: any): obj is WifiScanResultLike {
  return  obj && // not null AND
    (( obj instanceof WifiScanResult) || // instance of WifiScanResult OR
    ( typeof obj === 'object' && "records" in obj &&     true) // its an object with all the right properties
    );
}
/**
 */
export interface WifiScanResultLike {
/**
 * An array of results
 */
  records: WifiScanRecordLike[];
  /** Indexer */
  [key: string]: any;
}

/**
 * Results of scanning for a Wifi access point.
 */
export class WifiScanResult /*extends MessageData implements WifiScanResultLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.records = [];
  }

/**
 * An array of results
 */
  records: WifiScanRecord[];
  /**
   * parses a string into a WifiScanResult.  
   * @returns a new WifiScanResult; or undefined if the object could not be parsed.
   */
  static parse(data:string): WifiScanResult {
    const obj = JSON.parse(data);
    if(obj && isWifiScanResult(obj)){
      return WifiScanResult.copy(obj);
    }
    throw Error("Cannot parse WifiScanResult from " + data);
  } // END parse

  /**
   * Returns a copy of WifiScanResult or undefined if the original object is not copyable.
   */
  static copy(obj: WifiScanResultLike): WifiScanResult {
    if(isWifiScanResult(obj)){
      let copy = new WifiScanResult();
      copy = Object.assign(copy, obj);
      copy.records = new Array<WifiScanRecord>();
      for(const el of obj.records){
        if(isWifiScanRecord(el)){
          copy.records.push(WifiScanRecord.copy(el));
        } else { throw Error("Missing required property records of WifiScanResult") }
      }
      return copy;
    }
    throw Error("Cannot copy WifiScanResult from Object.");
  } // END copy
} // END WifiScanResult
