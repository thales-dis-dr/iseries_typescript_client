/*
 * DO NOT EDIT.  Generated Message from WebApi.CredentialAddMessage.json
 * Copyright © Thales, 2023
 */

import { DeviceCredentials , DeviceCredentialsLike, isDeviceCredentials} from './deviceCredentials.mjs';

export function isCredentialAddMessage(obj: any): obj is CredentialAddMessageLike {
  return  obj && // not null AND
    (( obj instanceof CredentialAddMessage) || // instance of CredentialAddMessage OR
    ( typeof obj === 'object' && "c" in obj &&     true) // its an object with all the right properties
    );
}
/**
 */
export interface CredentialAddMessageLike {
/**
 * Security Credential
 * Alias for credentials
 */
  c: DeviceCredentialsLike[];
  /** Indexer */
  [key: string]: any;
}

/**
 */
export class CredentialAddMessage /*extends MessageData implements CredentialAddMessageLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.c = [];
  }

/**
 * Security Credential
 * Alias for credentials
 */
  c: DeviceCredentials[];
  get credentials(): DeviceCredentials[] { return this.c; }
  set credentials(value: DeviceCredentials[]) { this.c = value; }
  /**
   * parses a string into a CredentialAddMessage.  
   * @returns a new CredentialAddMessage; or undefined if the object could not be parsed.
   */
  static parse(data:string): CredentialAddMessage {
    const obj = JSON.parse(data);
    if(obj && isCredentialAddMessage(obj)){
      return CredentialAddMessage.copy(obj);
    }
    throw Error("Cannot parse CredentialAddMessage from " + data);
  } // END parse

  /**
   * Returns a copy of CredentialAddMessage or undefined if the original object is not copyable.
   */
  static copy(obj: CredentialAddMessageLike): CredentialAddMessage {
    if(isCredentialAddMessage(obj)){
      let copy = new CredentialAddMessage();
      copy = Object.assign(copy, obj);
      copy.c = new Array<DeviceCredentials>();
      for(const el of obj.c){
        if(isDeviceCredentials(el)){
          copy.c.push(DeviceCredentials.copy(el));
        } else { throw Error("Missing required property c of CredentialAddMessage") }
      }
      return copy;
    }
    throw Error("Cannot copy CredentialAddMessage from Object.");
  } // END copy
} // END CredentialAddMessage
