/*
 * DO NOT EDIT.  Generated Message from WebApi.signRequest.json
 * Copyright © Thales, 2023
 */

import { CertType } from './CertType.mts';

export function isSignRequest(obj: any): obj is SignRequestLike {
  return  obj && // not null AND
    (( obj instanceof SignRequest) || // instance of SignRequest OR
    ( typeof obj === 'object' && "certType" in obj && "challenge" in obj && "pubCert" in obj &&     true) // its an object with all the right properties
    );
}
/**
 */
export interface SignRequestLike {
/**
 * Certificate Request Type
 */
  certType: CertType;
/**
 * Base64 encoded chip random number to be encoded
 */
  challenge: string;
/**
 * Certificate Request ID (Base64 encoded)
 */
  pubCert: string;
  /** Indexer */
  [key: string]: any;
}

/**
 */
export class SignRequest /*extends MessageData implements SignRequestLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.certType = CertType.NONE; 
    this.challenge = "";
    this.pubCert = "";
  }

/**
 * Certificate Request Type
 */
  certType: CertType;
/**
 * Base64 encoded chip random number to be encoded
 */
  challenge: string;
/**
 * Certificate Request ID (Base64 encoded)
 */
  pubCert: string;
  /**
   * parses a string into a SignRequest.  
   * @returns a new SignRequest; or undefined if the object could not be parsed.
   */
  static parse(data:string): SignRequest {
    const obj = JSON.parse(data);
    if(obj && isSignRequest(obj)){
      return SignRequest.copy(obj);
    }
    throw Error("Cannot parse SignRequest from " + data);
  } // END parse

  /**
   * Returns a copy of SignRequest or undefined if the original object is not copyable.
   */
  static copy(obj: SignRequestLike): SignRequest {
    if(isSignRequest(obj)){
      let copy = new SignRequest();
      copy = Object.assign(copy, obj);
      return copy;
    }
    throw Error("Cannot copy SignRequest from Object.");
  } // END copy
} // END SignRequest
