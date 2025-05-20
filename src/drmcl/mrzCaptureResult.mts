/*
 * DO NOT EDIT.  Generated Message from WebApi.mrzCaptureResult.json
 * Copyright © Thales, 2023
 */

import { MrzData , MrzDataLike, isMrzData} from './mrzData.mjs';

export function isMrzCaptureResult(obj: any): obj is MrzCaptureResultLike {
  return  obj && // not null AND
    (( obj instanceof MrzCaptureResult) || // instance of MrzCaptureResult OR
    ( typeof obj === 'object' && "mrz" in obj &&     true) // its an object with all the right properties
    );
}
/**
 */
export interface MrzCaptureResultLike {
/**
 * Gets the mrz details
 */
  mrz: MrzDataLike;
  /** Indexer */
  [key: string]: any;
}

/**
 * Sends the results of an MRZ detection to the client
 */
export class MrzCaptureResult /*extends CaptureResult implements MrzCaptureResultLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.mrz = new MrzData();
  }

/**
 * Gets the mrz details
 */
  mrz: MrzData;
  /**
   * parses a string into a MrzCaptureResult.  
   * @returns a new MrzCaptureResult; or undefined if the object could not be parsed.
   */
  static parse(data:string): MrzCaptureResult {
    const obj = JSON.parse(data);
    if(obj && isMrzCaptureResult(obj)){
      return MrzCaptureResult.copy(obj);
    }
    throw Error("Cannot parse MrzCaptureResult from " + data);
  } // END parse

  /**
   * Returns a copy of MrzCaptureResult or undefined if the original object is not copyable.
   */
  static copy(obj: MrzCaptureResultLike): MrzCaptureResult {
    if(isMrzCaptureResult(obj)){
      let copy = new MrzCaptureResult();
      copy = Object.assign(copy, obj);
      if(isMrzData(obj.mrz)){ copy.mrz = MrzData.copy(obj.mrz); } else { throw Error("Missing required property mrz of MrzCaptureResult") }
      return copy;
    }
    throw Error("Cannot copy MrzCaptureResult from Object.");
  } // END copy
} // END MrzCaptureResult
