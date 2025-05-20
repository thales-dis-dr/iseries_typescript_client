/*
 * DO NOT EDIT.  Generated Message from WebApi.assureIDVerifyDocument.json
 * Copyright © Thales, 2023
 */

export function isAssureIDVerifyDocument(obj: any): obj is AssureIDVerifyDocumentLike {
  return  obj && // not null AND
    (( obj instanceof AssureIDVerifyDocument) || // instance of AssureIDVerifyDocument OR
    ( typeof obj === 'object' && /*"bi" in obj && */ /*"bu" in obj && */ /*"bv" in obj && */ /*"fi" in obj && */ /*"fu" in obj && */ /*"fv" in obj && */ /*"wait" in obj && */     true) // its an object with all the right properties
    );
}
/**
 * @deprecated The interface should not be used. This will be removed in a future version
 */
export interface AssureIDVerifyDocumentLike {
/**
 * The image id of the back ir image
 * Alias for back_ir
 */
  bi?: number | undefined | null;
/**
 * The image id of the back uv image
 * Alias for back_uv
 */
  bu?: number | undefined | null;
/**
 * The image id of the back visible image
 * Alias for back_visible
 */
  bv?: number | undefined | null;
/**
 * The image id of the front ir image
 * Alias for front_ir
 */
  fi?: number | undefined | null;
/**
 * The image id of the front uv image
 * Alias for front_uv
 */
  fu?: number | undefined | null;
/**
 * The image id of the front visible image
 * Alias for front_visible
 */
  fv?: number | undefined | null;
/**
 * Flag for waiting on acuant results
 * Alias for wait_for_results
 */
  wait?: boolean | undefined | null;
  /** Indexer */
  [key: string]: any;
}

/**
 * Base class for verifying a document through acuant assureid
 * @deprecated This item will be removed in a future release. This will be removed in a future version
 */
export class AssureIDVerifyDocument /*extends MessageData implements AssureIDVerifyDocumentLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.bi = null;
    this.bu = null;
    this.bv = null;
    this.fi = null;
    this.fu = null;
    this.fv = null;
    this.wait = null;
  }

/**
 * The image id of the back ir image
 * Alias for back_ir
 */
  bi?: number | undefined | null;
  get back_ir(): number | undefined | null { return this.bi; }
  set back_ir(value: number | undefined | null) { this.bi = value; }
/**
 * The image id of the back uv image
 * Alias for back_uv
 */
  bu?: number | undefined | null;
  get back_uv(): number | undefined | null { return this.bu; }
  set back_uv(value: number | undefined | null) { this.bu = value; }
/**
 * The image id of the back visible image
 * Alias for back_visible
 */
  bv?: number | undefined | null;
  get back_visible(): number | undefined | null { return this.bv; }
  set back_visible(value: number | undefined | null) { this.bv = value; }
/**
 * The image id of the front ir image
 * Alias for front_ir
 */
  fi?: number | undefined | null;
  get front_ir(): number | undefined | null { return this.fi; }
  set front_ir(value: number | undefined | null) { this.fi = value; }
/**
 * The image id of the front uv image
 * Alias for front_uv
 */
  fu?: number | undefined | null;
  get front_uv(): number | undefined | null { return this.fu; }
  set front_uv(value: number | undefined | null) { this.fu = value; }
/**
 * The image id of the front visible image
 * Alias for front_visible
 */
  fv?: number | undefined | null;
  get front_visible(): number | undefined | null { return this.fv; }
  set front_visible(value: number | undefined | null) { this.fv = value; }
/**
 * Flag for waiting on acuant results
 * Alias for wait_for_results
 */
  wait?: boolean | undefined | null;
  get wait_for_results(): boolean | undefined | null { return this.wait; }
  set wait_for_results(value: boolean | undefined | null) { this.wait = value; }
  /**
   * parses a string into a AssureIDVerifyDocument.  
   * @returns a new AssureIDVerifyDocument; or undefined if the object could not be parsed.
   */
  static parse(data:string): AssureIDVerifyDocument {
    const obj = JSON.parse(data);
    if(obj && isAssureIDVerifyDocument(obj)){
      return AssureIDVerifyDocument.copy(obj);
    }
    throw Error("Cannot parse AssureIDVerifyDocument from " + data);
  } // END parse

  /**
   * Returns a copy of AssureIDVerifyDocument or undefined if the original object is not copyable.
   */
  static copy(obj: AssureIDVerifyDocumentLike): AssureIDVerifyDocument {
    if(isAssureIDVerifyDocument(obj)){
      let copy = new AssureIDVerifyDocument();
      copy = Object.assign(copy, obj);
      return copy;
    }
    throw Error("Cannot copy AssureIDVerifyDocument from Object.");
  } // END copy
} // END AssureIDVerifyDocument
