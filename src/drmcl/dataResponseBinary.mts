/*
 * DO NOT EDIT.  Generated Message from WebApi.dataResponseBinary.json
 * Copyright © Thales, 2023
 */

import { ReaderDataType } from './ReaderDataType.mts';

export function isDataResponseBinary(obj: any): obj is DataResponseBinaryLike {
  return  obj && // not null AND
    (( obj instanceof DataResponseBinary) || // instance of DataResponseBinary OR
    ( typeof obj === 'object' && "data" in obj && "id" in obj && "name" in obj && "type" in obj &&     true) // its an object with all the right properties
    );
}
/**
 */
export interface DataResponseBinaryLike {
/**
 * binary data
 */
  data: string;
/**
 * Data Item ID
 */
  id: number;
/**
 * Data Item Name
 */
  name: string;
/**
 * ReaderDataType
 */
  type: ReaderDataType;
  /** Indexer */
  [key: string]: any;
}

/**
 * Returns the binary value of the data item requested.
 */
export class DataResponseBinary /*extends MessageData implements DataResponseBinaryLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.data = "";
    this.id = 0;
    this.name = "";
    this.type = ReaderDataType.SCDG1_CODELINE; 
  }

/**
 * binary data
 */
  data: string;
/**
 * Data Item ID
 */
  id: number;
/**
 * Data Item Name
 */
  name: string;
/**
 * ReaderDataType
 */
  type: ReaderDataType;
  /**
   * parses a string into a DataResponseBinary.  
   * @returns a new DataResponseBinary; or undefined if the object could not be parsed.
   */
  static parse(data:string): DataResponseBinary {
    const obj = JSON.parse(data);
    if(obj && isDataResponseBinary(obj)){
      return DataResponseBinary.copy(obj);
    }
    throw Error("Cannot parse DataResponseBinary from " + data);
  } // END parse

  /**
   * Returns a copy of DataResponseBinary or undefined if the original object is not copyable.
   */
  static copy(obj: DataResponseBinaryLike): DataResponseBinary {
    if(isDataResponseBinary(obj)){
      let copy = new DataResponseBinary();
      copy = Object.assign(copy, obj);
      return copy;
    }
    throw Error("Cannot copy DataResponseBinary from Object.");
  } // END copy
} // END DataResponseBinary
