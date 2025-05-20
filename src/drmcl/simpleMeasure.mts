/*
 * DO NOT EDIT.  Generated Message from WebApi.simpleMeasure.json
 * Copyright © Thales, 2023
 */

import { MeasurementFormat } from './MeasurementFormat.mjs';

export function isSimpleMeasure(obj: any): obj is SimpleMeasureLike {
  return  obj && // not null AND
    (( obj instanceof SimpleMeasure) || // instance of SimpleMeasure OR
    ( typeof obj === 'object' && "Format" in obj && "Measurement" in obj &&     true) // its an object with all the right properties
    );
}
/**
 */
export interface SimpleMeasureLike {
/**
 * Gets the units of the measurement.
 */
  Format: MeasurementFormat;
/**
 * Gets the value of the measurement.
 */
  Measurement: number;
  /** Indexer */
  [key: string]: any;
}

/**
 * Contains a measurment
 */
export class SimpleMeasure /*extends MessageData implements SimpleMeasureLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.Format = MeasurementFormat.UNKNOWN; 
    this.Measurement = 0;
  }

/**
 * Gets the units of the measurement.
 */
  Format: MeasurementFormat;
/**
 * Gets the value of the measurement.
 */
  Measurement: number;
  /**
   * parses a string into a SimpleMeasure.  
   * @returns a new SimpleMeasure; or undefined if the object could not be parsed.
   */
  static parse(data:string): SimpleMeasure {
    const obj = JSON.parse(data);
    if(obj && isSimpleMeasure(obj)){
      return SimpleMeasure.copy(obj);
    }
    throw Error("Cannot parse SimpleMeasure from " + data);
  } // END parse

  /**
   * Returns a copy of SimpleMeasure or undefined if the original object is not copyable.
   */
  static copy(obj: SimpleMeasureLike): SimpleMeasure {
    if(isSimpleMeasure(obj)){
      let copy = new SimpleMeasure();
      copy = Object.assign(copy, obj);
      return copy;
    }
    throw Error("Cannot copy SimpleMeasure from Object.");
  } // END copy
} // END SimpleMeasure
