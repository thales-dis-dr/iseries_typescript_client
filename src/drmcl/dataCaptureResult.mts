/*
 * DO NOT EDIT.  Generated Message from WebApi.dataCaptureResult.json
 * Copyright © Thales, 2023
 */

import { ReaderDataType } from './ReaderDataType.mjs';

export function isDataCaptureResult(obj: any): obj is DataCaptureResultLike {
  return  obj && // not null AND
    (( obj instanceof DataCaptureResult) || // instance of DataCaptureResult OR
    ( typeof obj === 'object' && "id" in obj && "type" in obj &&     true) // its an object with all the right properties
    );
}
/**
 */
export interface DataCaptureResultLike {
/**
 * Data Item ID
 */
  id: number;
/**
 * ReaderDataType
 */
  type: ReaderDataType;
  /** Indexer */
  [key: string]: any;
}

/**
 * Contains the data item captured from a document, which can be used to request the data item value
 */
export class DataCaptureResult /*extends CaptureResult implements DataCaptureResultLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.id = 0;
    this.type = ReaderDataType.SCDG1_CODELINE; 
  }

/**
 * Data Item ID
 */
  id: number;
/**
 * ReaderDataType
 */
  type: ReaderDataType;
  /**
   * parses a string into a DataCaptureResult.  
   * @returns a new DataCaptureResult; or undefined if the object could not be parsed.
   */
  static parse(data:string): DataCaptureResult {
    const obj = JSON.parse(data);
    if(obj && isDataCaptureResult(obj)){
      return DataCaptureResult.copy(obj);
    }
    throw Error("Cannot parse DataCaptureResult from " + data);
  } // END parse

  /**
   * Returns a copy of DataCaptureResult or undefined if the original object is not copyable.
   */
  static copy(obj: DataCaptureResultLike): DataCaptureResult {
    if(isDataCaptureResult(obj)){
      let copy = new DataCaptureResult();
      copy = Object.assign(copy, obj);
      return copy;
    }
    throw Error("Cannot copy DataCaptureResult from Object.");
  } // END copy
} // END DataCaptureResult
