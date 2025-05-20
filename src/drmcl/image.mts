/*
 * DO NOT EDIT.  Generated Message from WebApi.image.json
 * Copyright © Thales, 2023
 */

export function isImage(obj: any): obj is ImageLike {
  return  obj && // not null AND
    (( obj instanceof Image) || // instance of Image OR
    ( typeof obj === 'object' && "data" in obj && "format" in obj &&     true) // its an object with all the right properties
    );
}
/**
 */
export interface ImageLike {
/**
 * Base 64 encoded image data.
 */
  data: string;
/**
 * Indicates the type of the image.  (jpg, png, bmp)
 */
  format: string;
  /** Indexer */
  [key: string]: any;
}

/**
 * This structure an image.
 */
export class Image /*extends MessageData implements ImageLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.data = "";
    this.format = "";
  }

/**
 * Base 64 encoded image data.
 */
  data: string;
/**
 * Indicates the type of the image.  (jpg, png, bmp)
 */
  format: string;
  /**
   * parses a string into a Image.  
   * @returns a new Image; or undefined if the object could not be parsed.
   */
  static parse(data:string): Image {
    const obj = JSON.parse(data);
    if(obj && isImage(obj)){
      return Image.copy(obj);
    }
    throw Error("Cannot parse Image from " + data);
  } // END parse

  /**
   * Returns a copy of Image or undefined if the original object is not copyable.
   */
  static copy(obj: ImageLike): Image {
    if(isImage(obj)){
      let copy = new Image();
      copy = Object.assign(copy, obj);
      return copy;
    }
    throw Error("Cannot copy Image from Object.");
  } // END copy
} // END Image
