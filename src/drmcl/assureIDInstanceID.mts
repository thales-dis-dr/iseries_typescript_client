/*
 * DO NOT EDIT.  Generated Message from WebApi.assureIDInstanceID.json
 * Copyright © Thales, 2023
 */

export function isAssureIDInstanceID(obj: any): obj is AssureIDInstanceIDLike {
  return  obj && // not null AND
    (( obj instanceof AssureIDInstanceID) || // instance of AssureIDInstanceID OR
    ( typeof obj === 'object' && /*"id" in obj && */     true) // its an object with all the right properties
    );
}
/**
 * @deprecated The interface should not be used. This will be removed in a future version
 */
export interface AssureIDInstanceIDLike {
/**
 * instance id of a assureid document
 * Alias for instance_id
 */
  id?: string | undefined | null;
  /** Indexer */
  [key: string]: any;
}

/**
 * Base class for returning the instance ID from Acuant AssureID for a specific Document
 * @deprecated This item will be removed in a future release. This will be removed in a future version
 */
export class AssureIDInstanceID /*extends MessageData implements AssureIDInstanceIDLike */ {
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
   * parses a string into a AssureIDInstanceID.  
   * @returns a new AssureIDInstanceID; or undefined if the object could not be parsed.
   */
  static parse(data:string): AssureIDInstanceID {
    const obj = JSON.parse(data);
    if(obj && isAssureIDInstanceID(obj)){
      return AssureIDInstanceID.copy(obj);
    }
    throw Error("Cannot parse AssureIDInstanceID from " + data);
  } // END parse

  /**
   * Returns a copy of AssureIDInstanceID or undefined if the original object is not copyable.
   */
  static copy(obj: AssureIDInstanceIDLike): AssureIDInstanceID {
    if(isAssureIDInstanceID(obj)){
      let copy = new AssureIDInstanceID();
      copy = Object.assign(copy, obj);
      return copy;
    }
    throw Error("Cannot copy AssureIDInstanceID from Object.");
  } // END copy
} // END AssureIDInstanceID
