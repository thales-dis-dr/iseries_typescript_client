/*
 * DO NOT EDIT.  Generated Message from WebApi.updateFirmwareResult.json
 * Copyright © Thales, 2023
 */

export function isUpdateFirmwareResult(obj: any): obj is UpdateFirmwareResultLike {
  return  obj && // not null AND
    (( obj instanceof UpdateFirmwareResult) || // instance of UpdateFirmwareResult OR
    ( typeof obj === 'object' &&     true) // its an object with all the right properties
    );
}
/**
 */
export interface UpdateFirmwareResultLike {
  /** Indexer */
  [key: string]: any;
}

/**
 */
export class UpdateFirmwareResult /*extends MessageData implements UpdateFirmwareResultLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
  }

  /**
   * parses a string into a UpdateFirmwareResult.  
   * @returns a new UpdateFirmwareResult; or undefined if the object could not be parsed.
   */
  static parse(data:string): UpdateFirmwareResult {
    const obj = JSON.parse(data);
    if(obj && isUpdateFirmwareResult(obj)){
      return UpdateFirmwareResult.copy(obj);
    }
    throw Error("Cannot parse UpdateFirmwareResult from " + data);
  } // END parse

  /**
   * Returns a copy of UpdateFirmwareResult or undefined if the original object is not copyable.
   */
  static copy(obj: UpdateFirmwareResultLike): UpdateFirmwareResult {
    if(isUpdateFirmwareResult(obj)){
      let copy = new UpdateFirmwareResult();
      copy = Object.assign(copy, obj);
      return copy;
    }
    throw Error("Cannot copy UpdateFirmwareResult from Object.");
  } // END copy
} // END UpdateFirmwareResult
