/*
 * DO NOT EDIT.  Generated Message from WebApi.dataResponseValidationCode.json
 * Copyright © Thales, 2023
 */

import { ReaderDataType } from './ReaderDataType.mts';
import { ReaderValidationCode } from './ReaderValidationCode.mts';

export function isDataResponseValidationCode(obj: any): obj is DataResponseValidationCodeLike {
  return  obj && // not null AND
    (( obj instanceof DataResponseValidationCode) || // instance of DataResponseValidationCode OR
    ( typeof obj === 'object' && "id" in obj && "name" in obj && "type" in obj && "validation_code" in obj &&     true) // its an object with all the right properties
    );
}
/**
 */
export interface DataResponseValidationCodeLike {
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
 * ReaderValidationCode
 */
  validation_code: ReaderValidationCode;
  /** Indexer */
  [key: string]: any;
}

/**
 * Returns the ReaderValidationCode value of the data item requested.
 */
export class DataResponseValidationCode /*extends MessageData implements DataResponseValidationCodeLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.id = 0;
    this.name = "";
    this.type = ReaderDataType.SCDG1_CODELINE; 
    this.validation_code = ReaderValidationCode.RFID_VC_NOT_PERFORMED; 
  }

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
 * ReaderValidationCode
 */
  validation_code: ReaderValidationCode;
  /**
   * parses a string into a DataResponseValidationCode.  
   * @returns a new DataResponseValidationCode; or undefined if the object could not be parsed.
   */
  static parse(data:string): DataResponseValidationCode {
    const obj = JSON.parse(data);
    if(obj && isDataResponseValidationCode(obj)){
      return DataResponseValidationCode.copy(obj);
    }
    throw Error("Cannot parse DataResponseValidationCode from " + data);
  } // END parse

  /**
   * Returns a copy of DataResponseValidationCode or undefined if the original object is not copyable.
   */
  static copy(obj: DataResponseValidationCodeLike): DataResponseValidationCode {
    if(isDataResponseValidationCode(obj)){
      let copy = new DataResponseValidationCode();
      copy = Object.assign(copy, obj);
      return copy;
    }
    throw Error("Cannot copy DataResponseValidationCode from Object.");
  } // END copy
} // END DataResponseValidationCode
