/*
 * DO NOT EDIT.  Generated Message from WebApi.simpleDate.json
 * Copyright © Thales, 2023
 */

export function isSimpleDate(obj: any): obj is SimpleDateLike {
  return  obj && // not null AND
    (( obj instanceof SimpleDate) || // instance of SimpleDate OR
    ( typeof obj === 'object' && "Day" in obj && "Month" in obj && "Year" in obj &&     true) // its an object with all the right properties
    );
}
/**
 */
export interface SimpleDateLike {
/**
 * Gets the day value.
 */
  Day: number;
/**
 * Gets the month value.
 */
  Month: number;
/**
 * Gets the year value.
 */
  Year: number;
  /** Indexer */
  [key: string]: any;
}

/**
 * Contains a non-ambigouse data stamp.
 */
export class SimpleDate /*extends MessageData implements SimpleDateLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.Day = 0;
    this.Month = 0;
    this.Year = 0;
  }

/**
 * Gets the day value.
 */
  Day: number;
/**
 * Gets the month value.
 */
  Month: number;
/**
 * Gets the year value.
 */
  Year: number;
  /**
   * parses a string into a SimpleDate.  
   * @returns a new SimpleDate; or undefined if the object could not be parsed.
   */
  static parse(data:string): SimpleDate {
    const obj = JSON.parse(data);
    if(obj && isSimpleDate(obj)){
      return SimpleDate.copy(obj);
    }
    throw Error("Cannot parse SimpleDate from " + data);
  } // END parse

  /**
   * Returns a copy of SimpleDate or undefined if the original object is not copyable.
   */
  static copy(obj: SimpleDateLike): SimpleDate {
    if(isSimpleDate(obj)){
      let copy = new SimpleDate();
      copy = Object.assign(copy, obj);
      return copy;
    }
    throw Error("Cannot copy SimpleDate from Object.");
  } // END copy
} // END SimpleDate
