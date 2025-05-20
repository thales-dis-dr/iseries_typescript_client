/*
 * DO NOT EDIT.  Generated Message from WebApi.logsClearRequest.json
 * Copyright © Thales, 2023
 */

export function isLogsClearRequest(obj: any): obj is LogsClearRequestLike {
  return  obj && // not null AND
    (( obj instanceof LogsClearRequest) || // instance of LogsClearRequest OR
    ( typeof obj === 'object' && /*"type" in obj && */     true) // its an object with all the right properties
    );
}
/**
 */
export interface LogsClearRequestLike {
/**
 * The type of log to clear.  1 = SDK Log, 2 = Server App Log, 3 = Server Access Log, 4= All
 */
  type?: number | undefined | null;
  /** Indexer */
  [key: string]: any;
}

/**
 * Clear log files.
 */
export class LogsClearRequest /*extends MessageData implements LogsClearRequestLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.type = null;
  }

/**
 * The type of log to clear.  1 = SDK Log, 2 = Server App Log, 3 = Server Access Log, 4= All
 */
  type?: number | undefined | null;
  /**
   * parses a string into a LogsClearRequest.  
   * @returns a new LogsClearRequest; or undefined if the object could not be parsed.
   */
  static parse(data:string): LogsClearRequest {
    const obj = JSON.parse(data);
    if(obj && isLogsClearRequest(obj)){
      return LogsClearRequest.copy(obj);
    }
    throw Error("Cannot parse LogsClearRequest from " + data);
  } // END parse

  /**
   * Returns a copy of LogsClearRequest or undefined if the original object is not copyable.
   */
  static copy(obj: LogsClearRequestLike): LogsClearRequest {
    if(isLogsClearRequest(obj)){
      let copy = new LogsClearRequest();
      copy = Object.assign(copy, obj);
      return copy;
    }
    throw Error("Cannot copy LogsClearRequest from Object.");
  } // END copy
} // END LogsClearRequest
