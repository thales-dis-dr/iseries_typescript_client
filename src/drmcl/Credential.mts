/*
 * DO NOT EDIT.  Generated Message from WebApi.Credential.json
 * Copyright © Thales, 2023
 */

export function isCredential(obj: any): obj is CredentialLike {
  return  obj && // not null AND
    (( obj instanceof Credential) || // instance of Credential OR
    ( typeof obj === 'object' && "i" in obj && /*"a" in obj && */     true) // its an object with all the right properties
    );
}
/**
 */
export interface CredentialLike {
/**
 * credential ID
 * Alias for credentialId
 */
  i: string;
/**
 * is Admin
 * Alias for isAdmin
 */
  a?: boolean | undefined | null;
  /** Indexer */
  [key: string]: any;
}

/**
 * Credential Details
 */
export class Credential /*extends MessageData implements CredentialLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.i = "";
    this.a = null;
  }

/**
 * credential ID
 * Alias for credentialId
 */
  i: string;
  get credentialId(): string { return this.i; }
  set credentialId(value: string) { this.i = value; }
/**
 * is Admin
 * Alias for isAdmin
 */
  a?: boolean | undefined | null;
  get isAdmin(): boolean | undefined | null { return this.a; }
  set isAdmin(value: boolean | undefined | null) { this.a = value; }
  /**
   * parses a string into a Credential.  
   * @returns a new Credential; or undefined if the object could not be parsed.
   */
  static parse(data:string): Credential {
    const obj = JSON.parse(data);
    if(obj && isCredential(obj)){
      return Credential.copy(obj);
    }
    throw Error("Cannot parse Credential from " + data);
  } // END parse

  /**
   * Returns a copy of Credential or undefined if the original object is not copyable.
   */
  static copy(obj: CredentialLike): Credential {
    if(isCredential(obj)){
      let copy = new Credential();
      copy = Object.assign(copy, obj);
      return copy;
    }
    throw Error("Cannot copy Credential from Object.");
  } // END copy
} // END Credential
