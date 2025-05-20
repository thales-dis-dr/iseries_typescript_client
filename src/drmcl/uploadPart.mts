/*
 * DO NOT EDIT.  Generated Message from WebApi.uploadPart.json
 * Copyright © Thales, 2023
 */

export function isUploadPart(obj: any): obj is UploadPartLike {
  return  obj && // not null AND
    (( obj instanceof UploadPart) || // instance of UploadPart OR
    ( typeof obj === 'object' && /*"check" in obj && */ "data" in obj && /*"isFinal" in obj && */ "name" in obj && "part" in obj &&     true) // its an object with all the right properties
    );
}
/**
 */
export interface UploadPartLike {
/**
 * An optional check digit
 */
  check?: string | undefined | null;
/**
 * Base64 encoded file data.
 */
  data: string;
/**
 * Indicates this is the last part
 */
  isFinal?: boolean | undefined | null;
/**
 * The name used to refer to the uploaded file
 */
  name: string;
/**
 * A part number.  They must be labeled in order for the part of the file sent.  The last part must have the isFinal property set to true.
 */
  part: number;
  /** Indexer */
  [key: string]: any;
}

/**
 */
export class UploadPart /*extends MessageData implements UploadPartLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.check = null;
    this.data = "";
    this.isFinal = null;
    this.name = "";
    this.part = 0;
  }

/**
 * An optional check digit
 */
  check?: string | undefined | null;
/**
 * Base64 encoded file data.
 */
  data: string;
/**
 * Indicates this is the last part
 */
  isFinal?: boolean | undefined | null;
/**
 * The name used to refer to the uploaded file
 */
  name: string;
/**
 * A part number.  They must be labeled in order for the part of the file sent.  The last part must have the isFinal property set to true.
 */
  part: number;
  /**
   * parses a string into a UploadPart.  
   * @returns a new UploadPart; or undefined if the object could not be parsed.
   */
  static parse(data:string): UploadPart {
    const obj = JSON.parse(data);
    if(obj && isUploadPart(obj)){
      return UploadPart.copy(obj);
    }
    throw Error("Cannot parse UploadPart from " + data);
  } // END parse

  /**
   * Returns a copy of UploadPart or undefined if the original object is not copyable.
   */
  static copy(obj: UploadPartLike): UploadPart {
    if(isUploadPart(obj)){
      let copy = new UploadPart();
      copy = Object.assign(copy, obj);
      return copy;
    }
    throw Error("Cannot copy UploadPart from Object.");
  } // END copy
} // END UploadPart
