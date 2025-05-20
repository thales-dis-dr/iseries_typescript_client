/*
 * DO NOT EDIT.  Generated Message from WebApi.tokenRequest.json
 * Copyright © Thales, 2023
 */

export function isTokenRequest(obj: any): obj is TokenRequestLike {
  return  obj && // not null AND
    (( obj instanceof TokenRequest) || // instance of TokenRequest OR
    ( typeof obj === 'object' && /*"expiresIn" in obj && */     true) // its an object with all the right properties
    );
}
/**
 */
export interface TokenRequestLike {
/**
 * Number of seconds to wait before the token expires.
 */
  expiresIn?: number | undefined | null;
  /** Indexer */
  [key: string]: any;
}

/**
 * Data element of the TOKEN message
 */
export class TokenRequest /*extends MessageData implements TokenRequestLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.expiresIn = null;
  }

/**
 * Number of seconds to wait before the token expires.
 */
  expiresIn?: number | undefined | null;
  /**
   * parses a string into a TokenRequest.  
   * @returns a new TokenRequest; or undefined if the object could not be parsed.
   */
  static parse(data:string): TokenRequest {
    const obj = JSON.parse(data);
    if(obj && isTokenRequest(obj)){
      return TokenRequest.copy(obj);
    }
    throw Error("Cannot parse TokenRequest from " + data);
  } // END parse

  /**
   * Returns a copy of TokenRequest or undefined if the original object is not copyable.
   */
  static copy(obj: TokenRequestLike): TokenRequest {
    if(isTokenRequest(obj)){
      let copy = new TokenRequest();
      copy = Object.assign(copy, obj);
      return copy;
    }
    throw Error("Cannot copy TokenRequest from Object.");
  } // END copy
} // END TokenRequest
