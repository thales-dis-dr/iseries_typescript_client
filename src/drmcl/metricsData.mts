/*
 * DO NOT EDIT.  Generated Message from WebApi.metricsData.json
 * Copyright © Thales, 2023
 */

export function isMetricsData(obj: any): obj is MetricsDataLike {
  return  obj && // not null AND
    (( obj instanceof MetricsData) || // instance of MetricsData OR
    ( typeof obj === 'object' && "Key" in obj && "TimeStamp" in obj && "Value" in obj &&     true) // its an object with all the right properties
    );
}
/**
 * @deprecated The interface should not be used. This will be removed in a future version
 */
export interface MetricsDataLike {
/**
 * Ordinate
 */
  Key: string;
/**
 * Date/Time
 */
  TimeStamp: string;
/**
 * Value
 */
  Value: number;
  /** Indexer */
  [key: string]: any;
}

/**
 * An individual event record
 * @deprecated This item will be removed in a future release. This will be removed in a future version
 */
export class MetricsData /*extends MessageData implements MetricsDataLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.Key = "";
    this.TimeStamp = "";
    this.Value = 0;
  }

/**
 * Ordinate
 */
  Key: string;
/**
 * Date/Time
 */
  TimeStamp: string;
/**
 * Value
 */
  Value: number;
  /**
   * parses a string into a MetricsData.  
   * @returns a new MetricsData; or undefined if the object could not be parsed.
   */
  static parse(data:string): MetricsData {
    const obj = JSON.parse(data);
    if(obj && isMetricsData(obj)){
      return MetricsData.copy(obj);
    }
    throw Error("Cannot parse MetricsData from " + data);
  } // END parse

  /**
   * Returns a copy of MetricsData or undefined if the original object is not copyable.
   */
  static copy(obj: MetricsDataLike): MetricsData {
    if(isMetricsData(obj)){
      let copy = new MetricsData();
      copy = Object.assign(copy, obj);
      return copy;
    }
    throw Error("Cannot copy MetricsData from Object.");
  } // END copy
} // END MetricsData
