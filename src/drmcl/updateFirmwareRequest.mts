/*
 * DO NOT EDIT.  Generated Message from WebApi.updateFirmwareRequest.json
 * Copyright © Thales, 2023
 */

export function isUpdateFirmwareRequest(obj: any): obj is UpdateFirmwareRequestLike {
  return  obj && // not null AND
    (( obj instanceof UpdateFirmwareRequest) || // instance of UpdateFirmwareRequest OR
    ( typeof obj === 'object' && /*"file" in obj && */ /*"fromLatest" in obj && */ /*"url" in obj && */     true) // its an object with all the right properties
    );
}
/**
 */
export interface UpdateFirmwareRequestLike {
/**
 * The name of a file uploaded with the Upload (79) command
 */
  file?: string | undefined | null;
/**
 * set to true to update from G.U.S. [Depricated]
 */
  fromLatest?: boolean | undefined | null;
/**
 * Address of an swu file
 */
  url?: string | undefined | null;
  /** Indexer */
  [key: string]: any;
}

/**
 */
export class UpdateFirmwareRequest /*extends MessageData implements UpdateFirmwareRequestLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.file = null;
    this.fromLatest = null;
    this.url = null;
  }

/**
 * The name of a file uploaded with the Upload (79) command
 */
  file?: string | undefined | null;
/**
 * set to true to update from G.U.S. [Depricated]
 */
  fromLatest?: boolean | undefined | null;
/**
 * Address of an swu file
 */
  url?: string | undefined | null;
  /**
   * parses a string into a UpdateFirmwareRequest.  
   * @returns a new UpdateFirmwareRequest; or undefined if the object could not be parsed.
   */
  static parse(data:string): UpdateFirmwareRequest {
    const obj = JSON.parse(data);
    if(obj && isUpdateFirmwareRequest(obj)){
      return UpdateFirmwareRequest.copy(obj);
    }
    throw Error("Cannot parse UpdateFirmwareRequest from " + data);
  } // END parse

  /**
   * Returns a copy of UpdateFirmwareRequest or undefined if the original object is not copyable.
   */
  static copy(obj: UpdateFirmwareRequestLike): UpdateFirmwareRequest {
    if(isUpdateFirmwareRequest(obj)){
      let copy = new UpdateFirmwareRequest();
      copy = Object.assign(copy, obj);
      return copy;
    }
    throw Error("Cannot copy UpdateFirmwareRequest from Object.");
  } // END copy
} // END UpdateFirmwareRequest
