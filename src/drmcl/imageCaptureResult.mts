/*
 * DO NOT EDIT.  Generated Message from WebApi.imageCaptureResult.json
 * Copyright © Thales, 2023
 */

import { CameraType } from './CameraType.mts';

export function isImageCaptureResult(obj: any): obj is ImageCaptureResultLike {
  return  obj && // not null AND
    (( obj instanceof ImageCaptureResult) || // instance of ImageCaptureResult OR
    ( typeof obj === 'object' && "id" in obj && "type" in obj &&     true) // its an object with all the right properties
    );
}
/**
 */
export interface ImageCaptureResultLike {
/**
 * The Image ID
 */
  id: number;
/**
 * The Camera type of the captured image
 * Alias for ImageType
 */
  type: CameraType;
  /** Indexer */
  [key: string]: any;
}

/**
 * Sends Image data
 */
export class ImageCaptureResult /*extends CaptureResult implements ImageCaptureResultLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.id = 0;
    this.type = CameraType.UNKNOWN; 
  }

/**
 * The Image ID
 */
  id: number;
/**
 * The Camera type of the captured image
 * Alias for ImageType
 */
  type: CameraType;
  get ImageType(): CameraType { return this.type; }
  set ImageType(value: CameraType) { this.type = value; }
  /**
   * parses a string into a ImageCaptureResult.  
   * @returns a new ImageCaptureResult; or undefined if the object could not be parsed.
   */
  static parse(data:string): ImageCaptureResult {
    const obj = JSON.parse(data);
    if(obj && isImageCaptureResult(obj)){
      return ImageCaptureResult.copy(obj);
    }
    throw Error("Cannot parse ImageCaptureResult from " + data);
  } // END parse

  /**
   * Returns a copy of ImageCaptureResult or undefined if the original object is not copyable.
   */
  static copy(obj: ImageCaptureResultLike): ImageCaptureResult {
    if(isImageCaptureResult(obj)){
      let copy = new ImageCaptureResult();
      copy = Object.assign(copy, obj);
      return copy;
    }
    throw Error("Cannot copy ImageCaptureResult from Object.");
  } // END copy
} // END ImageCaptureResult
