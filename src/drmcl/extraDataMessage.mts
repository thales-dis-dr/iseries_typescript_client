/*
 * DO NOT EDIT.  Generated Message from WebApi.extraDataMessage.json
 * Copyright © Thales, 2023
 */

import { ExtraDataRecord, ExtraDataRecordLike } from './extraDataRecord.mjs';

export function isExtraDataMessage(obj: any): obj is ExtraDataMessageLike {
  return  obj && // not null AND
    (( obj instanceof ExtraDataMessage) || // instance of ExtraDataMessage OR
    ( typeof obj === 'object' && "records" in obj &&     true) // its an object with all the right properties
    );
}
/**
 */
export interface ExtraDataMessageLike {
/**
 * A set of kvp records.
 */
  records: ExtraDataRecordLike[];
  /** Indexer */
  [key: string]: any;
}

/**
 * Contains the extraData elements
 */
export class ExtraDataMessage /*extends MessageData implements ExtraDataMessageLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.records = [];
  }

/**
 * A set of kvp records.
 */
  records: ExtraDataRecord[];
  /**
   * parses a string into a ExtraDataMessage.  
   * @returns a new ExtraDataMessage; or undefined if the object could not be parsed.
   */
  static parse(data:string): ExtraDataMessage {
    const obj = JSON.parse(data);
    if(obj && isExtraDataMessage(obj)){
      return ExtraDataMessage.copy(obj);
    }
    throw Error("Cannot parse ExtraDataMessage from " + data);
  } // END parse

  /**
   * Returns a copy of ExtraDataMessage or undefined if the original object is not copyable.
   */
  static copy(obj: ExtraDataMessageLike): ExtraDataMessage {
    if(isExtraDataMessage(obj)){
      let copy = new ExtraDataMessage();
      copy = Object.assign(copy, obj);
      return copy;
    }
    throw Error("Cannot copy ExtraDataMessage from Object.");
  } // END copy
} // END ExtraDataMessage
