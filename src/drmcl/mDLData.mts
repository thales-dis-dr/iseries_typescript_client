/*
 * DO NOT EDIT.  Generated Message from WebApi.mDLData.json
 * Copyright © Thales, 2023
 */

import { RequestAgeOverNNResult } from './RequestAgeOverNNResult.mts';
import { MDLDrivingPrivileges , type MDLDrivingPrivilegesLike, isMDLDrivingPrivileges} from './mDLDrivingPrivileges.mts';

export function isMDLData(obj: any): obj is MDLDataLike {
  return  obj && // not null AND
    (( obj instanceof MDLData) || // instance of MDLData OR
    ( typeof obj === 'object' && "AdminNumber" in obj && "AgeBirthYear" in obj && "AgeInYears" in obj && "AgeOverNNValue1Result" in obj && "AgeOverNNValue2Result" in obj && "BiometricTemplateXX" in obj && "BirthDate" in obj && "BirthPlace" in obj && "DocumentNumber" in obj && "DrivingPrivileges" in obj && "DrivingPrivilegesCount" in obj && "ExpiryDate" in obj && "EyeColor" in obj && "FamilyName" in obj && "FamilyNameNationalCharacter" in obj && "GivenName" in obj && "GivenNameNationalCharacter" in obj && "HairColor" in obj && "Height" in obj && "IssueDate" in obj && "IssuingAuthority" in obj && "IssuingCountry" in obj && "IssuingJurisdiction" in obj && "Nationality" in obj && "Photo" in obj && "PhotoCaptureDate" in obj && "ResidentAddress" in obj && "ResidentCity" in obj && "ResidentCountry" in obj && "ResidentPostalCode" in obj && "ResidentState" in obj && "Sex" in obj && "SignatureUsualMark" in obj && "UnDistinguishedSign" in obj && "Weight" in obj &&     true) // its an object with all the right properties
    );
}
/**
 */
export interface MDLDataLike {
/**
 * Gets the AdminNumber.
 */
  AdminNumber: string;
/**
 * Gets the AgeBirthYear.
 */
  AgeBirthYear: number;
/**
 * Gets the AgeInYears.
 */
  AgeInYears: number;
/**
 * Gets the AgeOverNNValue1Result.
 */
  AgeOverNNValue1Result: RequestAgeOverNNResult;
/**
 * Gets the AgeOverNNValue2Result.
 */
  AgeOverNNValue2Result: RequestAgeOverNNResult;
/**
 * Gets the BiometricTemplateXX (base64 encoded.)
 */
  BiometricTemplateXX: string;
/**
 * Gets the BirthDate.
 */
  BirthDate: string;
/**
 * Gets the BirthPlace.
 */
  BirthPlace: string;
/**
 * Gets the DocumentNumber.
 */
  DocumentNumber: string;
/**
 * A list of Driving Privileges.
 */
  DrivingPrivileges: MDLDrivingPrivilegesLike[];
/**
 * Gets the number of Driving Privileges.
 */
  DrivingPrivilegesCount: number;
/**
 * Gets the ExpiryDate.
 */
  ExpiryDate: string;
/**
 * Gets the EyeColor.
 */
  EyeColor: string;
/**
 * Gets the FamilyName.
 */
  FamilyName: string;
/**
 * Gets the FamilyNameNationalCharacter.
 */
  FamilyNameNationalCharacter: string;
/**
 * Gets the GivenName.
 */
  GivenName: string;
/**
 * Gets the GivenNameNationalCharacter.
 */
  GivenNameNationalCharacter: string;
/**
 * Gets the HairColor.
 */
  HairColor: string;
/**
 * Gets the Height.
 */
  Height: number;
/**
 * Gets the IssueDate.
 */
  IssueDate: string;
/**
 * Gets the IssuingAuthority.
 */
  IssuingAuthority: string;
/**
 * Gets the IssuingCountry.
 */
  IssuingCountry: string;
/**
 * Gets the IssuingJurisdiction.
 */
  IssuingJurisdiction: string;
/**
 * Gets the Nationality.
 */
  Nationality: string;
/**
 * Gets the Photo (base64 encoded.)
 */
  Photo: string;
/**
 * Gets the PhotoCaptureDate.
 */
  PhotoCaptureDate: string;
/**
 * Gets the ResidentAddress.
 */
  ResidentAddress: string;
/**
 * Gets the ResidentCity.
 */
  ResidentCity: string;
/**
 * Gets the ResidentCountry.
 */
  ResidentCountry: string;
/**
 * Gets the ResidentPostalCode.
 */
  ResidentPostalCode: string;
/**
 * Gets the ResidentState.
 */
  ResidentState: string;
/**
 * Gets the Sex.
 */
  Sex: number;
/**
 * Gets the SignatureUsualMark (base64 encoded.)
 */
  SignatureUsualMark: string;
/**
 * Gets the UnDistinguishedSign.
 */
  UnDistinguishedSign: string;
/**
 * Gets the Weight.
 */
  Weight: number;
  /** Indexer */
  [key: string]: any;
}

/**
 * Contains all the fields parsed from the mDL document type.
 */
