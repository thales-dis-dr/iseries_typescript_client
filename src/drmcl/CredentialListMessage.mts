/*
 * DO NOT EDIT.  Generated Message from WebApi.CredentialListMessage.json
 * Copyright © Thales, 2023
 */

import { Credential , type CredentialLike, isCredential} from './Credential.mts';

export function isCredentialListMessage(obj: any): obj is CredentialListMessageLike {
  return  obj && // not null AND
    (( obj instanceof CredentialListMessage) || // instance of CredentialListMessage OR
    ( typeof obj === 'object' && "credentials" in obj &&     true) // its an object with all the right properties
    );
}
/**
 */
export interface CredentialListMessageLike {
/**
 * Security Credential
 */
  credentials: CredentialLike[];
  /** Indexer */
  [key: string]: any;
}

/**
 */
export class CredentialListMessage /*extends MessageData implements CredentialListMessageLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.credentials = [];
  }

/**
 * Security Credential
 */
  credentials: Credential[];
  /**
   * parses a string into a CredentialListMessage.  
   * @returns a new CredentialListMessage; or undefined if the object could not be parsed.
   */
  static parse(data:string): CredentialListMessage {
    const obj = JSON.parse(data);
    if(obj && isCredentialListMessage(obj)){
      return CredentialListMessage.copy(obj);
    }
    throw Error("Cannot parse CredentialListMessage from " + data);
  } // END parse

  /**
   * Returns a copy of CredentialListMessage or undefined if the original object is not copyable.
   */
  static copy(obj: CredentialListMessageLike): CredentialListMessage {
    if(isCredentialListMessage(obj)){
      let copy = new CredentialListMessage();
      copy = Object.assign(copy, obj);
      copy.credentials = new Array<Credential>();
      for(const el of obj.credentials){
        if(isCredential(el)){
          copy.credentials.push(Credential.copy(el));
        } else { throw Error("Missing required property credentials of CredentialListMessage") }
      }
      return copy;
    }
    throw Error("Cannot copy CredentialListMessage from Object.");
  } // END copy
} // END CredentialListMessage
