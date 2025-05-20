/*
 * DO NOT EDIT.  Generated Message from WebApi.addCertificateRequest.json
 * Copyright © Thales, 2023
 */

export function isAddCertificateRequest(obj: any): obj is AddCertificateRequestLike {
  return  obj && // not null AND
    (( obj instanceof AddCertificateRequest) || // instance of AddCertificateRequest OR
    ( typeof obj === 'object' && "category" in obj && /*"data" in obj && */ "filename" in obj && /*"uploadName" in obj && */     true) // its an object with all the right properties
    );
}
/**
 */
export interface AddCertificateRequestLike {
/**
 * Category of the certificate file.
 */
  category: string;
/**
 * Base64 encoded certificate file. should be undefined if uploadName is set.
 */
  data?: string | undefined | null;
/**
 * File name of the certificate file.
 */
  filename: string;
/**
 * The name of the file uploaded using the UPLOAD:79 command. Ignored if data is set.
 */
  uploadName?: string | undefined | null;
  /** Indexer */
  [key: string]: any;
}

/**
 * Assigned a certificate to a cert store.
 */
export class AddCertificateRequest /*extends MessageData implements AddCertificateRequestLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.category = "";
    this.data = null;
    this.filename = "";
    this.uploadName = null;
  }

/**
 * Category of the certificate file.
 */
  category: string;
/**
 * Base64 encoded certificate file. should be undefined if uploadName is set.
 */
  data?: string | undefined | null;
/**
 * File name of the certificate file.
 */
  filename: string;
/**
 * The name of the file uploaded using the UPLOAD:79 command. Ignored if data is set.
 */
  uploadName?: string | undefined | null;
  /**
   * parses a string into a AddCertificateRequest.  
   * @returns a new AddCertificateRequest; or undefined if the object could not be parsed.
   */
  static parse(data:string): AddCertificateRequest {
    const obj = JSON.parse(data);
    if(obj && isAddCertificateRequest(obj)){
      return AddCertificateRequest.copy(obj);
    }
    throw Error("Cannot parse AddCertificateRequest from " + data);
  } // END parse

  /**
   * Returns a copy of AddCertificateRequest or undefined if the original object is not copyable.
   */
  static copy(obj: AddCertificateRequestLike): AddCertificateRequest {
    if(isAddCertificateRequest(obj)){
      let copy = new AddCertificateRequest();
      copy = Object.assign(copy, obj);
      return copy;
    }
    throw Error("Cannot copy AddCertificateRequest from Object.");
  } // END copy
} // END AddCertificateRequest
