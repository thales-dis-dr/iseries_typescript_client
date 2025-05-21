/*
 * DO NOT EDIT.  Generated Message from WebApi.certificateRequest.json
 * Copyright © Thales, 2023
 */

import { CertType } from './CertType.mts';

export function isCertificateRequest(obj: any): obj is CertificateRequestLike {
  return  obj && // not null AND
    (( obj instanceof CertificateRequest) || // instance of CertificateRequest OR
    ( typeof obj === 'object' && "certId" in obj && "certType" in obj &&     true) // its an object with all the right properties
    );
}
/**
 */
export interface CertificateRequestLike {
/**
 * Certificate Request ID (Base64 encoded)
 */
  certId: string;
/**
 * Certificate Request Type. Allowed values: 'doc','country','cvca','dv','is','is_key','at','chain' 
 */
  certType: CertType;
  /** Indexer */
  [key: string]: any;
}

/**
 */
export class CertificateRequest /*extends MessageData implements CertificateRequestLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.certId = "";
    this.certType = CertType.NONE; 
  }

/**
 * Certificate Request ID (Base64 encoded)
 */
  certId: string;
/**
 * Certificate Request Type. Allowed values: 'doc','country','cvca','dv','is','is_key','at','chain' 
 */
  certType: CertType;
  /**
   * parses a string into a CertificateRequest.  
   * @returns a new CertificateRequest; or undefined if the object could not be parsed.
   */
  static parse(data:string): CertificateRequest {
    const obj = JSON.parse(data);
    if(obj && isCertificateRequest(obj)){
      return CertificateRequest.copy(obj);
    }
    throw Error("Cannot parse CertificateRequest from " + data);
  } // END parse

  /**
   * Returns a copy of CertificateRequest or undefined if the original object is not copyable.
   */
  static copy(obj: CertificateRequestLike): CertificateRequest {
    if(isCertificateRequest(obj)){
      let copy = new CertificateRequest();
      copy = Object.assign(copy, obj);
      return copy;
    }
    throw Error("Cannot copy CertificateRequest from Object.");
  } // END copy
} // END CertificateRequest
