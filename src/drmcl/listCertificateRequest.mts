/*
 * DO NOT EDIT.  Generated Message from WebApi.listCertificateRequest.json
 * Copyright © Thales, 2023
 */

export function isListCertificateRequest(obj: any): obj is ListCertificateRequestLike {
  return  obj && // not null AND
    (( obj instanceof ListCertificateRequest) || // instance of ListCertificateRequest OR
    ( typeof obj === 'object' && "category" in obj &&     true) // its an object with all the right properties
    );
}
/**
 */
export interface ListCertificateRequestLike {
/**
 * Category name of certificates
 */
  category: string;
  /** Indexer */
  [key: string]: any;
}

/**
 */
export class ListCertificateRequest /*extends MessageData implements ListCertificateRequestLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.category = "";
  }

/**
 * Category name of certificates
 */
  category: string;
  /**
   * parses a string into a ListCertificateRequest.  
   * @returns a new ListCertificateRequest; or undefined if the object could not be parsed.
   */
  static parse(data:string): ListCertificateRequest {
    const obj = JSON.parse(data);
    if(obj && isListCertificateRequest(obj)){
      return ListCertificateRequest.copy(obj);
    }
    throw Error("Cannot parse ListCertificateRequest from " + data);
  } // END parse

  /**
   * Returns a copy of ListCertificateRequest or undefined if the original object is not copyable.
   */
  static copy(obj: ListCertificateRequestLike): ListCertificateRequest {
    if(isListCertificateRequest(obj)){
      let copy = new ListCertificateRequest();
      copy = Object.assign(copy, obj);
      return copy;
    }
    throw Error("Cannot copy ListCertificateRequest from Object.");
  } // END copy
} // END ListCertificateRequest
