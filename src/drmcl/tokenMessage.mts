/*
 * DO NOT EDIT.  Generated Message from WebApi.tokenMessage.json
 * Copyright © Thales, 2023
 */

export function isTokenMessage(obj: any): obj is TokenMessageLike {
  return  obj && // not null AND
    (( obj instanceof TokenMessage) || // instance of TokenMessage OR
    ( typeof obj === 'object' && "token" in obj &&     true) // its an object with all the right properties
    );
}
/**
 */
export interface TokenMessageLike {
/**
 * A JWT token.
 */
  token: string;
  /** Indexer */
  [key: string]: any;
}

/**
 * Data element of the TOKEN message
 */
export class TokenMessage /*extends MessageData implements TokenMessageLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.token = "";
  }

/**
 * A JWT token.
 */
  token: string;
  /**
   * parses a string into a TokenMessage.  
   * @returns a new TokenMessage; or undefined if the object could not be parsed.
   */
  static parse(data:string): TokenMessage {
    const obj = JSON.parse(data);
    if(obj && isTokenMessage(obj)){
      return TokenMessage.copy(obj);
    }
    throw Error("Cannot parse TokenMessage from " + data);
  } // END parse

  /**
   * Returns a copy of TokenMessage or undefined if the original object is not copyable.
   */
  static copy(obj: TokenMessageLike): TokenMessage {
    if(isTokenMessage(obj)){
      let copy = new TokenMessage();
      copy = Object.assign(copy, obj);
      return copy;
    }
    throw Error("Cannot copy TokenMessage from Object.");
  } // END copy
} // END TokenMessage
