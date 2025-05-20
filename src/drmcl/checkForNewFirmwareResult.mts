/*
 * DO NOT EDIT.  Generated Message from WebApi.checkForNewFirmwareResult.json
 * Copyright © Thales, 2023
 */

export function isCheckForNewFirmwareResult(obj: any): obj is CheckForNewFirmwareResultLike {
  return  obj && // not null AND
    (( obj instanceof CheckForNewFirmwareResult) || // instance of CheckForNewFirmwareResult OR
    ( typeof obj === 'object' && /*"isUpdate" in obj && */ /*"version" in obj && */     true) // its an object with all the right properties
    );
}
/**
 */
export interface CheckForNewFirmwareResultLike {
/**
 * Indicates if an update is a vailable on the GUS
 */
  isUpdate?: boolean | undefined | null;
/**
 * Version number
 */
  version?: string | undefined | null;
  /** Indexer */
  [key: string]: any;
}

/**
 */
export class CheckForNewFirmwareResult /*extends MessageData implements CheckForNewFirmwareResultLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.isUpdate = null;
    this.version = null;
  }

/**
 * Indicates if an update is a vailable on the GUS
 */
  isUpdate?: boolean | undefined | null;
/**
 * Version number
 */
  version?: string | undefined | null;
  /**
   * parses a string into a CheckForNewFirmwareResult.  
   * @returns a new CheckForNewFirmwareResult; or undefined if the object could not be parsed.
   */
  static parse(data:string): CheckForNewFirmwareResult {
    const obj = JSON.parse(data);
    if(obj && isCheckForNewFirmwareResult(obj)){
      return CheckForNewFirmwareResult.copy(obj);
    }
    throw Error("Cannot parse CheckForNewFirmwareResult from " + data);
  } // END parse

  /**
   * Returns a copy of CheckForNewFirmwareResult or undefined if the original object is not copyable.
   */
  static copy(obj: CheckForNewFirmwareResultLike): CheckForNewFirmwareResult {
    if(isCheckForNewFirmwareResult(obj)){
      let copy = new CheckForNewFirmwareResult();
      copy = Object.assign(copy, obj);
      return copy;
    }
    throw Error("Cannot copy CheckForNewFirmwareResult from Object.");
  } // END copy
} // END CheckForNewFirmwareResult
