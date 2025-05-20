/*
 * DO NOT EDIT.  Generated Message from WebApi.logsRequest.json
 * Copyright © Thales, 2023
 */

export function isLogsRequest(obj: any): obj is LogsRequestLike {
  return  obj && // not null AND
    (( obj instanceof LogsRequest) || // instance of LogsRequest OR
    ( typeof obj === 'object' && "type" in obj &&     true) // its an object with all the right properties
    );
}
/**
 */
export interface LogsRequestLike {
/**
 * The type of log to return.  1 = SDK Log, 2 = Server App Log, 3 = Server Access Log
 */
  type: number;
  /** Indexer */
  [key: string]: any;
}

/**
 * Request logs
 */
export class LogsRequest /*extends MessageData implements LogsRequestLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.type = 0;
  }

/**
 * The type of log to return.  1 = SDK Log, 2 = Server App Log, 3 = Server Access Log
 */
  type: number;
  /**
   * parses a string into a LogsRequest.  
   * @returns a new LogsRequest; or undefined if the object could not be parsed.
   */
  static parse(data:string): LogsRequest {
    const obj = JSON.parse(data);
    if(obj && isLogsRequest(obj)){
      return LogsRequest.copy(obj);
    }
    throw Error("Cannot parse LogsRequest from " + data);
  } // END parse

  /**
   * Returns a copy of LogsRequest or undefined if the original object is not copyable.
   */
  static copy(obj: LogsRequestLike): LogsRequest {
    if(isLogsRequest(obj)){
      let copy = new LogsRequest();
      copy = Object.assign(copy, obj);
      return copy;
    }
    throw Error("Cannot copy LogsRequest from Object.");
  } // END copy
} // END LogsRequest
