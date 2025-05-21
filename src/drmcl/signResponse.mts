/*
 * DO NOT EDIT.  Generated Message from WebApi.signResponse.json
 * Copyright © Thales, 2023
 */

import { CertType } from './CertType.mts';

export function isSignResponse(obj: any): obj is SignResponseLike {
  return  obj && // not null AND
    (( obj instanceof SignResponse) || // instance of SignResponse OR
    ( typeof obj === 'object' && "certType" in obj && /*"notFound" in obj && */ /*"signedData" in obj && */     true) // its an object with all the right properties
    );
}
/**
 */
export interface SignResponseLike {
/**
 * Certificate Request Type
 */
  certType: CertType;
/**
 * Indicates that no certificate found to match the request
 */
  notFound?: boolean | undefined | null;
/**
 * Base64 encoded cryptogram from the server
 */
  signedData?: string | undefined | null;
  /** Indexer */
  [key: string]: any;
}

/**
 * Returns a signed response using a specified certificate.  If the specified certificate is not available, reqNotFound must be false
 */
export class SignResponse /*extends MessageData implements SignResponseLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.certType = CertType.NONE; 
    this.notFound = null;
    this.signedData = null;
  }

/**
 * Certificate Request Type
 */
  certType: CertType;
/**
 * Indicates that no certificate found to match the request
 */
  notFound?: boolean | undefined | null;
/**
 * Base64 encoded cryptogram from the server
 */
  signedData?: string | undefined | null;
  /**
   * parses a string into a SignResponse.  
   * @returns a new SignResponse; or undefined if the object could not be parsed.
   */
  static parse(data:string): SignResponse {
    const obj = JSON.parse(data);
    if(obj && isSignResponse(obj)){
      return SignResponse.copy(obj);
    }
    throw Error("Cannot parse SignResponse from " + data);
  } // END parse

  /**
   * Returns a copy of SignResponse or undefined if the original object is not copyable.
   */
  static copy(obj: SignResponseLike): SignResponse {
    if(isSignResponse(obj)){
      let copy = new SignResponse();
      copy = Object.assign(copy, obj);
      return copy;
    }
    throw Error("Cannot copy SignResponse from Object.");
  } // END copy
} // END SignResponse
