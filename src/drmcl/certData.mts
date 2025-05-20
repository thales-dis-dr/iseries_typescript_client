/*
 * DO NOT EDIT.  Generated Message from WebApi.certData.json
 * Copyright © Thales, 2023
 */

import { CertType } from './CertType.mjs';

export function isCertData(obj: any): obj is CertDataLike {
  return  obj && // not null AND
    (( obj instanceof CertData) || // instance of CertData OR
    ( typeof obj === 'object' && "cert" in obj && "certType" in obj &&     true) // its an object with all the right properties
    );
}
/**
 */
export interface CertDataLike {
/**
 * Base64 encoded certificate file data
 */
  cert: string;
/**
 * Certificate Request Type. Allowed values: 'cvca','dv','is','is_key'
 */
  certType: CertType;
  /** Indexer */
  [key: string]: any;
}

/**
 */
export class CertData /*extends MessageData implements CertDataLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.cert = "";
    this.certType = CertType.NONE; 
  }

/**
 * Base64 encoded certificate file data
 */
  cert: string;
/**
 * Certificate Request Type. Allowed values: 'cvca','dv','is','is_key'
 */
  certType: CertType;
  /**
   * parses a string into a CertData.  
   * @returns a new CertData; or undefined if the object could not be parsed.
   */
  static parse(data:string): CertData {
    const obj = JSON.parse(data);
    if(obj && isCertData(obj)){
      return CertData.copy(obj);
    }
    throw Error("Cannot parse CertData from " + data);
  } // END parse

  /**
   * Returns a copy of CertData or undefined if the original object is not copyable.
   */
  static copy(obj: CertDataLike): CertData {
    if(isCertData(obj)){
      let copy = new CertData();
      copy = Object.assign(copy, obj);
      return copy;
    }
    throw Error("Cannot copy CertData from Object.");
  } // END copy
} // END CertData
