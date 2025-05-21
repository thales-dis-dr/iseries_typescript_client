/*
 * DO NOT EDIT.  Generated Message from WebApi.mDLDrivingPrivileges.json
 * Copyright © Thales, 2023
 */

import { MDLVehicleCategory , type MDLVehicleCategoryLike, isMDLVehicleCategory} from './mDLVehicleCategory.mts';

export function isMDLDrivingPrivileges(obj: any): obj is MDLDrivingPrivilegesLike {
  return  obj && // not null AND
    (( obj instanceof MDLDrivingPrivileges) || // instance of MDLDrivingPrivileges OR
    ( typeof obj === 'object' && "Category" in obj && "CodeCount" in obj && "Codes" in obj && "DateOfExpiry" in obj && "DateOfIssue" in obj &&     true) // its an object with all the right properties
    );
}
/**
 */
export interface MDLDrivingPrivilegesLike {
/**
 * Gets the privilege Category.
 */
  Category: string;
/**
 * Gets the number of vehicle category Codes.
 */
  CodeCount: number;
/**
 * Gets the vehicle category Codes.
 */
  Codes: MDLVehicleCategoryLike;
/**
 * Gets the DateOfExpiry.
 */
  DateOfExpiry: string;
/**
 * Gets the DateOfIssue.
 */
  DateOfIssue: string;
  /** Indexer */
  [key: string]: any;
}

/**
 * Contains the mDL Driving Privileges.
 */
export class MDLDrivingPrivileges /*extends MessageData implements MDLDrivingPrivilegesLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.Category = "";
    this.CodeCount = 0;
    this.Codes = new MDLVehicleCategory();
    this.DateOfExpiry = "";
    this.DateOfIssue = "";
  }

/**
 * Gets the privilege Category.
 */
  Category: string;
/**
 * Gets the number of vehicle category Codes.
 */
  CodeCount: number;
/**
 * Gets the vehicle category Codes.
 */
  Codes: MDLVehicleCategory;
/**
 * Gets the DateOfExpiry.
 */
  DateOfExpiry: string;
/**
 * Gets the DateOfIssue.
 */
  DateOfIssue: string;
  /**
   * parses a string into a MDLDrivingPrivileges.  
   * @returns a new MDLDrivingPrivileges; or undefined if the object could not be parsed.
   */
  static parse(data:string): MDLDrivingPrivileges {
    const obj = JSON.parse(data);
    if(obj && isMDLDrivingPrivileges(obj)){
      return MDLDrivingPrivileges.copy(obj);
    }
    throw Error("Cannot parse MDLDrivingPrivileges from " + data);
  } // END parse

  /**
   * Returns a copy of MDLDrivingPrivileges or undefined if the original object is not copyable.
   */
  static copy(obj: MDLDrivingPrivilegesLike): MDLDrivingPrivileges {
    if(isMDLDrivingPrivileges(obj)){
      let copy = new MDLDrivingPrivileges();
      copy = Object.assign(copy, obj);
      if(isMDLVehicleCategory(obj.Codes)){ copy.Codes = MDLVehicleCategory.copy(obj.Codes); } else { throw Error("Missing required property Codes of MDLDrivingPrivileges") }
      return copy;
    }
    throw Error("Cannot copy MDLDrivingPrivileges from Object.");
  } // END copy
} // END MDLDrivingPrivileges
