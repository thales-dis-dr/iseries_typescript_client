/*
 * DO NOT EDIT.  Generated Message from WebApi.checkDigitDataItem.json
 * Copyright © Thales, 2023
 */

import { ReaderCheckDigitType } from './ReaderCheckDigitType.mts';
import { ReaderCheckDigitResult } from './ReaderCheckDigitResult.mts';

export function isCheckDigitDataItem(obj: any): obj is CheckDigitDataItemLike {
  return  obj && // not null AND
    (( obj instanceof CheckDigitDataItem) || // instance of CheckDigitDataItem OR
    ( typeof obj === 'object' && "CheckDigitType" in obj && "CodelineNumber" in obj && "CodelinePos" in obj && "Result" in obj && "ValueExpected" in obj && "ValueRead" in obj &&     true) // its an object with all the right properties
    );
}
/**
 */
export interface CheckDigitDataItemLike {
/**
 * ReaderCheckDigitType
 */
  CheckDigitType: ReaderCheckDigitType;
/**
 * The codeline number.
 */
  CodelineNumber: number;
/**
 * The codeline position.
 */
  CodelinePos: number;
/**
 * ReaderCheckDigitResult
 */
  Result: ReaderCheckDigitResult;
/**
 * The character value expected.
 */
  ValueExpected: string;
/**
 * The character value read.
 */
  ValueRead: string;
  /** Indexer */
  [key: string]: any;
}

/**
 * Check digit data item
 */
export class CheckDigitDataItem /*extends MessageData implements CheckDigitDataItemLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.CheckDigitType = ReaderCheckDigitType.CDT_DOCID; 
    this.CodelineNumber = 0;
    this.CodelinePos = 0;
    this.Result = ReaderCheckDigitResult.CDR_INVALID; 
    this.ValueExpected = "";
    this.ValueRead = "";
  }

/**
 * ReaderCheckDigitType
 */
  CheckDigitType: ReaderCheckDigitType;
/**
 * The codeline number.
 */
  CodelineNumber: number;
/**
 * The codeline position.
 */
  CodelinePos: number;
/**
 * ReaderCheckDigitResult
 */
  Result: ReaderCheckDigitResult;
/**
 * The character value expected.
 */
  ValueExpected: string;
/**
 * The character value read.
 */
  ValueRead: string;
  /**
   * parses a string into a CheckDigitDataItem.  
   * @returns a new CheckDigitDataItem; or undefined if the object could not be parsed.
   */
  static parse(data:string): CheckDigitDataItem {
    const obj = JSON.parse(data);
    if(obj && isCheckDigitDataItem(obj)){
      return CheckDigitDataItem.copy(obj);
    }
    throw Error("Cannot parse CheckDigitDataItem from " + data);
  } // END parse

  /**
   * Returns a copy of CheckDigitDataItem or undefined if the original object is not copyable.
   */
  static copy(obj: CheckDigitDataItemLike): CheckDigitDataItem {
    if(isCheckDigitDataItem(obj)){
      let copy = new CheckDigitDataItem();
      copy = Object.assign(copy, obj);
      return copy;
    }
    throw Error("Cannot copy CheckDigitDataItem from Object.");
  } // END copy
} // END CheckDigitDataItem
