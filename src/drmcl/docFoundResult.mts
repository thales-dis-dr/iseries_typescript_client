/*
 * DO NOT EDIT.  Generated Message from WebApi.docFoundResult.json
 * Copyright © Thales, 2023
 */

export function isDocFoundResult(obj: any): obj is DocFoundResultLike {
  return  obj && // not null AND
    (( obj instanceof DocFoundResult) || // instance of DocFoundResult OR
    ( typeof obj === 'object' &&     true) // its an object with all the right properties
    );
}
/**
 */
export interface DocFoundResultLike {
  /** Indexer */
  [key: string]: any;
}

/**
 */
export class DocFoundResult /*extends CaptureResult implements DocFoundResultLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
  }

  /**
   * parses a string into a DocFoundResult.  
   * @returns a new DocFoundResult; or undefined if the object could not be parsed.
   */
  static parse(data:string): DocFoundResult {
    const obj = JSON.parse(data);
    if(obj && isDocFoundResult(obj)){
      return DocFoundResult.copy(obj);
    }
    throw Error("Cannot parse DocFoundResult from " + data);
  } // END parse

  /**
   * Returns a copy of DocFoundResult or undefined if the original object is not copyable.
   */
  static copy(obj: DocFoundResultLike): DocFoundResult {
    if(isDocFoundResult(obj)){
      let copy = new DocFoundResult();
      copy = Object.assign(copy, obj);
      return copy;
    }
    throw Error("Cannot copy DocFoundResult from Object.");
  } // END copy
} // END DocFoundResult
