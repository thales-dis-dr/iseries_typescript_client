/*
 * DO NOT EDIT.  Generated Message from WebApi.csrResponse.json
 * Copyright © Thales, 2023
 */

export function isCsrResponse(obj: any): obj is CsrResponseLike {
  return  obj && // not null AND
    (( obj instanceof CsrResponse) || // instance of CsrResponse OR
    ( typeof obj === 'object' && /*"data" in obj && */     true) // its an object with all the right properties
    );
}
/**
 */
export interface CsrResponseLike {
/**
 * The CSR as a base64 encoded string.
 */
  data?: string | undefined | null;
  /** Indexer */
  [key: string]: any;
}

/**
 * A CSR
 */
export class CsrResponse /*extends MessageData implements CsrResponseLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.data = null;
  }

/**
 * The CSR as a base64 encoded string.
 */
  data?: string | undefined | null;
  /**
   * parses a string into a CsrResponse.  
   * @returns a new CsrResponse; or undefined if the object could not be parsed.
   */
  static parse(data:string): CsrResponse {
    const obj = JSON.parse(data);
    if(obj && isCsrResponse(obj)){
      return CsrResponse.copy(obj);
    }
    throw Error("Cannot parse CsrResponse from " + data);
  } // END parse

  /**
   * Returns a copy of CsrResponse or undefined if the original object is not copyable.
   */
  static copy(obj: CsrResponseLike): CsrResponse {
    if(isCsrResponse(obj)){
      let copy = new CsrResponse();
      copy = Object.assign(copy, obj);
      return copy;
    }
    throw Error("Cannot copy CsrResponse from Object.");
  } // END copy
} // END CsrResponse
