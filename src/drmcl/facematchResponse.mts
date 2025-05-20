/*
 * DO NOT EDIT.  Generated Message from WebApi.facematchResponse.json
 * Copyright © Thales, 2023
 */

export function isFacematchResponse(obj: any): obj is FacematchResponseLike {
  return  obj && // not null AND
    (( obj instanceof FacematchResponse) || // instance of FacematchResponse OR
    ( typeof obj === 'object' && /*"external_image_photo_match" in obj && */ /*"ext_image_photo_match_val" in obj && */ /*"id_photo_sc_match" in obj && */ /*"id_sc_match_val" in obj && */ /*"sc_external_image_match" in obj && */ /*"sc_ext_image_match_val" in obj && */     true) // its an object with all the right properties
    );
}
/**
 * @deprecated The interface should not be used. true
 */
export interface FacematchResponseLike {
/**
 * Result of the external image to document photo match
 */
  external_image_photo_match?: boolean | undefined | null;
/**
 * Numerical result of the external image to document photo match
 * Alias for external_image_photo_match_value
 */
  ext_image_photo_match_val?: number | undefined | null;
/**
 * Result of the document photo to smartcard match
 */
  id_photo_sc_match?: boolean | undefined | null;
/**
 * Numerical result of the document photo to smartcard match
 * Alias for id_photo_sc_match_value
 */
  id_sc_match_val?: number | undefined | null;
/**
 * Result of the smartcard to external image match
 */
  sc_external_image_match?: boolean | undefined | null;
/**
 * Numerical result of the smartcard to external image match
 * Alias for sc_external_image_match_value
 */
  sc_ext_image_match_val?: number | undefined | null;
  /** Indexer */
  [key: string]: any;
}

/**
 * Base class for facematch responses
 * @deprecated This item will be removed in a future release. true
 */
export class FacematchResponse /*extends MessageData implements FacematchResponseLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.external_image_photo_match = null;
    this.ext_image_photo_match_val = null;
    this.id_photo_sc_match = null;
    this.id_sc_match_val = null;
    this.sc_external_image_match = null;
    this.sc_ext_image_match_val = null;
  }

/**
 * Result of the external image to document photo match
 */
  external_image_photo_match?: boolean | undefined | null;
/**
 * Numerical result of the external image to document photo match
 * Alias for external_image_photo_match_value
 */
  ext_image_photo_match_val?: number | undefined | null;
  get external_image_photo_match_value(): number | undefined | null { return this.ext_image_photo_match_val; }
  set external_image_photo_match_value(value: number | undefined | null) { this.ext_image_photo_match_val = value; }
/**
 * Result of the document photo to smartcard match
 */
  id_photo_sc_match?: boolean | undefined | null;
/**
 * Numerical result of the document photo to smartcard match
 * Alias for id_photo_sc_match_value
 */
  id_sc_match_val?: number | undefined | null;
  get id_photo_sc_match_value(): number | undefined | null { return this.id_sc_match_val; }
  set id_photo_sc_match_value(value: number | undefined | null) { this.id_sc_match_val = value; }
/**
 * Result of the smartcard to external image match
 */
  sc_external_image_match?: boolean | undefined | null;
/**
 * Numerical result of the smartcard to external image match
 * Alias for sc_external_image_match_value
 */
  sc_ext_image_match_val?: number | undefined | null;
  get sc_external_image_match_value(): number | undefined | null { return this.sc_ext_image_match_val; }
  set sc_external_image_match_value(value: number | undefined | null) { this.sc_ext_image_match_val = value; }
  /**
   * parses a string into a FacematchResponse.  
   * @returns a new FacematchResponse; or undefined if the object could not be parsed.
   */
  static parse(data:string): FacematchResponse {
    const obj = JSON.parse(data);
    if(obj && isFacematchResponse(obj)){
      return FacematchResponse.copy(obj);
    }
    throw Error("Cannot parse FacematchResponse from " + data);
  } // END parse

  /**
   * Returns a copy of FacematchResponse or undefined if the original object is not copyable.
   */
  static copy(obj: FacematchResponseLike): FacematchResponse {
    if(isFacematchResponse(obj)){
      let copy = new FacematchResponse();
      copy = Object.assign(copy, obj);
      return copy;
    }
    throw Error("Cannot copy FacematchResponse from Object.");
  } // END copy
} // END FacematchResponse