export class MDLData /*extends MessageData implements MDLDataLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.AdminNumber = "";
    this.AgeBirthYear = 0;
    this.AgeInYears = 0;
    this.AgeOverNNValue1Result = RequestAgeOverNNResult.NOTREQUESTED; 
    this.AgeOverNNValue2Result = RequestAgeOverNNResult.NOTREQUESTED; 
    this.BiometricTemplateXX = "";
    this.BirthDate = "";
    this.BirthPlace = "";
    this.DocumentNumber = "";
    this.DrivingPrivileges = [];
    this.DrivingPrivilegesCount = 0;
    this.ExpiryDate = "";
    this.EyeColor = "";
    this.FamilyName = "";
    this.FamilyNameNationalCharacter = "";
    this.GivenName = "";
    this.GivenNameNationalCharacter = "";
    this.HairColor = "";
    this.Height = 0;
    this.IssueDate = "";
    this.IssuingAuthority = "";
    this.IssuingCountry = "";
    this.IssuingJurisdiction = "";
    this.Nationality = "";
    this.Photo = "";
    this.PhotoCaptureDate = "";
    this.ResidentAddress = "";
    this.ResidentCity = "";
    this.ResidentCountry = "";
    this.ResidentPostalCode = "";
    this.ResidentState = "";
    this.Sex = 0;
    this.SignatureUsualMark = "";
    this.UnDistinguishedSign = "";
    this.Weight = 0;
  }

/**
 * Gets the AdminNumber.
 */
  AdminNumber: string;
/**
 * Gets the AgeBirthYear.
 */
  AgeBirthYear: number;
/**
 * Gets the AgeInYears.
 */
  AgeInYears: number;
/**
 * Gets the AgeOverNNValue1Result.
 */
  AgeOverNNValue1Result: RequestAgeOverNNResult;
/**
 * Gets the AgeOverNNValue2Result.
 */
  AgeOverNNValue2Result: RequestAgeOverNNResult;
/**
 * Gets the BiometricTemplateXX (base64 encoded.)
 */
  BiometricTemplateXX: string;
/**
 * Gets the BirthDate.
 */
  BirthDate: string;
/**
 * Gets the BirthPlace.
 */
  BirthPlace: string;
/**
 * Gets the DocumentNumber.
 */
  DocumentNumber: string;
/**
 * A list of Driving Privileges.
 */
  DrivingPrivileges: MDLDrivingPrivileges[];
/**
 * Gets the number of Driving Privileges.
 */
  DrivingPrivilegesCount: number;
/**
 * Gets the ExpiryDate.
 */
  ExpiryDate: string;
/**
 * Gets the EyeColor.
 */
  EyeColor: string;
/**
 * Gets the FamilyName.
 */
  FamilyName: string;
/**
 * Gets the FamilyNameNationalCharacter.
 */
  FamilyNameNationalCharacter: string;
/**
 * Gets the GivenName.
 */
  GivenName: string;
/**
 * Gets the GivenNameNationalCharacter.
 */
  GivenNameNationalCharacter: string;
/**
 * Gets the HairColor.
 */
  HairColor: string;
/**
 * Gets the Height.
 */
  Height: number;
/**
 * Gets the IssueDate.
 */
  IssueDate: string;
/**
 * Gets the IssuingAuthority.
 */
  IssuingAuthority: string;
/**
 * Gets the IssuingCountry.
 */
  IssuingCountry: string;
/**
 * Gets the IssuingJurisdiction.
 */
  IssuingJurisdiction: string;
/**
 * Gets the Nationality.
 */
  Nationality: string;
/**
 * Gets the Photo (base64 encoded.)
 */
  Photo: string;
/**
 * Gets the PhotoCaptureDate.
 */
  PhotoCaptureDate: string;
/**
 * Gets the ResidentAddress.
 */
  ResidentAddress: string;
/**
 * Gets the ResidentCity.
 */
  ResidentCity: string;
/**
 * Gets the ResidentCountry.
 */
  ResidentCountry: string;
/**
 * Gets the ResidentPostalCode.
 */
  ResidentPostalCode: string;
/**
 * Gets the ResidentState.
 */
  ResidentState: string;
/**
 * Gets the Sex.
 */
  Sex: number;
/**
 * Gets the SignatureUsualMark (base64 encoded.)
 */
  SignatureUsualMark: string;
/**
 * Gets the UnDistinguishedSign.
 */
  UnDistinguishedSign: string;
/**
 * Gets the Weight.
 */
  Weight: number;
  /**
   * parses a string into a MDLData.  
   * @returns a new MDLData; or undefined if the object could not be parsed.
   */
  static parse(data:string): MDLData {
    const obj = JSON.parse(data);
    if(obj && isMDLData(obj)){
      return MDLData.copy(obj);
    }
    throw Error("Cannot parse MDLData from " + data);
  } // END parse

  /**
   * Returns a copy of MDLData or undefined if the original object is not copyable.
   */
  static copy(obj: MDLDataLike): MDLData {
    if(isMDLData(obj)){
      let copy = new MDLData();
      copy = Object.assign(copy, obj);
      copy.DrivingPrivileges = new Array<MDLDrivingPrivileges>();
      for(const el of obj.DrivingPrivileges){
        if(isMDLDrivingPrivileges(el)){
          copy.DrivingPrivileges.push(MDLDrivingPrivileges.copy(el));
        } else { throw Error("Missing required property DrivingPrivileges of MDLData") }
      }
      return copy;
    }
    throw Error("Cannot copy MDLData from Object.");
  } // END copy
} // END MDLData
