/*
 * DO NOT EDIT.  Generated Message from WebApi.dataResponseAAMVAData.json
 * Copyright © Thales, 2023
 */

import { AamvaResult , type AamvaResultLike, isAamvaResult} from './aamvaResult.mts';
import { ReaderDataType } from './ReaderDataType.mts';

export function isDataResponseAAMVAData(obj: any): obj is DataResponseAAMVADataLike {
  return  obj && // not null AND
    (( obj instanceof DataResponseAAMVAData) || // instance of DataResponseAAMVAData OR
    ( typeof obj === 'object' && "aamva_data" in obj && "id" in obj && "name" in obj && "type" in obj &&     true) // its an object with all the right properties
    );
}
/**
 */
export interface DataResponseAAMVADataLike {
/**
 * Gets the AAMVA data details
 */
  aamva_data: AamvaResultLike;
/**
 * Data Item ID
 */
  id: number;
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
 * Returns the AAMVAResult value of the data item requested.
 */
export class DataResponseAAMVAData /*extends MessageData implements DataResponseAAMVADataLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.aamva_data = new AamvaResult();
    this.id = 0;
    this.name = "";
    this.type = ReaderDataType.SCDG1_CODELINE; 
  }

/**
 * Gets the AAMVA data details
 */
  aamva_data: AamvaResult;
/**
 * Data Item ID
 */
  id: number;
/**
 * Data Item Name
 */
  name: string;
/**
 * ReaderDataType
 */
  type: ReaderDataType;
  /**
   * parses a string into a DataResponseAAMVAData.  
   * @returns a new DataResponseAAMVAData; or undefined if the object could not be parsed.
   */
  static parse(data:string): DataResponseAAMVAData {
    const obj = JSON.parse(data);
    if(obj && isDataResponseAAMVAData(obj)){
      return DataResponseAAMVAData.copy(obj);
    }
    throw Error("Cannot parse DataResponseAAMVAData from " + data);
  } // END parse

  /**
   * Returns a copy of DataResponseAAMVAData or undefined if the original object is not copyable.
   */
  static copy(obj: DataResponseAAMVADataLike): DataResponseAAMVAData {
    if(isDataResponseAAMVAData(obj)){
      let copy = new DataResponseAAMVAData();
      copy = Object.assign(copy, obj);
      if(isAamvaResult(obj.aamva_data)){ copy.aamva_data = AamvaResult.copy(obj.aamva_data); } else { throw Error("Missing required property aamva_data of DataResponseAAMVAData") }
      return copy;
    }
    throw Error("Cannot copy DataResponseAAMVAData from Object.");
  } // END copy
} // END DataResponseAAMVAData
