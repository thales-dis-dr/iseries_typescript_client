/*
 * DO NOT EDIT.  Generated Message from WebApi.dataResponseOperationStatus.json
 * Copyright © Thales, 2023
 */

import { TRISTATE } from './TRISTATE.mts';
import { ReaderDataType } from './ReaderDataType.mts';

export function isDataResponseOperationStatus(obj: any): obj is DataResponseOperationStatusLike {
  return  obj && // not null AND
    (( obj instanceof DataResponseOperationStatus) || // instance of DataResponseOperationStatus OR
    ( typeof obj === 'object' && "id" in obj && "name" in obj && "operation_status" in obj && "type" in obj &&     true) // its an object with all the right properties
    );
}
/**
 */
export interface DataResponseOperationStatusLike {
/**
 * Data Item ID
 */
  id: number;
/**
 * Data Item Name
 */
  name: string;
/**
 * TRISTATE status
 */
  operation_status: TRISTATE;
/**
 * ReaderDataType
 */
  type: ReaderDataType;
  /** Indexer */
  [key: string]: any;
}

/**
 * Returns the TRISTATE/operation_status value of the data item requested.
 */
export class DataResponseOperationStatus /*extends MessageData implements DataResponseOperationStatusLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.id = 0;
    this.name = "";
    this.operation_status = TRISTATE.TS_NOT_PERFORMED; 
    this.type = ReaderDataType.SCDG1_CODELINE; 
  }

/**
 * Data Item ID
 */
  id: number;
/**
 * Data Item Name
 */
  name: string;
/**
 * TRISTATE status
 */
  operation_status: TRISTATE;
/**
 * ReaderDataType
 */
  type: ReaderDataType;
  /**
   * parses a string into a DataResponseOperationStatus.  
   * @returns a new DataResponseOperationStatus; or undefined if the object could not be parsed.
   */
  static parse(data:string): DataResponseOperationStatus {
    const obj = JSON.parse(data);
    if(obj && isDataResponseOperationStatus(obj)){
      return DataResponseOperationStatus.copy(obj);
    }
    throw Error("Cannot parse DataResponseOperationStatus from " + data);
  } // END parse

  /**
   * Returns a copy of DataResponseOperationStatus or undefined if the original object is not copyable.
   */
  static copy(obj: DataResponseOperationStatusLike): DataResponseOperationStatus {
    if(isDataResponseOperationStatus(obj)){
      let copy = new DataResponseOperationStatus();
      copy = Object.assign(copy, obj);
      return copy;
    }
    throw Error("Cannot copy DataResponseOperationStatus from Object.");
  } // END copy
} // END DataResponseOperationStatus
