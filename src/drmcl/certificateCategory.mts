/*
 * DO NOT EDIT.  Generated Message from WebApi.certificateCategory.json
 * Copyright © Thales, 2023
 */

export function isCertificateCategory(obj: any): obj is CertificateCategoryLike {
  return  obj && // not null AND
    (( obj instanceof CertificateCategory) || // instance of CertificateCategory OR
    ( typeof obj === 'object' && "description" in obj && "id" in obj &&     true) // its an object with all the right properties
    );
}
/**
 */
export interface CertificateCategoryLike {
/**
 * Nice text description of what this cert category is for.
 */
  description: string;
/**
 * The category ID
 */
  id: string;
  /** Indexer */
  [key: string]: any;
}

/**
 */
export class CertificateCategory /*extends MessageData implements CertificateCategoryLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.description = "";
    this.id = "";
  }

/**
 * Nice text description of what this cert category is for.
 */
  description: string;
/**
 * The category ID
 */
  id: string;
  /**
   * parses a string into a CertificateCategory.  
   * @returns a new CertificateCategory; or undefined if the object could not be parsed.
   */
  static parse(data:string): CertificateCategory {
    const obj = JSON.parse(data);
    if(obj && isCertificateCategory(obj)){
      return CertificateCategory.copy(obj);
    }
    throw Error("Cannot parse CertificateCategory from " + data);
  } // END parse

  /**
   * Returns a copy of CertificateCategory or undefined if the original object is not copyable.
   */
  static copy(obj: CertificateCategoryLike): CertificateCategory {
    if(isCertificateCategory(obj)){
      let copy = new CertificateCategory();
      copy = Object.assign(copy, obj);
      return copy;
    }
    throw Error("Cannot copy CertificateCategory from Object.");
  } // END copy
} // END CertificateCategory
