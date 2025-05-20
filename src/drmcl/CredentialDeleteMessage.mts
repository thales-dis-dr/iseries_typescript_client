/*
 * DO NOT EDIT.  Generated Message from WebApi.CredentialDeleteMessage.json
 * Copyright © Thales, 2023
 */

export function isCredentialDeleteMessage(obj: any): obj is CredentialDeleteMessageLike {
  return  obj && // not null AND
    (( obj instanceof CredentialDeleteMessage) || // instance of CredentialDeleteMessage OR
    ( typeof obj === 'object' && "i" in obj &&     true) // its an object with all the right properties
    );
}
/**
 */
export interface CredentialDeleteMessageLike {
/**
 * credential ID
 * Alias for credentialId
 */
  i: string;
  /** Indexer */
  [key: string]: any;
}

/**
 */
export class CredentialDeleteMessage /*extends MessageData implements CredentialDeleteMessageLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.i = "";
  }

/**
 * credential ID
 * Alias for credentialId
 */
  i: string;
  get credentialId(): string { return this.i; }
  set credentialId(value: string) { this.i = value; }
  /**
   * parses a string into a CredentialDeleteMessage.  
   * @returns a new CredentialDeleteMessage; or undefined if the object could not be parsed.
   */
  static parse(data:string): CredentialDeleteMessage {
    const obj = JSON.parse(data);
    if(obj && isCredentialDeleteMessage(obj)){
      return CredentialDeleteMessage.copy(obj);
    }
    throw Error("Cannot parse CredentialDeleteMessage from " + data);
  } // END parse

  /**
   * Returns a copy of CredentialDeleteMessage or undefined if the original object is not copyable.
   */
  static copy(obj: CredentialDeleteMessageLike): CredentialDeleteMessage {
    if(isCredentialDeleteMessage(obj)){
      let copy = new CredentialDeleteMessage();
      copy = Object.assign(copy, obj);
      return copy;
    }
    throw Error("Cannot copy CredentialDeleteMessage from Object.");
  } // END copy
} // END CredentialDeleteMessage
