/*
 * DO NOT EDIT.  Generated Message from WebApi.mDLVehicleCategory.json
 * Copyright © Thales, 2023
 */

export function isMDLVehicleCategory(obj: any): obj is MDLVehicleCategoryLike {
  return  obj && // not null AND
    (( obj instanceof MDLVehicleCategory) || // instance of MDLVehicleCategory OR
    ( typeof obj === 'object' && "Code" in obj && "Sign" in obj && "Value" in obj &&     true) // its an object with all the right properties
    );
}
/**
 */
export interface MDLVehicleCategoryLike {
/**
 * Gets the Code.
 */
  Code: string;
/**
 * Gets the Sign.
 */
  Sign: string;
/**
 * Gets the Value.
 */
  Value: string;
  /** Indexer */
  [key: string]: any;
}

/**
 * Contains the mDL Vehicle Category.
 */
export class MDLVehicleCategory /*extends MessageData implements MDLVehicleCategoryLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.Code = "";
    this.Sign = "";
    this.Value = "";
  }

/**
 * Gets the Code.
 */
  Code: string;
/**
 * Gets the Sign.
 */
  Sign: string;
/**
 * Gets the Value.
 */
  Value: string;
  /**
   * parses a string into a MDLVehicleCategory.  
   * @returns a new MDLVehicleCategory; or undefined if the object could not be parsed.
   */
  static parse(data:string): MDLVehicleCategory {
    const obj = JSON.parse(data);
    if(obj && isMDLVehicleCategory(obj)){
      return MDLVehicleCategory.copy(obj);
    }
    throw Error("Cannot parse MDLVehicleCategory from " + data);
  } // END parse

  /**
   * Returns a copy of MDLVehicleCategory or undefined if the original object is not copyable.
   */
  static copy(obj: MDLVehicleCategoryLike): MDLVehicleCategory {
    if(isMDLVehicleCategory(obj)){
      let copy = new MDLVehicleCategory();
      copy = Object.assign(copy, obj);
      return copy;
    }
    throw Error("Cannot copy MDLVehicleCategory from Object.");
  } // END copy
} // END MDLVehicleCategory
