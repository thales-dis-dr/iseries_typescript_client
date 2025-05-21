/*
 * DO NOT EDIT.  Generated Message from WebApi.errorMessage.json
 * Copyright © Thales, 2023
 */

import { ErrorCodes } from './ErrorCodes.mts';

export function isErrorMessage(obj: any): obj is ErrorMessageLike {
  return  obj && // not null AND
    (( obj instanceof ErrorMessage) || // instance of ErrorMessage OR
    ( typeof obj === 'object' && "errorId" in obj &&     true) // its an object with all the right properties
    );
}
/**
 */
export interface ErrorMessageLike {
/**
 */
  errorId: ErrorCodes;
  /** Indexer */
  [key: string]: any;
}

/**
 */
export class ErrorMessage /*extends MessageData implements ErrorMessageLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.errorId = ErrorCodes.NO_ERROR_OCCURRED; 
  }

/**
 */
  errorId: ErrorCodes;
  /**
   * parses a string into a ErrorMessage.  
   * @returns a new ErrorMessage; or undefined if the object could not be parsed.
   */
  static parse(data:string): ErrorMessage {
    const obj = JSON.parse(data);
    if(obj && isErrorMessage(obj)){
      return ErrorMessage.copy(obj);
    }
    throw Error("Cannot parse ErrorMessage from " + data);
  } // END parse

  /**
   * Returns a copy of ErrorMessage or undefined if the original object is not copyable.
   */
  static copy(obj: ErrorMessageLike): ErrorMessage {
    if(isErrorMessage(obj)){
      let copy = new ErrorMessage();
      copy = Object.assign(copy, obj);
      return copy;
    }
    throw Error("Cannot copy ErrorMessage from Object.");
  } // END copy
} // END ErrorMessage
