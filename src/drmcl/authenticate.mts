/*
 * DO NOT EDIT.  Generated Message from WebApi.authenticate.json
 * Copyright © Thales, 2023
 */

export function isAuthenticate(obj: any): obj is AuthenticateLike {
  return  obj && // not null AND
    (( obj instanceof Authenticate) || // instance of Authenticate OR
    ( typeof obj === 'object' && "token" in obj &&     true) // its an object with all the right properties
    );
}
/**
 */
export interface AuthenticateLike {
/**
 * A JWT token.
 */
  token: string;
  /** Indexer */
  [key: string]: any;
}

/**
 * Data element of the AUTHENTICATE message
 */
export class Authenticate /*extends MessageData implements AuthenticateLike */ {
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
   * parses a string into a Authenticate.  
   * @returns a new Authenticate; or undefined if the object could not be parsed.
   */
  static parse(data:string): Authenticate {
    const obj = JSON.parse(data);
    if(obj && isAuthenticate(obj)){
      return Authenticate.copy(obj);
    }
    throw Error("Cannot parse Authenticate from " + data);
  } // END parse

  /**
   * Returns a copy of Authenticate or undefined if the original object is not copyable.
   */
  static copy(obj: AuthenticateLike): Authenticate {
    if(isAuthenticate(obj)){
      let copy = new Authenticate();
      copy = Object.assign(copy, obj);
      return copy;
    }
    throw Error("Cannot copy Authenticate from Object.");
  } // END copy
} // END Authenticate
