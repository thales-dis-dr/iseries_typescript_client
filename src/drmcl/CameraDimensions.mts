/*
 * DO NOT EDIT.  Generated Message from WebApi.CameraDimensions.json
 * Copyright © Thales, 2023
 */

export function isCameraDimensions(obj: any): obj is CameraDimensions {
  return  obj && // not null AND
    (( obj instanceof CameraDimensions) || // instance of CameraDimensions OR
    ( typeof obj === 'object' && /*"height" in obj && */ /*"width" in obj && */ /*"xDpi" in obj && */ /*"yDpi" in obj && */     true) // its an object with all the right properties
    );
}
/**
 */
export interface CameraDimensionsLike {
/**
 * Image Height
 */
  height?: number | undefined | null;
/**
 * Image Width
 */
  width?: number | undefined | null;
/**
 * X DPI
 */
  xDpi?: number | undefined | null;
/**
 * Y DPI
 */
  yDpi?: number | undefined | null;
  /** Indexer */
  [key: string]: any;
}

/**
 * Size of images produced by the camera
 */
export class CameraDimensions /*extends MessageData implements CameraDimensions */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.height = null;
    this.width = null;
    this.xDpi = null;
    this.yDpi = null;
  }

/**
 * Image Height
 */
  height?: number | undefined | null;
/**
 * Image Width
 */
  width?: number | undefined | null;
/**
 * X DPI
 */
  xDpi?: number | undefined | null;
/**
 * Y DPI
 */
  yDpi?: number | undefined | null;
  /**
   * parses a string into a CameraDimensions.  
   * @returns a new CameraDimensions; or undefined if the object could not be parsed.
   */
  static parse(data:string): CameraDimensions {
    const obj = JSON.parse(data);
    if(obj && isCameraDimensions(obj)){
      return CameraDimensions.copy(obj);
    }
    throw Error("Cannot parse CameraDimensions from " + data);
  } // END parse

  /**
   * Returns a copy of CameraDimensions or undefined if the original object is not copyable.
   */
  static copy(obj: CameraDimensions): CameraDimensions {
    if(isCameraDimensions(obj)){
      let copy = new CameraDimensions();
      copy = Object.assign(copy, obj);
      return copy;
    }
    throw Error("Cannot copy CameraDimensions from Object.");
  } // END copy
} // END CameraDimensions
