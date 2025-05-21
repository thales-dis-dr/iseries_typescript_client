/*
 * DO NOT EDIT.  Generated Message from WebApi.metricsResponse.json
 * Copyright © Thales, 2023
 */

import {
  MetricsData,
  type MetricsDataLike,
  isMetricsData,
} from "./metricsData.mts";

export function isMetricsResponse(obj: any): obj is MetricsResponseLike {
  return (
    obj && // not null AND
    (obj instanceof MetricsResponse || // instance of MetricsResponse OR
      (typeof obj === "object" &&
        "hw" in obj &&
        /*"metrics" in obj && */ "serial" in obj &&
        "version" in obj &&
        true)) // its an object with all the right properties
  );
}
/**
 * @deprecated The interface should not be used. This will be removed in a future version
 */
export interface MetricsResponseLike {
  /**
   * hardware identifier
   */
  hw: string;
  /**
   * Collection of event metrics data
   */
  metrics?: MetricsDataLike[] | undefined | null;
  /**
   * Serial
   */
  serial: string;
  /**
   * Version
   */
  version: string;
  /** Indexer */
  [key: string]: any;
}

/**
 * The response with event metrics data from an event metrics data request
 * @deprecated This item will be removed in a future release. This will be removed in a future version
 */
export class MetricsResponse /*extends MessageData implements MetricsResponseLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.hw = "";
    this.metrics = null;
    this.serial = "";
    this.version = "";
  }

  /**
   * hardware identifier
   */
  hw: string;
  /**
   * Collection of event metrics data
   */
  metrics?: MetricsData[] | undefined | null;
  /**
   * Serial
   */
  serial: string;
  /**
   * Version
   */
  version: string;
  /**
   * parses a string into a MetricsResponse.
   * @returns a new MetricsResponse; or undefined if the object could not be parsed.
   */
  static parse(data: string): MetricsResponse {
    const obj = JSON.parse(data);
    if (obj && isMetricsResponse(obj)) {
      return MetricsResponse.copy(obj);
    }
    throw Error("Cannot parse MetricsResponse from " + data);
  } // END parse

  /**
   * Returns a copy of MetricsResponse or undefined if the original object is not copyable.
   */
  static copy(obj: MetricsResponseLike): MetricsResponse {
    if (isMetricsResponse(obj)) {
      let copy = new MetricsResponse();
      copy = Object.assign(copy, obj);
      if (obj.metrics) {
        copy.metrics = new Array<MetricsData>();
        for (const el of obj.metrics) {
          if (isMetricsData(el)) {
            copy.metrics.push(MetricsData.copy(el));
          } else {
            throw Error("Missing required property metrics of MetricsResponse");
          }
        }
      }
      return copy;
    }
    throw Error("Cannot copy MetricsResponse from Object.");
  } // END copy
} // END MetricsResponse
