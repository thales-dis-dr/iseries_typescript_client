/*
 * DO NOT EDIT.  Generated Message from WebApi.checkForNewFirmwareRequest.json
 * Copyright © Thales, 2023
 */

export function isCheckForNewFirmwareRequest(obj: any): obj is CheckForNewFirmwareRequestLike {
  return  obj && // not null AND
    (( obj instanceof CheckForNewFirmwareRequest) || // instance of CheckForNewFirmwareRequest OR
    ( typeof obj === 'object' &&     true) // its an object with all the right properties
    );
}
/**
 */
export interface CheckForNewFirmwareRequestLike {
  /** Indexer */
  [key: string]: any;
}

/**
 */
export class CheckForNewFirmwareRequest /*extends MessageData implements CheckForNewFirmwareRequestLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
  }

  /**
   * parses a string into a CheckForNewFirmwareRequest.  
   * @returns a new CheckForNewFirmwareRequest; or undefined if the object could not be parsed.
   */
  static parse(data:string): CheckForNewFirmwareRequest {
    const obj = JSON.parse(data);
    if(obj && isCheckForNewFirmwareRequest(obj)){
      return CheckForNewFirmwareRequest.copy(obj);
    }
    throw Error("Cannot parse CheckForNewFirmwareRequest from " + data);
  } // END parse

  /**
   * Returns a copy of CheckForNewFirmwareRequest or undefined if the original object is not copyable.
   */
  static copy(obj: CheckForNewFirmwareRequestLike): CheckForNewFirmwareRequest {
    if(isCheckForNewFirmwareRequest(obj)){
      let copy = new CheckForNewFirmwareRequest();
      copy = Object.assign(copy, obj);
      return copy;
    }
    throw Error("Cannot copy CheckForNewFirmwareRequest from Object.");
  } // END copy
} // END CheckForNewFirmwareRequest
