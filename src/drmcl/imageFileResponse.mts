/*
 * DO NOT EDIT.  Generated Message from WebApi.imageFileResponse.json
 * Copyright © Thales, 2023
 */

export function isImageFileResponse(obj: any): obj is ImageFileResponseLike {
  return  obj && // not null AND
    (( obj instanceof ImageFileResponse) || // instance of ImageFileResponse OR
    ( typeof obj === 'object' && "image_id" in obj && "img" in obj && "type" in obj &&     true) // its an object with all the right properties
    );
}
/**
 */
export interface ImageFileResponseLike {
/**
 * The Id of the image being requested
 * Alias for id
 */
  image_id: number;
/**
 * Base 64 encoded image data.
 * Alias for imageData
 */
  img: string;
/**
 * Indicates the type of the image.  (jpg, png, bmp)
 * Alias for ImageType
 */
  type: string;
  /** Indexer */
  [key: string]: any;
}

/**
 * This structure defines the response to an image request.
 */
export class ImageFileResponse /*extends MessageData implements ImageFileResponseLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.image_id = 0;
    this.img = "";
    this.type = "";
  }

/**
 * The Id of the image being requested
 * Alias for id
 */
  image_id: number;
  get id(): number { return this.image_id; }
  set id(value: number) { this.image_id = value; }
/**
 * Base 64 encoded image data.
 * Alias for imageData
 */
  img: string;
  get imageData(): string { return this.img; }
  set imageData(value: string) { this.img = value; }
/**
 * Indicates the type of the image.  (jpg, png, bmp)
 * Alias for ImageType
 */
  type: string;
  get ImageType(): string { return this.type; }
  set ImageType(value: string) { this.type = value; }
  /**
   * parses a string into a ImageFileResponse.  
   * @returns a new ImageFileResponse; or undefined if the object could not be parsed.
   */
  static parse(data:string): ImageFileResponse {
    const obj = JSON.parse(data);
    if(obj && isImageFileResponse(obj)){
      return ImageFileResponse.copy(obj);
    }
    throw Error("Cannot parse ImageFileResponse from " + data);
  } // END parse

  /**
   * Returns a copy of ImageFileResponse or undefined if the original object is not copyable.
   */
  static copy(obj: ImageFileResponseLike): ImageFileResponse {
    if(isImageFileResponse(obj)){
      let copy = new ImageFileResponse();
      copy = Object.assign(copy, obj);
      return copy;
    }
    throw Error("Cannot copy ImageFileResponse from Object.");
  } // END copy
} // END ImageFileResponse
