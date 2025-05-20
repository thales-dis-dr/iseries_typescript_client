/*
 * DO NOT EDIT.  Generated Message from WebApi.listCertificateResult.json
 * Copyright © Thales, 2023
 */

export function isListCertificateResult(obj: any): obj is ListCertificateResultLike {
  return  obj && // not null AND
    (( obj instanceof ListCertificateResult) || // instance of ListCertificateResult OR
    ( typeof obj === 'object' && "filenames" in obj &&     true) // its an object with all the right properties
    );
}
/**
 */
export interface ListCertificateResultLike {
/**
 * List of certificates in store
 */
  filenames: string[];
  /** Indexer */
  [key: string]: any;
}

/**
 */
export class ListCertificateResult /*extends MessageData implements ListCertificateResultLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.filenames = [];
  }

/**
 * List of certificates in store
 */
  filenames: string[];
  /**
   * parses a string into a ListCertificateResult.  
   * @returns a new ListCertificateResult; or undefined if the object could not be parsed.
   */
  static parse(data:string): ListCertificateResult {
    const obj = JSON.parse(data);
    if(obj && isListCertificateResult(obj)){
      return ListCertificateResult.copy(obj);
    }
    throw Error("Cannot parse ListCertificateResult from " + data);
  } // END parse

  /**
   * Returns a copy of ListCertificateResult or undefined if the original object is not copyable.
   */
  static copy(obj: ListCertificateResultLike): ListCertificateResult {
    if(isListCertificateResult(obj)){
      let copy = new ListCertificateResult();
      copy = Object.assign(copy, obj);
      return copy;
    }
    throw Error("Cannot copy ListCertificateResult from Object.");
  } // END copy
} // END ListCertificateResult
