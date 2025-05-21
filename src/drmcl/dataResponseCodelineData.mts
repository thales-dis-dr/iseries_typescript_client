/*
 * DO NOT EDIT.  Generated Message from WebApi.dataResponseCodelineData.json
 * Copyright © Thales, 2023
 */

import { MrzData , type MrzDataLike, isMrzData} from './mrzData.mts';
import { ReaderDataType } from './ReaderDataType.mts';

export function isDataResponseCodelineData(obj: any): obj is DataResponseCodelineDataLike {
  return  obj && // not null AND
    (( obj instanceof DataResponseCodelineData) || // instance of DataResponseCodelineData OR
    ( typeof obj === 'object' && "codeline_data" in obj && "id" in obj && "name" in obj && "type" in obj &&     true) // its an object with all the right properties
    );
}
/**
 */
export interface DataResponseCodelineDataLike {
/**
 * Gets the mrz details
 */
  codeline_data: MrzDataLike;
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
 * Returns the mrzData value of the data item requested.
 */
export class DataResponseCodelineData /*extends MessageData implements DataResponseCodelineDataLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.codeline_data = new MrzData();
    this.id = 0;
    this.name = "";
    this.type = ReaderDataType.SCDG1_CODELINE; 
  }

/**
 * Gets the mrz details
 */
  codeline_data: MrzData;
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
   * parses a string into a DataResponseCodelineData.  
   * @returns a new DataResponseCodelineData; or undefined if the object could not be parsed.
   */
  static parse(data:string): DataResponseCodelineData {
    const obj = JSON.parse(data);
    if(obj && isDataResponseCodelineData(obj)){
      return DataResponseCodelineData.copy(obj);
    }
    throw Error("Cannot parse DataResponseCodelineData from " + data);
  } // END parse

  /**
   * Returns a copy of DataResponseCodelineData or undefined if the original object is not copyable.
   */
  static copy(obj: DataResponseCodelineDataLike): DataResponseCodelineData {
    if(isDataResponseCodelineData(obj)){
      let copy = new DataResponseCodelineData();
      copy = Object.assign(copy, obj);
      if(isMrzData(obj.codeline_data)){ copy.codeline_data = MrzData.copy(obj.codeline_data); } else { throw Error("Missing required property codeline_data of DataResponseCodelineData") }
      return copy;
    }
    throw Error("Cannot copy DataResponseCodelineData from Object.");
  } // END copy
} // END DataResponseCodelineData
