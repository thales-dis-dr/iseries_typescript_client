/*
 * DO NOT EDIT.  Generated Message from WebApi.certificateListCategoriesResult.json
 * Copyright © Thales, 2023
 */

import { CertificateCategory , type CertificateCategoryLike, isCertificateCategory} from './certificateCategory.mts';

export function isCertificateListCategoriesResult(obj: any): obj is CertificateListCategoriesResultLike {
  return  obj && // not null AND
    (( obj instanceof CertificateListCategoriesResult) || // instance of CertificateListCategoriesResult OR
    ( typeof obj === 'object' && "categories" in obj &&     true) // its an object with all the right properties
    );
}
/**
 */
export interface CertificateListCategoriesResultLike {
/**
 * List of certificates in store
 */
  categories: CertificateCategoryLike[];
  /** Indexer */
  [key: string]: any;
}

/**
 */
export class CertificateListCategoriesResult /*extends MessageData implements CertificateListCategoriesResultLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.categories = [];
  }

/**
 * List of certificates in store
 */
  categories: CertificateCategory[];
  /**
   * parses a string into a CertificateListCategoriesResult.  
   * @returns a new CertificateListCategoriesResult; or undefined if the object could not be parsed.
   */
  static parse(data:string): CertificateListCategoriesResult {
    const obj = JSON.parse(data);
    if(obj && isCertificateListCategoriesResult(obj)){
      return CertificateListCategoriesResult.copy(obj);
    }
    throw Error("Cannot parse CertificateListCategoriesResult from " + data);
  } // END parse

  /**
   * Returns a copy of CertificateListCategoriesResult or undefined if the original object is not copyable.
   */
  static copy(obj: CertificateListCategoriesResultLike): CertificateListCategoriesResult {
    if(isCertificateListCategoriesResult(obj)){
      let copy = new CertificateListCategoriesResult();
      copy = Object.assign(copy, obj);
      copy.categories = new Array<CertificateCategory>();
      for(const el of obj.categories){
        if(isCertificateCategory(el)){
          copy.categories.push(CertificateCategory.copy(el));
        } else { throw Error("Missing required property categories of CertificateListCategoriesResult") }
      }
      return copy;
    }
    throw Error("Cannot copy CertificateListCategoriesResult from Object.");
  } // END copy
} // END CertificateListCategoriesResult
