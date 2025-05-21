/*
 * DO NOT EDIT.  Generated Message from WebApi.certificateRequestResponse.json
 * Copyright © Thales, 2023
 */

import { CertData , type CertDataLike, isCertData} from './certData.mts';
import { CertType } from './CertType.mts';

export function isCertificateRequestResponse(obj: any): obj is CertificateRequestResponseLike {
  return  obj && // not null AND
    (( obj instanceof CertificateRequestResponse) || // instance of CertificateRequestResponse OR
    ( typeof obj === 'object' && /*"cert" in obj && */ /*"certChain" in obj && */ "certType" in obj && /*"notFound" in obj && */     true) // its an object with all the right properties
    );
}
/**
 */
export interface CertificateRequestResponseLike {
/**
 * Base64 encoded certificate file data
 */
  cert?: string | undefined | null;
/**
 * Collection of certificates
 */
  certChain?: CertDataLike[] | undefined | null;
/**
 * Certificate Request Type. Allowed values: 'doc','country','cvca','dv','is','is_key','at','chain'
 */
  certType: CertType;
/**
 * Indicates that no certificate found to match the request
 */
  notFound?: boolean | undefined | null;
  /** Indexer */
  [key: string]: any;
}

/**
 */
export class CertificateRequestResponse /*extends MessageData implements CertificateRequestResponseLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.cert = null;
    this.certChain = null;
    this.certType = CertType.NONE; 
    this.notFound = null;
  }

/**
 * Base64 encoded certificate file data
 */
  cert?: string | undefined | null;
/**
 * Collection of certificates
 */
  certChain?: CertData[] | undefined | null;
/**
 * Certificate Request Type. Allowed values: 'doc','country','cvca','dv','is','is_key','at','chain'
 */
  certType: CertType;
/**
 * Indicates that no certificate found to match the request
 */
  notFound?: boolean | undefined | null;
  /**
   * parses a string into a CertificateRequestResponse.  
   * @returns a new CertificateRequestResponse; or undefined if the object could not be parsed.
   */
  static parse(data:string): CertificateRequestResponse {
    const obj = JSON.parse(data);
    if(obj && isCertificateRequestResponse(obj)){
      return CertificateRequestResponse.copy(obj);
    }
    throw Error("Cannot parse CertificateRequestResponse from " + data);
  } // END parse

  /**
   * Returns a copy of CertificateRequestResponse or undefined if the original object is not copyable.
   */
  static copy(obj: CertificateRequestResponseLike): CertificateRequestResponse {
    if(isCertificateRequestResponse(obj)){
      let copy = new CertificateRequestResponse();
      copy = Object.assign(copy, obj);
      if(obj.certChain) {
        copy.certChain = new Array<CertData>();
        for(const el of obj.certChain){
          if(isCertData(el)){
            copy.certChain.push(CertData.copy(el));
          } else { throw Error("Missing required property certChain of CertificateRequestResponse") }
        }
      }
      return copy;
    }
    throw Error("Cannot copy CertificateRequestResponse from Object.");
  } // END copy
} // END CertificateRequestResponse
