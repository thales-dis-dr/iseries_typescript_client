/*
 * DO NOT EDIT.  Generated Message from WebApi.barcodeCaptureResult.json
 * Copyright © Thales, 2023
 */

export function isBarcodeCaptureResult(obj: any): obj is BarcodeCaptureResultLike {
  return  obj && // not null AND
    (( obj instanceof BarcodeCaptureResult) || // instance of BarcodeCaptureResult OR
    ( typeof obj === 'object' && "barcode" in obj && "barcode_side" in obj &&     true) // its an object with all the right properties
    );
}
/**
 */
export interface BarcodeCaptureResultLike {
/**
 * Base 64 encoded Barcode data
 */
  barcode: string;
/**
 * Document barcode side
 */
  barcode_side: string;
  /** Indexer */
  [key: string]: any;
}

/**
 * Sends barcode data
 */
export class BarcodeCaptureResult /*extends CaptureResult implements BarcodeCaptureResultLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.barcode = "";
    this.barcode_side = "";
  }

/**
 * Base 64 encoded Barcode data
 */
  barcode: string;
/**
 * Document barcode side
 */
  barcode_side: string;
  /**
   * parses a string into a BarcodeCaptureResult.  
   * @returns a new BarcodeCaptureResult; or undefined if the object could not be parsed.
   */
  static parse(data:string): BarcodeCaptureResult {
    const obj = JSON.parse(data);
    if(obj && isBarcodeCaptureResult(obj)){
      return BarcodeCaptureResult.copy(obj);
    }
    throw Error("Cannot parse BarcodeCaptureResult from " + data);
  } // END parse

  /**
   * Returns a copy of BarcodeCaptureResult or undefined if the original object is not copyable.
   */
  static copy(obj: BarcodeCaptureResultLike): BarcodeCaptureResult {
    if(isBarcodeCaptureResult(obj)){
      let copy = new BarcodeCaptureResult();
      copy = Object.assign(copy, obj);
      return copy;
    }
    throw Error("Cannot copy BarcodeCaptureResult from Object.");
  } // END copy
} // END BarcodeCaptureResult
