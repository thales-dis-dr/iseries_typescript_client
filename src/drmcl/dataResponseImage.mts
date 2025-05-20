/*
 * DO NOT EDIT.  Generated Message from WebApi.dataResponseImage.json
 * Copyright © Thales, 2023
 */

import { ReaderDataType } from './ReaderDataType.mjs';

export function isDataResponseImage(obj: any): obj is DataResponseImageLike {
  return  obj && // not null AND
    (( obj instanceof DataResponseImage) || // instance of DataResponseImage OR
    ( typeof obj === 'object' && "id" in obj && "img" in obj && "image_format" in obj && "name" in obj && "type" in obj &&     true) // its an object with all the right properties
    );
}
/**
 */
export interface DataResponseImageLike {
/**
 * Data Item ID
 */
  id: number;
/**
 * binary data
 * Alias for imageData
 */
  img: string;
/**
 * Alias for ImageFormat
 */
  image_format: string;
/**
 * Data Item Name
 */
  name: string;
/**
 * ReaderDataType
 */
  type: ReaderDataType;
  /** Indexer */
  [key: string]: any;
}

/**
 * Returns the image data of the data item requested.
 */
export class DataResponseImage /*extends MessageData implements DataResponseImageLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.id = 0;
    this.img = "";
    this.image_format = "";
    this.name = "";
    this.type = ReaderDataType.SCDG1_CODELINE; 
  }

/**
 * Data Item ID
 */
  id: number;
/**
 * binary data
 * Alias for imageData
 */
  img: string;
  get imageData(): string { return this.img; }
  set imageData(value: string) { this.img = value; }
/**
 * Alias for ImageFormat
 */
  image_format: string;
  get ImageFormat(): string { return this.image_format; }
  set ImageFormat(value: string) { this.image_format = value; }
/**
 * Data Item Name
 */
  name: string;
/**
 * ReaderDataType
 */
  type: ReaderDataType;
  /**
   * parses a string into a DataResponseImage.  
   * @returns a new DataResponseImage; or undefined if the object could not be parsed.
   */
  static parse(data:string): DataResponseImage {
    const obj = JSON.parse(data);
    if(obj && isDataResponseImage(obj)){
      return DataResponseImage.copy(obj);
    }
    throw Error("Cannot parse DataResponseImage from " + data);
  } // END parse

  /**
   * Returns a copy of DataResponseImage or undefined if the original object is not copyable.
   */
  static copy(obj: DataResponseImageLike): DataResponseImage {
    if(isDataResponseImage(obj)){
      let copy = new DataResponseImage();
      copy = Object.assign(copy, obj);
      return copy;
    }
    throw Error("Cannot copy DataResponseImage from Object.");
  } // END copy
} // END DataResponseImage
