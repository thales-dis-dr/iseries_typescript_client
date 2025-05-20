/*
 * DO NOT EDIT.  Generated Message from WebApi.captureError.json
 * Copyright © Thales, 2023
 */

export function isCaptureError(obj: any): obj is CaptureErrorLike {
  return  obj && // not null AND
    (( obj instanceof CaptureError) || // instance of CaptureError OR
    ( typeof obj === 'object' && "message" in obj &&     true) // its an object with all the right properties
    );
}
/**
 */
export interface CaptureErrorLike {
/**
 * A message describing the error.
 */
  message: string;
  /** Indexer */
  [key: string]: any;
}

/**
 */
export class CaptureError /*extends MessageData implements CaptureErrorLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.message = "";
  }

/**
 * A message describing the error.
 */
  message: string;
  /**
   * parses a string into a CaptureError.  
   * @returns a new CaptureError; or undefined if the object could not be parsed.
   */
  static parse(data:string): CaptureError {
    const obj = JSON.parse(data);
    if(obj && isCaptureError(obj)){
      return CaptureError.copy(obj);
    }
    throw Error("Cannot parse CaptureError from " + data);
  } // END parse

  /**
   * Returns a copy of CaptureError or undefined if the original object is not copyable.
   */
  static copy(obj: CaptureErrorLike): CaptureError {
    if(isCaptureError(obj)){
      let copy = new CaptureError();
      copy = Object.assign(copy, obj);
      return copy;
    }
    throw Error("Cannot copy CaptureError from Object.");
  } // END copy
} // END CaptureError
