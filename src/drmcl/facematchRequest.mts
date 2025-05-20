/*
 * DO NOT EDIT.  Generated Message from WebApi.facematchRequest.json
 * Copyright © Thales, 2023
 */

export function isFacematchRequest(obj: any): obj is FacematchRequestLike {
  return  obj && // not null AND
    (( obj instanceof FacematchRequest) || // instance of FacematchRequest OR
    ( typeof obj === 'object' && /*"image" in obj && */ /*"photo" in obj && */ /*"sc" in obj && */     true) // its an object with all the right properties
    );
}
/**
 * @deprecated The interface should not be used. This will be removed in a future version
 */
export interface FacematchRequestLike {
/**
 * Externally provided image for matching
 * Alias for external_image
 */
  image?: string | undefined | null;
/**
 * ID of the image captured from the presented document
 * Alias for id_photo
 */
  photo?: number | undefined | null;
/**
 * ID of the image captured from the smartcard data
 * Alias for sc_data
 */
  sc?: number | undefined | null;
  /** Indexer */
  [key: string]: any;
}

/**
 * Base class for facematch requests
 * @deprecated This item will be removed in a future release. This will be removed in a future version
 */
export class FacematchRequest /*extends MessageData implements FacematchRequestLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.image = null;
    this.photo = null;
    this.sc = null;
  }

/**
 * Externally provided image for matching
 * Alias for external_image
 */
  image?: string | undefined | null;
  get external_image(): string | undefined | null { return this.image; }
  set external_image(value: string | undefined | null) { this.image = value; }
/**
 * ID of the image captured from the presented document
 * Alias for id_photo
 */
  photo?: number | undefined | null;
  get id_photo(): number | undefined | null { return this.photo; }
  set id_photo(value: number | undefined | null) { this.photo = value; }
/**
 * ID of the image captured from the smartcard data
 * Alias for sc_data
 */
  sc?: number | undefined | null;
  get sc_data(): number | undefined | null { return this.sc; }
  set sc_data(value: number | undefined | null) { this.sc = value; }
  /**
   * parses a string into a FacematchRequest.  
   * @returns a new FacematchRequest; or undefined if the object could not be parsed.
   */
  static parse(data:string): FacematchRequest {
    const obj = JSON.parse(data);
    if(obj && isFacematchRequest(obj)){
      return FacematchRequest.copy(obj);
    }
    throw Error("Cannot parse FacematchRequest from " + data);
  } // END parse

  /**
   * Returns a copy of FacematchRequest or undefined if the original object is not copyable.
   */
  static copy(obj: FacematchRequestLike): FacematchRequest {
    if(isFacematchRequest(obj)){
      let copy = new FacematchRequest();
      copy = Object.assign(copy, obj);
      return copy;
    }
    throw Error("Cannot copy FacematchRequest from Object.");
  } // END copy
} // END FacematchRequest
