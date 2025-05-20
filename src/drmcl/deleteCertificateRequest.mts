/*
 * DO NOT EDIT.  Generated Message from WebApi.deleteCertificateRequest.json
 * Copyright © Thales, 2023
 */

export function isDeleteCertificateRequest(obj: any): obj is DeleteCertificateRequestLike {
  return  obj && // not null AND
    (( obj instanceof DeleteCertificateRequest) || // instance of DeleteCertificateRequest OR
    ( typeof obj === 'object' && "category" in obj && "filename" in obj &&     true) // its an object with all the right properties
    );
}
/**
 */
export interface DeleteCertificateRequestLike {
/**
 * Category name of certificate file to be deleted
 */
  category: string;
/**
 * File name of certificate file to be deleted
 */
  filename: string;
  /** Indexer */
  [key: string]: any;
}

/**
 */
export class DeleteCertificateRequest /*extends MessageData implements DeleteCertificateRequestLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.category = "";
    this.filename = "";
  }

/**
 * Category name of certificate file to be deleted
 */
  category: string;
/**
 * File name of certificate file to be deleted
 */
  filename: string;
  /**
   * parses a string into a DeleteCertificateRequest.  
   * @returns a new DeleteCertificateRequest; or undefined if the object could not be parsed.
   */
  static parse(data:string): DeleteCertificateRequest {
    const obj = JSON.parse(data);
    if(obj && isDeleteCertificateRequest(obj)){
      return DeleteCertificateRequest.copy(obj);
    }
    throw Error("Cannot parse DeleteCertificateRequest from " + data);
  } // END parse

  /**
   * Returns a copy of DeleteCertificateRequest or undefined if the original object is not copyable.
   */
  static copy(obj: DeleteCertificateRequestLike): DeleteCertificateRequest {
    if(isDeleteCertificateRequest(obj)){
      let copy = new DeleteCertificateRequest();
      copy = Object.assign(copy, obj);
      return copy;
    }
    throw Error("Cannot copy DeleteCertificateRequest from Object.");
  } // END copy
} // END DeleteCertificateRequest
