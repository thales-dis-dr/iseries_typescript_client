/*
 * DO NOT EDIT.  Generated Message from WebApi.assureIDResults.json
 * Copyright © Thales, 2023
 */

export function isAssureIDResults(obj: any): obj is AssureIDResultsLike {
  return  obj && // not null AND
    (( obj instanceof AssureIDResults) || // instance of AssureIDResults OR
    ( typeof obj === 'object' && /*"id" in obj && */ /*"p" in obj && */ /*"res" in obj && */ /*"sig" in obj && */     true) // its an object with all the right properties
    );
}
/**
 * @deprecated The interface should not be used. This will be removed in a future version
 */
export interface AssureIDResultsLike {
/**
 * instance id of a assureid document
 * Alias for instance_id
 */
  id?: string | undefined | null;
/**
 * acuant assureid cropped photo image
 * Alias for photo
 */
  p?: string | undefined | null;
/**
 * results from acuant assureid
 * Alias for results
 */
  res?: string | undefined | null;
/**
 * acuant assureid cropped signature image
 * Alias for signature
 */
  sig?: string | undefined | null;
  /** Indexer */
  [key: string]: any;
}

/**
 * Base class for returning the instance ID from Acuant AssureID for a specific Document
 * @deprecated This item will be removed in a future release. This will be removed in a future version
 */
export class AssureIDResults /*extends MessageData implements AssureIDResultsLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.id = null;
    this.p = null;
    this.res = null;
    this.sig = null;
  }

/**
 * instance id of a assureid document
 * Alias for instance_id
 */
  id?: string | undefined | null;
  get instance_id(): string | undefined | null { return this.id; }
  set instance_id(value: string | undefined | null) { this.id = value; }
/**
 * acuant assureid cropped photo image
 * Alias for photo
 */
  p?: string | undefined | null;
  get photo(): string | undefined | null { return this.p; }
  set photo(value: string | undefined | null) { this.p = value; }
/**
 * results from acuant assureid
 * Alias for results
 */
  res?: string | undefined | null;
  get results(): string | undefined | null { return this.res; }
  set results(value: string | undefined | null) { this.res = value; }
/**
 * acuant assureid cropped signature image
 * Alias for signature
 */
  sig?: string | undefined | null;
  get signature(): string | undefined | null { return this.sig; }
  set signature(value: string | undefined | null) { this.sig = value; }
  /**
   * parses a string into a AssureIDResults.  
   * @returns a new AssureIDResults; or undefined if the object could not be parsed.
   */
  static parse(data:string): AssureIDResults {
    const obj = JSON.parse(data);
    if(obj && isAssureIDResults(obj)){
      return AssureIDResults.copy(obj);
    }
    throw Error("Cannot parse AssureIDResults from " + data);
  } // END parse

  /**
   * Returns a copy of AssureIDResults or undefined if the original object is not copyable.
   */
  static copy(obj: AssureIDResultsLike): AssureIDResults {
    if(isAssureIDResults(obj)){
      let copy = new AssureIDResults();
      copy = Object.assign(copy, obj);
      return copy;
    }
    throw Error("Cannot copy AssureIDResults from Object.");
  } // END copy
} // END AssureIDResults
