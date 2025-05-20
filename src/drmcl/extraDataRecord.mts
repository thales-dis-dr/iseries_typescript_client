/*
 * DO NOT EDIT.  Generated Message from WebApi.extraDataRecord.json
 * Copyright © Thales, 2023
 */

export function isExtraDataRecord(obj: any): obj is ExtraDataRecordLike {
  return  obj && // not null AND
    (( obj instanceof ExtraDataRecord) || // instance of ExtraDataRecord OR
    ( typeof obj === 'object' && "key" in obj && "value" in obj &&     true) // its an object with all the right properties
    );
}
/**
 */
export interface ExtraDataRecordLike {
/**
 * A string key
 */
  key: string;
/**
 * A string value
 */
  value: string;
  /** Indexer */
  [key: string]: any;
}

/**
 * Contains an key value data elements
 */
export class ExtraDataRecord /*extends MessageData implements ExtraDataRecordLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.key = "";
    this.value = "";
  }

/**
 * A string key
 */
  key: string;
/**
 * A string value
 */
  value: string;
  /**
   * parses a string into a ExtraDataRecord.  
   * @returns a new ExtraDataRecord; or undefined if the object could not be parsed.
   */
  static parse(data:string): ExtraDataRecord {
    const obj = JSON.parse(data);
    if(obj && isExtraDataRecord(obj)){
      return ExtraDataRecord.copy(obj);
    }
    throw Error("Cannot parse ExtraDataRecord from " + data);
  } // END parse

  /**
   * Returns a copy of ExtraDataRecord or undefined if the original object is not copyable.
   */
  static copy(obj: ExtraDataRecordLike): ExtraDataRecord {
    if(isExtraDataRecord(obj)){
      let copy = new ExtraDataRecord();
      copy = Object.assign(copy, obj);
      return copy;
    }
    throw Error("Cannot copy ExtraDataRecord from Object.");
  } // END copy
} // END ExtraDataRecord
