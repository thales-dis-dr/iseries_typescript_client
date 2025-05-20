/*
 * DO NOT EDIT.  Generated Message from WebApi.metricsRequest.json
 * Copyright © Thales, 2023
 */

export function isMetricsRequest(obj: any): obj is MetricsRequestLike {
  return  obj && // not null AND
    (( obj instanceof MetricsRequest) || // instance of MetricsRequest OR
    ( typeof obj === 'object' &&     true) // its an object with all the right properties
    );
}
/**
 * @deprecated The interface should not be used. This will be removed in a future version
 */
export interface MetricsRequestLike {
  /** Indexer */
  [key: string]: any;
}

/**
 * Retrieve device metrics
 * @deprecated This item will be removed in a future release. This will be removed in a future version
 */
export class MetricsRequest /*extends MessageData implements MetricsRequestLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
  }

  /**
   * parses a string into a MetricsRequest.  
   * @returns a new MetricsRequest; or undefined if the object could not be parsed.
   */
  static parse(data:string): MetricsRequest {
    const obj = JSON.parse(data);
    if(obj && isMetricsRequest(obj)){
      return MetricsRequest.copy(obj);
    }
    throw Error("Cannot parse MetricsRequest from " + data);
  } // END parse

  /**
   * Returns a copy of MetricsRequest or undefined if the original object is not copyable.
   */
  static copy(obj: MetricsRequestLike): MetricsRequest {
    if(isMetricsRequest(obj)){
      let copy = new MetricsRequest();
      copy = Object.assign(copy, obj);
      return copy;
    }
    throw Error("Cannot copy MetricsRequest from Object.");
  } // END copy
} // END MetricsRequest
