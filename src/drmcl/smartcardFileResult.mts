/*
 * DO NOT EDIT.  Generated Message from WebApi.smartcardFileResult.json
 * Copyright © Thales, 2023
 */

import { MrzData , type MrzDataLike, isMrzData} from './mrzData.mts';
import { TRISTATE } from './TRISTATE.mts';
import { ReaderValidationCode } from './ReaderValidationCode.mts';

export function isSmartcardFileResult(obj: any): obj is SmartcardFileResultLike {
  return  obj && // not null AND
    (( obj instanceof SmartcardFileResult) || // instance of SmartcardFileResult OR
    ( typeof obj === 'object' && /*"codeline_data" in obj && */ /*"data" in obj && */ "id" in obj && "name" in obj && /*"operation_status" in obj && */ /*"validation_code" in obj && */     true) // its an object with all the right properties
    );
}
/**
 */
export interface SmartcardFileResultLike {
/**
 * Gets the mrz details
 */
  codeline_data?: MrzDataLike | undefined | null;
/**
 * binary data
 */
  data?: string | undefined | null;
/**
 * The file Id
 */
  id: number;
/**
 * the file name
 */
  name: string;
/**
 * TRISTATE status
 */
  operation_status?: TRISTATE | undefined | null;
/**
 * ReaderValidationCode
 */
  validation_code?: ReaderValidationCode | undefined | null;
  /** Indexer */
  [key: string]: any;
}

/**
 * Contains the reults of parsing a smartcard file
 */
export class SmartcardFileResult /*extends CaptureResult implements SmartcardFileResultLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.codeline_data = null;
    this.data = null;
    this.id = 0;
    this.name = "";
    this.operation_status = null;
    this.validation_code = null;
  }

/**
 * Gets the mrz details
 */
  codeline_data?: MrzData | undefined | null;
/**
 * binary data
 */
  data?: string | undefined | null;
/**
 * The file Id
 */
  id: number;
/**
 * the file name
 */
  name: string;
/**
 * TRISTATE status
 */
  operation_status?: TRISTATE | undefined | null;
/**
 * ReaderValidationCode
 */
  validation_code?: ReaderValidationCode | undefined | null;
  /**
   * parses a string into a SmartcardFileResult.  
   * @returns a new SmartcardFileResult; or undefined if the object could not be parsed.
   */
  static parse(data:string): SmartcardFileResult {
    const obj = JSON.parse(data);
    if(obj && isSmartcardFileResult(obj)){
      return SmartcardFileResult.copy(obj);
    }
    throw Error("Cannot parse SmartcardFileResult from " + data);
  } // END parse

  /**
   * Returns a copy of SmartcardFileResult or undefined if the original object is not copyable.
   */
  static copy(obj: SmartcardFileResultLike): SmartcardFileResult {
    if(isSmartcardFileResult(obj)){
      let copy = new SmartcardFileResult();
      copy = Object.assign(copy, obj);
      if(obj.codeline_data) {
        if(isMrzData(obj.codeline_data)){ copy.codeline_data = MrzData.copy(obj.codeline_data); } else { throw Error("Missing required property codeline_data of SmartcardFileResult") }
      }
      return copy;
    }
    throw Error("Cannot copy SmartcardFileResult from Object.");
  } // END copy
} // END SmartcardFileResult
