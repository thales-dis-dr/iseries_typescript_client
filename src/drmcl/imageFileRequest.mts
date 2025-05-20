/*
 * DO NOT EDIT.  Generated Message from WebApi.imageFileRequest.json
 * Copyright © Thales, 2023
 */

export function isImageFileRequest(obj: any): obj is ImageFileRequestLike {
  return  obj && // not null AND
    (( obj instanceof ImageFileRequest) || // instance of ImageFileRequest OR
    ( typeof obj === 'object' && "image_id" in obj && /*"compression" in obj && */ /*"type" in obj && */     true) // its an object with all the right properties
    );
}
/**
 */
export interface ImageFileRequestLike {
/**
 * The Id of the image being requested
 * Alias for id
 */
  image_id: number;
/**
 * The compression level if the image is a type that gets compressed.
 * Alias for ImageCompression
 */
  compression?: number | undefined | null;
/**
 * Indicates the type of the image.  (jpg, png, bmp)
 * Alias for ImageType
 */
  type?: string | undefined | null;
  /** Indexer */
  [key: string]: any;
}

/**
 * This structure is used to make an image request.
 */
export class ImageFileRequest /*extends MessageData implements ImageFileRequestLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.image_id = 0;
    this.compression = null;
    this.type = null;
  }

/**
 * The Id of the image being requested
 * Alias for id
 */
  image_id: number;
  get id(): number { return this.image_id; }
  set id(value: number) { this.image_id = value; }
/**
 * The compression level if the image is a type that gets compressed.
 * Alias for ImageCompression
 */
  compression?: number | undefined | null;
  get ImageCompression(): number | undefined | null { return this.compression; }
  set ImageCompression(value: number | undefined | null) { this.compression = value; }
/**
 * Indicates the type of the image.  (jpg, png, bmp)
 * Alias for ImageType
 */
  type?: string | undefined | null;
  get ImageType(): string | undefined | null { return this.type; }
  set ImageType(value: string | undefined | null) { this.type = value; }
  /**
   * parses a string into a ImageFileRequest.  
   * @returns a new ImageFileRequest; or undefined if the object could not be parsed.
   */
  static parse(data:string): ImageFileRequest {
    const obj = JSON.parse(data);
    if(obj && isImageFileRequest(obj)){
      return ImageFileRequest.copy(obj);
    }
    throw Error("Cannot parse ImageFileRequest from " + data);
  } // END parse

  /**
   * Returns a copy of ImageFileRequest or undefined if the original object is not copyable.
   */
  static copy(obj: ImageFileRequestLike): ImageFileRequest {
    if(isImageFileRequest(obj)){
      let copy = new ImageFileRequest();
      copy = Object.assign(copy, obj);
      return copy;
    }
    throw Error("Cannot copy ImageFileRequest from Object.");
  } // END copy
} // END ImageFileRequest
