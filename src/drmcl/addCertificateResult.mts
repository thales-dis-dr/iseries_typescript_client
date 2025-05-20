/*
 * DO NOT EDIT.  Generated Message from WebApi.addCertificateResult.json
 * Copyright © Thales, 2023
 */

export function isAddCertificateResult(obj: any): obj is AddCertificateResultLike {
  return  obj && // not null AND
    (( obj instanceof AddCertificateResult) || // instance of AddCertificateResult OR
    ( typeof obj === 'object' && /*"cert_added" in obj && */     true) // its an object with all the right properties
    );
}
/**
 */
export interface AddCertificateResultLike {
/**
 * Successfully added a certificate.
 * @deprecated This item will be removed in a future release. This will be removed in a future version. Currently it is alway not set (false)
 */
  cert_added?: boolean | undefined | null;
  /** Indexer */
  [key: string]: any;
}

/**
 * object attached to a CERT_ADDED message.
 */
export class AddCertificateResult /*extends MessageData implements AddCertificateResultLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.cert_added = null;
  }

/**
 * Successfully added a certificate.
 * @deprecated This item will be removed in a future release. This will be removed in a future version. Currently it is alway not set (false)
 */
  cert_added?: boolean | undefined | null;
  /**
   * parses a string into a AddCertificateResult.  
   * @returns a new AddCertificateResult; or undefined if the object could not be parsed.
   */
  static parse(data:string): AddCertificateResult {
    const obj = JSON.parse(data);
    if(obj && isAddCertificateResult(obj)){
      return AddCertificateResult.copy(obj);
    }
    throw Error("Cannot parse AddCertificateResult from " + data);
  } // END parse

  /**
   * Returns a copy of AddCertificateResult or undefined if the original object is not copyable.
   */
  static copy(obj: AddCertificateResultLike): AddCertificateResult {
    if(isAddCertificateResult(obj)){
      let copy = new AddCertificateResult();
      copy = Object.assign(copy, obj);
      return copy;
    }
    throw Error("Cannot copy AddCertificateResult from Object.");
  } // END copy
} // END AddCertificateResult
