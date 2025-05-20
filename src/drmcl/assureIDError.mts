/*
 * DO NOT EDIT.  Generated Message from WebApi.assureIDError.json
 * Copyright © Thales, 2023
 */

export function isAssureIDError(obj: any): obj is AssureIDErrorLike {
  return  obj && // not null AND
    (( obj instanceof AssureIDError) || // instance of AssureIDError OR
    ( typeof obj === 'object' && /*"err" in obj && */     true) // its an object with all the right properties
    );
}
/**
 * @deprecated The interface should not be used. This will be removed in a future version
 */
export interface AssureIDErrorLike {
/**
 * error message
 * Alias for error
 */
  err?: string | undefined | null;
  /** Indexer */
  [key: string]: any;
}

/**
 * Base class for returning error message from Acuant AssureID
 * @deprecated This item will be removed in a future release. This will be removed in a future version
 */
export class AssureIDError /*extends MessageData implements AssureIDErrorLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.err = null;
  }

/**
 * error message
 * Alias for error
 */
  err?: string | undefined | null;
  get error(): string | undefined | null { return this.err; }
  set error(value: string | undefined | null) { this.err = value; }
  /**
   * parses a string into a AssureIDError.  
   * @returns a new AssureIDError; or undefined if the object could not be parsed.
   */
  static parse(data:string): AssureIDError {
    const obj = JSON.parse(data);
    if(obj && isAssureIDError(obj)){
      return AssureIDError.copy(obj);
    }
    throw Error("Cannot parse AssureIDError from " + data);
  } // END parse

  /**
   * Returns a copy of AssureIDError or undefined if the original object is not copyable.
   */
  static copy(obj: AssureIDErrorLike): AssureIDError {
    if(isAssureIDError(obj)){
      let copy = new AssureIDError();
      copy = Object.assign(copy, obj);
      return copy;
    }
    throw Error("Cannot copy AssureIDError from Object.");
  } // END copy
} // END AssureIDError
