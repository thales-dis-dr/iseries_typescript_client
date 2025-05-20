/*
 * DO NOT EDIT.  Generated Message from WebApi.assureIDCredential.json
 * Copyright © Thales, 2023
 */

export function isAssureIDCredential(obj: any): obj is AssureIDCredentialLike {
  return  obj && // not null AND
    (( obj instanceof AssureIDCredential) || // instance of AssureIDCredential OR
    ( typeof obj === 'object' && /*"ep" in obj && */ /*"pass" in obj && */ /*"id" in obj && */ /*"name" in obj && */     true) // its an object with all the right properties
    );
}
/**
 * @deprecated The interface should not be used. This will be removed in a future version
 */
export interface AssureIDCredentialLike {
/**
 * A the URL for AssureID
 * Alias for assureIDConnectEndpoint
 */
  ep?: string | undefined | null;
/**
 * Customers password for AssureID
 * Alias for password
 */
  pass?: string | undefined | null;
/**
 * The customers subscription ID for AssureID
 * Alias for subscriptionID
 */
  id?: string | undefined | null;
/**
 * Customers username for AssureID
 * Alias for username
 */
  name?: string | undefined | null;
  /** Indexer */
  [key: string]: any;
}

/**
 * Base class for capture results
 * @deprecated This item will be removed in a future release. This will be removed in a future version
 */
export class AssureIDCredential /*extends MessageData implements AssureIDCredentialLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.ep = null;
    this.pass = null;
    this.id = null;
    this.name = null;
  }

/**
 * A the URL for AssureID
 * Alias for assureIDConnectEndpoint
 */
  ep?: string | undefined | null;
  get assureIDConnectEndpoint(): string | undefined | null { return this.ep; }
  set assureIDConnectEndpoint(value: string | undefined | null) { this.ep = value; }
/**
 * Customers password for AssureID
 * Alias for password
 */
  pass?: string | undefined | null;
  get password(): string | undefined | null { return this.pass; }
  set password(value: string | undefined | null) { this.pass = value; }
/**
 * The customers subscription ID for AssureID
 * Alias for subscriptionID
 */
  id?: string | undefined | null;
  get subscriptionID(): string | undefined | null { return this.id; }
  set subscriptionID(value: string | undefined | null) { this.id = value; }
/**
 * Customers username for AssureID
 * Alias for username
 */
  name?: string | undefined | null;
  get username(): string | undefined | null { return this.name; }
  set username(value: string | undefined | null) { this.name = value; }
  /**
   * parses a string into a AssureIDCredential.  
   * @returns a new AssureIDCredential; or undefined if the object could not be parsed.
   */
  static parse(data:string): AssureIDCredential {
    const obj = JSON.parse(data);
    if(obj && isAssureIDCredential(obj)){
      return AssureIDCredential.copy(obj);
    }
    throw Error("Cannot parse AssureIDCredential from " + data);
  } // END parse

  /**
   * Returns a copy of AssureIDCredential or undefined if the original object is not copyable.
   */
  static copy(obj: AssureIDCredentialLike): AssureIDCredential {
    if(isAssureIDCredential(obj)){
      let copy = new AssureIDCredential();
      copy = Object.assign(copy, obj);
      return copy;
    }
    throw Error("Cannot copy AssureIDCredential from Object.");
  } // END copy
} // END AssureIDCredential
