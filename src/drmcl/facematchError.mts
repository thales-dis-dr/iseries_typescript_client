/*
 * DO NOT EDIT.  Generated Message from WebApi.facematchError.json
 * Copyright © Thales, 2023
 */

export function isFacematchError(obj: any): obj is FacematchErrorLike {
  return  obj && // not null AND
    (( obj instanceof FacematchError) || // instance of FacematchError OR
    ( typeof obj === 'object' && /*"error" in obj && */     true) // its an object with all the right properties
    );
}
/**
 */
export interface FacematchErrorLike {
/**
 * Error returning from the facematch algorithm
 * Alias for facematch_error
 */
  error?: number | undefined | null;
  /** Indexer */
  [key: string]: any;
}

/**
 * Base class for facematch errors
 */
export class FacematchError /*extends MessageData implements FacematchErrorLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.error = null;
  }

/**
 * Error returning from the facematch algorithm
 * Alias for facematch_error
 */
  error?: number | undefined | null;
  get facematch_error(): number | undefined | null { return this.error; }
  set facematch_error(value: number | undefined | null) { this.error = value; }
  /**
   * parses a string into a FacematchError.  
   * @returns a new FacematchError; or undefined if the object could not be parsed.
   */
  static parse(data:string): FacematchError {
    const obj = JSON.parse(data);
    if(obj && isFacematchError(obj)){
      return FacematchError.copy(obj);
    }
    throw Error("Cannot parse FacematchError from " + data);
  } // END parse

  /**
   * Returns a copy of FacematchError or undefined if the original object is not copyable.
   */
  static copy(obj: FacematchErrorLike): FacematchError {
    if(isFacematchError(obj)){
      let copy = new FacematchError();
      copy = Object.assign(copy, obj);
      return copy;
    }
    throw Error("Cannot copy FacematchError from Object.");
  } // END copy
} // END FacematchError
