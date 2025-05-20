/*
 * DO NOT EDIT.  Generated Message from WebApi.logsResponse.json
 * Copyright © Thales, 2023
 */

export function isLogsResponse(obj: any): obj is LogsResponseLike {
  return  obj && // not null AND
    (( obj instanceof LogsResponse) || // instance of LogsResponse OR
    ( typeof obj === 'object' && "logs" in obj && "type" in obj &&     true) // its an object with all the right properties
    );
}
/**
 */
export interface LogsResponseLike {
/**
 * Base 64 encoded log files in ZIP format.
 */
  logs: string;
/**
 * The type of log to return.  1 = SDK Log, 2 = Server App Log, 3 = Server Access Log
 */
  type: number;
  /** Indexer */
  [key: string]: any;
}

/**
 * The response with log data from a logs request
 */
export class LogsResponse /*extends MessageData implements LogsResponseLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.logs = "";
    this.type = 0;
  }

/**
 * Base 64 encoded log files in ZIP format.
 */
  logs: string;
/**
 * The type of log to return.  1 = SDK Log, 2 = Server App Log, 3 = Server Access Log
 */
  type: number;
  /**
   * parses a string into a LogsResponse.  
   * @returns a new LogsResponse; or undefined if the object could not be parsed.
   */
  static parse(data:string): LogsResponse {
    const obj = JSON.parse(data);
    if(obj && isLogsResponse(obj)){
      return LogsResponse.copy(obj);
    }
    throw Error("Cannot parse LogsResponse from " + data);
  } // END parse

  /**
   * Returns a copy of LogsResponse or undefined if the original object is not copyable.
   */
  static copy(obj: LogsResponseLike): LogsResponse {
    if(isLogsResponse(obj)){
      let copy = new LogsResponse();
      copy = Object.assign(copy, obj);
      return copy;
    }
    throw Error("Cannot copy LogsResponse from Object.");
  } // END copy
} // END LogsResponse
