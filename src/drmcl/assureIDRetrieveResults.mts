/*
 * DO NOT EDIT.  Generated Message from WebApi.assureIDRetrieveResults.json
 * Copyright © Thales, 2023
 */

export function isAssureIDRetrieveResults(obj: any): obj is AssureIDRetrieveResultsLike {
  return  obj && // not null AND
    (( obj instanceof AssureIDRetrieveResults) || // instance of AssureIDRetrieveResults OR
    ( typeof obj === 'object' && /*"id" in obj && */     true) // its an object with all the right properties
    );
}
/**
 * @deprecated The interface should not be used. This will be removed in a future version
 */
export interface AssureIDRetrieveResultsLike {
/**
 * instance id of a assureid document
 * Alias for instance_id
 */
  id?: string | undefined | null;
  /** Indexer */
  [key: string]: any;
}

/**
 * Base class for retireiving results from Acuant AssureID for a specific Document Instance ID
 * @deprecated This item will be removed in a future release. This will be removed in a future version
 */
export class AssureIDRetrieveResults /*extends MessageData implements AssureIDRetrieveResultsLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.id = null;
  }

/**
 * instance id of a assureid document
 * Alias for instance_id
 */
  id?: string | undefined | null;
  get instance_id(): string | undefined | null { return this.id; }
  set instance_id(value: string | undefined | null) { this.id = value; }
  /**
   * parses a string into a AssureIDRetrieveResults.  
   * @returns a new AssureIDRetrieveResults; or undefined if the object could not be parsed.
   */
  static parse(data:string): AssureIDRetrieveResults {
    const obj = JSON.parse(data);
    if(obj && isAssureIDRetrieveResults(obj)){
      return AssureIDRetrieveResults.copy(obj);
    }
    throw Error("Cannot parse AssureIDRetrieveResults from " + data);
  } // END parse

  /**
   * Returns a copy of AssureIDRetrieveResults or undefined if the original object is not copyable.
   */
  static copy(obj: AssureIDRetrieveResultsLike): AssureIDRetrieveResults {
    if(isAssureIDRetrieveResults(obj)){
      let copy = new AssureIDRetrieveResults();
      copy = Object.assign(copy, obj);
      return copy;
    }
    throw Error("Cannot copy AssureIDRetrieveResults from Object.");
  } // END copy
} // END AssureIDRetrieveResults
