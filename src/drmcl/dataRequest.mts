/*
 * DO NOT EDIT.  Generated Message from WebApi.dataRequest.json
 * Copyright © Thales, 2023
 */

import { ReaderDataType } from './ReaderDataType.mts';

export function isDataRequest(obj: any): obj is DataRequestLike {
  return  obj && // not null AND
    (( obj instanceof DataRequest) || // instance of DataRequest OR
    ( typeof obj === 'object' && "id" in obj && /*"image_compression" in obj && */ /*"image_format" in obj && */ /*"type" in obj && */     true) // its an object with all the right properties
    );
}
/**
 */
export interface DataRequestLike {
/**
 * Data Item ID
 */
  id: number;
/**
 * Alias for ImageCompression
 */
  image_compression?: number | undefined | null;
/**
 * Alias for ImageFormat
 */
  image_format?: string | undefined | null;
/**
 * ReaderDataType
 */
  type?: ReaderDataType | undefined | null;
  /** Indexer */
  [key: string]: any;
}

/**
 * Request a data item value from a previously returned data item id
 */
export class DataRequest /*extends MessageData implements DataRequestLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.id = 0;
    this.image_compression = null;
    this.image_format = null;
    this.type = null;
  }

/**
 * Data Item ID
 */
  id: number;
/**
 * Alias for ImageCompression
 */
  image_compression?: number | undefined | null;
  get ImageCompression(): number | undefined | null { return this.image_compression; }
  set ImageCompression(value: number | undefined | null) { this.image_compression = value; }
/**
 * Alias for ImageFormat
 */
  image_format?: string | undefined | null;
  get ImageFormat(): string | undefined | null { return this.image_format; }
  set ImageFormat(value: string | undefined | null) { this.image_format = value; }
/**
 * ReaderDataType
 */
  type?: ReaderDataType | undefined | null;
  /**
   * parses a string into a DataRequest.  
   * @returns a new DataRequest; or undefined if the object could not be parsed.
   */
  static parse(data:string): DataRequest {
    const obj = JSON.parse(data);
    if(obj && isDataRequest(obj)){
      return DataRequest.copy(obj);
    }
    throw Error("Cannot parse DataRequest from " + data);
  } // END parse

  /**
   * Returns a copy of DataRequest or undefined if the original object is not copyable.
   */
  static copy(obj: DataRequestLike): DataRequest {
    if(isDataRequest(obj)){
      let copy = new DataRequest();
      copy = Object.assign(copy, obj);
      return copy;
    }
    throw Error("Cannot copy DataRequest from Object.");
  } // END copy
} // END DataRequest
