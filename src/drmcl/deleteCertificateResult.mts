/*
 * DO NOT EDIT.  Generated Message from WebApi.deleteCertificateResult.json
 * Copyright © Thales, 2023
 */

export function isDeleteCertificateResult(obj: any): obj is DeleteCertificateResultLike {
  return  obj && // not null AND
    (( obj instanceof DeleteCertificateResult) || // instance of DeleteCertificateResult OR
    ( typeof obj === 'object' && /*"cert_deleted" in obj && */     true) // its an object with all the right properties
    );
}
/**
 */
export interface DeleteCertificateResultLike {
/**
 * Successfully deleted a certificate
 * @deprecated This item will be removed in a future release. This will be removed in a future version. Currently it is alway not set (false)
 */
  cert_deleted?: boolean | undefined | null;
  /** Indexer */
  [key: string]: any;
}

/**
 */
export class DeleteCertificateResult /*extends MessageData implements DeleteCertificateResultLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.cert_deleted = null;
  }

/**
 * Successfully deleted a certificate
 * @deprecated This item will be removed in a future release. This will be removed in a future version. Currently it is alway not set (false)
 */
  cert_deleted?: boolean | undefined | null;
  /**
   * parses a string into a DeleteCertificateResult.  
   * @returns a new DeleteCertificateResult; or undefined if the object could not be parsed.
   */
  static parse(data:string): DeleteCertificateResult {
    const obj = JSON.parse(data);
    if(obj && isDeleteCertificateResult(obj)){
      return DeleteCertificateResult.copy(obj);
    }
    throw Error("Cannot parse DeleteCertificateResult from " + data);
  } // END parse

  /**
   * Returns a copy of DeleteCertificateResult or undefined if the original object is not copyable.
   */
  static copy(obj: DeleteCertificateResultLike): DeleteCertificateResult {
    if(isDeleteCertificateResult(obj)){
      let copy = new DeleteCertificateResult();
      copy = Object.assign(copy, obj);
      return copy;
    }
    throw Error("Cannot copy DeleteCertificateResult from Object.");
  } // END copy
} // END DeleteCertificateResult
