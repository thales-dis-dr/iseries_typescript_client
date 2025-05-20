/*
 * DO NOT EDIT.  Generated Message from WebApi.aamvaDataItem.json
 * Copyright © Thales, 2023
 */

export function isAamvaDataItem(obj: any): obj is AamvaDataItemLike {
  return  obj && // not null AND
    (( obj instanceof AamvaDataItem) || // instance of AamvaDataItem OR
    ( typeof obj === 'object' && "ID" in obj && "Name" in obj && "Value" in obj &&     true) // its an object with all the right properties
    );
}
/**
 */
export interface AamvaDataItemLike {
/**
 * The data items ID.
 */
  ID: string;
/**
 * The data items name.
 */
  Name: string;
/**
 * The data items value.
 */
  Value: string;
  /** Indexer */
  [key: string]: any;
}

/**
 * Key-value AAMVA data items
 */
export class AamvaDataItem /*extends MessageData implements AamvaDataItemLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.ID = "";
    this.Name = "";
    this.Value = "";
  }

/**
 * The data items ID.
 */
  ID: string;
/**
 * The data items name.
 */
  Name: string;
/**
 * The data items value.
 */
  Value: string;
  /**
   * parses a string into a AamvaDataItem.  
   * @returns a new AamvaDataItem; or undefined if the object could not be parsed.
   */
  static parse(data:string): AamvaDataItem {
    const obj = JSON.parse(data);
    if(obj && isAamvaDataItem(obj)){
      return AamvaDataItem.copy(obj);
    }
    throw Error("Cannot parse AamvaDataItem from " + data);
  } // END parse

  /**
   * Returns a copy of AamvaDataItem or undefined if the original object is not copyable.
   */
  static copy(obj: AamvaDataItemLike): AamvaDataItem {
    if(isAamvaDataItem(obj)){
      let copy = new AamvaDataItem();
      copy = Object.assign(copy, obj);
      return copy;
    }
    throw Error("Cannot copy AamvaDataItem from Object.");
  } // END copy
} // END AamvaDataItem
