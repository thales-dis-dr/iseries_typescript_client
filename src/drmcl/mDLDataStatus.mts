/*
 * DO NOT EDIT.  Generated Message from WebApi.mDLDataStatus.json
 * Copyright © Thales, 2023
 */

import { ElementStatus } from './ElementStatus.mts';


export function isMDLDataStatus(obj: any): obj is MDLDataStatusLike {
  return  obj && // not null AND
    (( obj instanceof MDLDataStatus) || // instance of MDLDataStatus OR
    ( typeof obj === 'object' && "AdminNumberErrorCode" in obj && "AdminNumberStatus" in obj && "AgeBirthYearErrorCode" in obj && "AgeBirthYearStatus" in obj && "AgeInYearsErrorCode" in obj && "AgeInYearsStatus" in obj && "AgeOverNNValue1ResultErrorCode" in obj && "AgeOverNNValue1ResultStatus" in obj && "AgeOverNNValue2ResultErrorCode" in obj && "AgeOverNNValue2ResultStatus" in obj && "BiometricTemplateXXErrorCode" in obj && "BiometricTemplateXXStatus" in obj && "BirthDateErrorCode" in obj && "BirthDateStatus" in obj && "BirthPlaceErrorCode" in obj && "BirthPlaceStatus" in obj && "DocumentNumberErrorCode" in obj && "DocumentNumberStatus" in obj && "DrivingPrivilegesErrorCode" in obj && "DrivingPrivilegesStatus" in obj && "ExpiryDateErrorCode" in obj && "ExpiryDateStatus" in obj && "EyeColorErrorCode" in obj && "EyeColorStatus" in obj && "FamilyNameErrorCode" in obj && "FamilyNameNationalCharacterErrorCode" in obj && "FamilyNameNationalCharacterStatus" in obj && "FamilyNameStatus" in obj && "GivenNameErrorCode" in obj && "GivenNameNationalCharacterErrorCode" in obj && "GivenNameNationalCharacterStatus" in obj && "GivenNameStatus" in obj && "HairColorErrorCode" in obj && "HairColorStatus" in obj && "HeightErrorCode" in obj && "HeightStatus" in obj && "IssueDateErrorCode" in obj && "IssueDateStatus" in obj && "IssuingAuthorityErrorCode" in obj && "IssuingAuthorityStatus" in obj && "IssuingCountryErrorCode" in obj && "IssuingCountryStatus" in obj && "IssuingJurisdictionErrorCode" in obj && "IssuingJurisdictionStatus" in obj && "NationalityErrorCode" in obj && "NationalityStatus" in obj && "PhotoCaptureDateErrorCode" in obj && "PhotoCaptureDateStatus" in obj && "PhotoErrorCode" in obj && "PhotoStatus" in obj && "ResidentAddressErrorCode" in obj && "ResidentAddressStatus" in obj && "ResidentCityErrorCode" in obj && "ResidentCityStatus" in obj && "ResidentCountryErrorCode" in obj && "ResidentCountryStatus" in obj && "ResidentPostalCodeErrorCode" in obj && "ResidentPostalCodeStatus" in obj && "ResidentStateErrorCode" in obj && "ResidentStateStatus" in obj && "SexErrorCode" in obj && "SexStatus" in obj && "SignatureUsualMarkErrorCode" in obj && "SignatureUsualMarkStatus" in obj && "UnDistinguishedSignErrorCode" in obj && "UnDistinguishedSignStatus" in obj && "WeightErrorCode" in obj && "WeightStatus" in obj &&     true) // its an object with all the right properties
    );
}
/**
 */
export interface MDLDataStatusLike {
/**
 * Gets the AdminNumber error code
 */
  AdminNumberErrorCode: number;
/**
 * Gets the AdminNumber status.
 */
  AdminNumberStatus: ElementStatus;
/**
 * Gets the AgeBirthYear error code
 */
  AgeBirthYearErrorCode: number;
/**
 * Gets the AgeBirthYear status.
 */
  AgeBirthYearStatus: ElementStatus;
/**
 * Gets the AgeInYears error code
 */
  AgeInYearsErrorCode: number;
/**
 * Gets the AgeInYears status.
 */
  AgeInYearsStatus: ElementStatus;
/**
 * Gets the AgeOverNNValue1Result error code
 */
  AgeOverNNValue1ResultErrorCode: number;
/**
 * Gets the AgeOverNNValue1Result status.
 */
  AgeOverNNValue1ResultStatus: ElementStatus;
/**
 * Gets the AgeOverNNValue2Result error code
 */
  AgeOverNNValue2ResultErrorCode: number;
/**
 * Gets the AgeOverNNValue2Result status.
 */
  AgeOverNNValue2ResultStatus: ElementStatus;
/**
 * Gets the BiometricTemplateXX error code
 */
  BiometricTemplateXXErrorCode: number;
/**
 * Gets the BiometricTemplateXX status.
 */
  BiometricTemplateXXStatus: ElementStatus;
/**
 * Gets the BirthDate error code
 */
  BirthDateErrorCode: number;
/**
 * Gets the BirthDate status.
 */
  BirthDateStatus: ElementStatus;
/**
 * Gets the BirthPlace error code
 */
  BirthPlaceErrorCode: number;
/**
 * Gets the BirthPlace status.
 */
  BirthPlaceStatus: ElementStatus;
/**
 * Gets the DocumentNumber error code
 */
  DocumentNumberErrorCode: number;
/**
 * Gets the DocumentNumber status.
 */
  DocumentNumberStatus: ElementStatus;
/**
 * Gets the DrivingPrivileges error code
 */
  DrivingPrivilegesErrorCode: number;
/**
 * Gets the DrivingPrivileges status.
 */
  DrivingPrivilegesStatus: ElementStatus;
/**
 * Gets the ExpiryDate error code
 */
  ExpiryDateErrorCode: number;
/**
 * Gets the ExpiryDate status.
 */
  ExpiryDateStatus: ElementStatus;
/**
 * Gets the EyeColor error code
 */
  EyeColorErrorCode: number;
/**
 * Gets the EyeColor status.
 */
  EyeColorStatus: ElementStatus;
/**
 * Gets the FamilyName error code
 */
  FamilyNameErrorCode: number;
/**
 * Gets the FamilyNameNationalCharacter error code
 */
  FamilyNameNationalCharacterErrorCode: number;
/**
 * Gets the FamilyNameNationalCharacter status.
 */
  FamilyNameNationalCharacterStatus: ElementStatus;
/**
 * Gets the FamilyName status.
 */
  FamilyNameStatus: ElementStatus;
/**
 * Gets the GivenName error code
 */
  GivenNameErrorCode: number;
/**
 * Gets the GivenNameNationalCharacter error code
 */
  GivenNameNationalCharacterErrorCode: number;
/**
 * Gets the GivenNameNationalCharacter status.
 */
  GivenNameNationalCharacterStatus: ElementStatus;
/**
 * Gets the GivenName status.
 */
  GivenNameStatus: ElementStatus;
/**
 * Gets the HairColor error code
 */
  HairColorErrorCode: number;
/**
 * Gets the HairColor status.
 */
  HairColorStatus: ElementStatus;
/**
 * Gets the Height error code
 */
  HeightErrorCode: number;
/**
 * Gets the Height status.
 */
  HeightStatus: ElementStatus;
/**
 * Gets the IssueDate error code
 */
  IssueDateErrorCode: number;
/**
 * Gets the IssueDate status.
 */
  IssueDateStatus: ElementStatus;
/**
 * Gets the IssuingAuthority error code
 */
  IssuingAuthorityErrorCode: number;
/**
 * Gets the IssuingAuthority status.
 */
  IssuingAuthorityStatus: ElementStatus;
/**
 * Gets the IssuingCountry error code
 */
  IssuingCountryErrorCode: number;
/**
 * Gets the IssuingCountry status.
 */
  IssuingCountryStatus: ElementStatus;
/**
 * Gets the IssuingJurisdiction error code
 */
  IssuingJurisdictionErrorCode: number;
/**
 * Gets the IssuingJurisdiction status.
 */
  IssuingJurisdictionStatus: ElementStatus;
/**
 * Gets the Nationality error code
 */
  NationalityErrorCode: number;
/**
 * Gets the Nationality status.
 */
  NationalityStatus: ElementStatus;
/**
 * Gets the PhotoCaptureDate error code
 */
  PhotoCaptureDateErrorCode: number;
/**
 * Gets the PhotoCaptureDate status.
 */
  PhotoCaptureDateStatus: ElementStatus;
/**
 * Gets the Photo error code
 */
  PhotoErrorCode: number;
/**
 * Gets the Photo status.
 */
  PhotoStatus: ElementStatus;
/**
 * Gets the ResidentAddress error code
 */
  ResidentAddressErrorCode: number;
/**
 * Gets the ResidentAddress status.
 */
  ResidentAddressStatus: ElementStatus;
/**
 * Gets the ResidentCity error code
 */
  ResidentCityErrorCode: number;
/**
 * Gets the ResidentCity status.
 */
  ResidentCityStatus: ElementStatus;
/**
 * Gets the ResidentCountry error code
 */
  ResidentCountryErrorCode: number;
/**
 * Gets the ResidentCountry status.
 */
  ResidentCountryStatus: ElementStatus;
/**
 * Gets the ResidentPostalCode error code
 */
  ResidentPostalCodeErrorCode: number;
/**
 * Gets the ResidentPostalCode status.
 */
  ResidentPostalCodeStatus: ElementStatus;
/**
 * Gets the ResidentState error code
 */
  ResidentStateErrorCode: number;
/**
 * Gets the ResidentState status.
 */
  ResidentStateStatus: ElementStatus;
/**
 * Gets the Sex error code
 */
  SexErrorCode: number;
/**
 * Gets the Sex status.
 */
  SexStatus: ElementStatus;
/**
 * Gets the SignatureUsualMark error code
 */
  SignatureUsualMarkErrorCode: number;
/**
 * Gets the SignatureUsualMark status.
 */
  SignatureUsualMarkStatus: ElementStatus;
/**
 * Gets the UnDistinguishedSign error code
 */
  UnDistinguishedSignErrorCode: number;
/**
 * Gets the UnDistinguishedSign status.
 */
  UnDistinguishedSignStatus: ElementStatus;
/**
 * Gets the Weight error code
 */
  WeightErrorCode: number;
/**
 * Gets the Weight status.
 */
  WeightStatus: ElementStatus;
  /** Indexer */
  [key: string]: any;
}

/**
 * Contains all the fields parsed from the mDL element statuses.
 */
export class MDLDataStatus /*extends MessageData implements MDLDataStatusLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.AdminNumberErrorCode = 0;
    this.AdminNumberStatus = ElementStatus.NOTREQUESTED; 
    this.AgeBirthYearErrorCode = 0;
    this.AgeBirthYearStatus = ElementStatus.NOTREQUESTED; 
    this.AgeInYearsErrorCode = 0;
    this.AgeInYearsStatus = ElementStatus.NOTREQUESTED; 
    this.AgeOverNNValue1ResultErrorCode = 0;
    this.AgeOverNNValue1ResultStatus = ElementStatus.NOTREQUESTED; 
    this.AgeOverNNValue2ResultErrorCode = 0;
    this.AgeOverNNValue2ResultStatus = ElementStatus.NOTREQUESTED; 
    this.BiometricTemplateXXErrorCode = 0;
    this.BiometricTemplateXXStatus = ElementStatus.NOTREQUESTED; 
    this.BirthDateErrorCode = 0;
    this.BirthDateStatus = ElementStatus.NOTREQUESTED; 
    this.BirthPlaceErrorCode = 0;
    this.BirthPlaceStatus = ElementStatus.NOTREQUESTED; 
    this.DocumentNumberErrorCode = 0;
    this.DocumentNumberStatus = ElementStatus.NOTREQUESTED; 
    this.DrivingPrivilegesErrorCode = 0;
    this.DrivingPrivilegesStatus = ElementStatus.NOTREQUESTED; 
    this.ExpiryDateErrorCode = 0;
    this.ExpiryDateStatus = ElementStatus.NOTREQUESTED; 
    this.EyeColorErrorCode = 0;
    this.EyeColorStatus = ElementStatus.NOTREQUESTED; 
    this.FamilyNameErrorCode = 0;
    this.FamilyNameNationalCharacterErrorCode = 0;
    this.FamilyNameNationalCharacterStatus = ElementStatus.NOTREQUESTED; 
    this.FamilyNameStatus = ElementStatus.NOTREQUESTED; 
    this.GivenNameErrorCode = 0;
    this.GivenNameNationalCharacterErrorCode = 0;
    this.GivenNameNationalCharacterStatus = ElementStatus.NOTREQUESTED; 
    this.GivenNameStatus = ElementStatus.NOTREQUESTED; 
    this.HairColorErrorCode = 0;
    this.HairColorStatus = ElementStatus.NOTREQUESTED; 
    this.HeightErrorCode = 0;
    this.HeightStatus = ElementStatus.NOTREQUESTED; 
    this.IssueDateErrorCode = 0;
    this.IssueDateStatus = ElementStatus.NOTREQUESTED; 
    this.IssuingAuthorityErrorCode = 0;
    this.IssuingAuthorityStatus = ElementStatus.NOTREQUESTED; 
    this.IssuingCountryErrorCode = 0;
    this.IssuingCountryStatus = ElementStatus.NOTREQUESTED; 
    this.IssuingJurisdictionErrorCode = 0;
    this.IssuingJurisdictionStatus = ElementStatus.NOTREQUESTED; 
    this.NationalityErrorCode = 0;
    this.NationalityStatus = ElementStatus.NOTREQUESTED; 
    this.PhotoCaptureDateErrorCode = 0;
    this.PhotoCaptureDateStatus = ElementStatus.NOTREQUESTED; 
    this.PhotoErrorCode = 0;
    this.PhotoStatus = ElementStatus.NOTREQUESTED; 
    this.ResidentAddressErrorCode = 0;
    this.ResidentAddressStatus = ElementStatus.NOTREQUESTED; 
    this.ResidentCityErrorCode = 0;
    this.ResidentCityStatus = ElementStatus.NOTREQUESTED; 
    this.ResidentCountryErrorCode = 0;
    this.ResidentCountryStatus = ElementStatus.NOTREQUESTED; 
    this.ResidentPostalCodeErrorCode = 0;
    this.ResidentPostalCodeStatus = ElementStatus.NOTREQUESTED; 
    this.ResidentStateErrorCode = 0;
    this.ResidentStateStatus = ElementStatus.NOTREQUESTED; 
    this.SexErrorCode = 0;
    this.SexStatus = ElementStatus.NOTREQUESTED; 
    this.SignatureUsualMarkErrorCode = 0;
    this.SignatureUsualMarkStatus = ElementStatus.NOTREQUESTED; 
    this.UnDistinguishedSignErrorCode = 0;
    this.UnDistinguishedSignStatus = ElementStatus.NOTREQUESTED; 
    this.WeightErrorCode = 0;
    this.WeightStatus = ElementStatus.NOTREQUESTED; 
  }

/**
 * Gets the AdminNumber error code
 */
  AdminNumberErrorCode: number;
/**
 * Gets the AdminNumber status.
 */
  AdminNumberStatus: ElementStatus;
/**
 * Gets the AgeBirthYear error code
 */
  AgeBirthYearErrorCode: number;
/**
 * Gets the AgeBirthYear status.
 */
  AgeBirthYearStatus: ElementStatus;
/**
 * Gets the AgeInYears error code
 */
  AgeInYearsErrorCode: number;
/**
 * Gets the AgeInYears status.
 */
  AgeInYearsStatus: ElementStatus;
/**
 * Gets the AgeOverNNValue1Result error code
 */
  AgeOverNNValue1ResultErrorCode: number;
/**
 * Gets the AgeOverNNValue1Result status.
 */
  AgeOverNNValue1ResultStatus: ElementStatus;
/**
 * Gets the AgeOverNNValue2Result error code
 */
  AgeOverNNValue2ResultErrorCode: number;
/**
 * Gets the AgeOverNNValue2Result status.
 */
  AgeOverNNValue2ResultStatus: ElementStatus;
/**
 * Gets the BiometricTemplateXX error code
 */
  BiometricTemplateXXErrorCode: number;
/**
 * Gets the BiometricTemplateXX status.
 */
  BiometricTemplateXXStatus: ElementStatus;
/**
 * Gets the BirthDate error code
 */
  BirthDateErrorCode: number;
/**
 * Gets the BirthDate status.
 */
  BirthDateStatus: ElementStatus;
/**
 * Gets the BirthPlace error code
 */
  BirthPlaceErrorCode: number;
/**
 * Gets the BirthPlace status.
 */
  BirthPlaceStatus: ElementStatus;
/**
 * Gets the DocumentNumber error code
 */
  DocumentNumberErrorCode: number;
/**
 * Gets the DocumentNumber status.
 */
  DocumentNumberStatus: ElementStatus;
/**
 * Gets the DrivingPrivileges error code
 */
  DrivingPrivilegesErrorCode: number;
/**
 * Gets the DrivingPrivileges status.
 */
  DrivingPrivilegesStatus: ElementStatus;
/**
 * Gets the ExpiryDate error code
 */
  ExpiryDateErrorCode: number;
/**
 * Gets the ExpiryDate status.
 */
  ExpiryDateStatus: ElementStatus;
/**
 * Gets the EyeColor error code
 */
  EyeColorErrorCode: number;
/**
 * Gets the EyeColor status.
 */
  EyeColorStatus: ElementStatus;
/**
 * Gets the FamilyName error code
 */
  FamilyNameErrorCode: number;
/**
 * Gets the FamilyNameNationalCharacter error code
 */
  FamilyNameNationalCharacterErrorCode: number;
/**
 * Gets the FamilyNameNationalCharacter status.
 */
  FamilyNameNationalCharacterStatus: ElementStatus;
/**
 * Gets the FamilyName status.
 */
  FamilyNameStatus: ElementStatus;
/**
 * Gets the GivenName error code
 */
  GivenNameErrorCode: number;
/**
 * Gets the GivenNameNationalCharacter error code
 */
  GivenNameNationalCharacterErrorCode: number;
/**
 * Gets the GivenNameNationalCharacter status.
 */
  GivenNameNationalCharacterStatus: ElementStatus;
/**
 * Gets the GivenName status.
 */
  GivenNameStatus: ElementStatus;
/**
 * Gets the HairColor error code
 */
  HairColorErrorCode: number;
/**
 * Gets the HairColor status.
 */
  HairColorStatus: ElementStatus;
/**
 * Gets the Height error code
 */
  HeightErrorCode: number;
/**
 * Gets the Height status.
 */
  HeightStatus: ElementStatus;
/**
 * Gets the IssueDate error code
 */
  IssueDateErrorCode: number;
/**
 * Gets the IssueDate status.
 */
  IssueDateStatus: ElementStatus;
/**
 * Gets the IssuingAuthority error code
 */
  IssuingAuthorityErrorCode: number;
/**
 * Gets the IssuingAuthority status.
 */
  IssuingAuthorityStatus: ElementStatus;
/**
 * Gets the IssuingCountry error code
 */
  IssuingCountryErrorCode: number;
/**
 * Gets the IssuingCountry status.
 */
  IssuingCountryStatus: ElementStatus;
/**
 * Gets the IssuingJurisdiction error code
 */
  IssuingJurisdictionErrorCode: number;
/**
 * Gets the IssuingJurisdiction status.
 */
  IssuingJurisdictionStatus: ElementStatus;
/**
 * Gets the Nationality error code
 */
  NationalityErrorCode: number;
/**
 * Gets the Nationality status.
 */
  NationalityStatus: ElementStatus;
/**
 * Gets the PhotoCaptureDate error code
 */
  PhotoCaptureDateErrorCode: number;
/**
 * Gets the PhotoCaptureDate status.
 */
  PhotoCaptureDateStatus: ElementStatus;
/**
 * Gets the Photo error code
 */
  PhotoErrorCode: number;
/**
 * Gets the Photo status.
 */
  PhotoStatus: ElementStatus;
/**
 * Gets the ResidentAddress error code
 */
  ResidentAddressErrorCode: number;
/**
 * Gets the ResidentAddress status.
 */
  ResidentAddressStatus: ElementStatus;
/**
 * Gets the ResidentCity error code
 */
  ResidentCityErrorCode: number;
/**
 * Gets the ResidentCity status.
 */
  ResidentCityStatus: ElementStatus;
/**
 * Gets the ResidentCountry error code
 */
  ResidentCountryErrorCode: number;
/**
 * Gets the ResidentCountry status.
 */
  ResidentCountryStatus: ElementStatus;
/**
 * Gets the ResidentPostalCode error code
 */
  ResidentPostalCodeErrorCode: number;
/**
 * Gets the ResidentPostalCode status.
 */
  ResidentPostalCodeStatus: ElementStatus;
/**
 * Gets the ResidentState error code
 */
  ResidentStateErrorCode: number;
/**
 * Gets the ResidentState status.
 */
  ResidentStateStatus: ElementStatus;
/**
 * Gets the Sex error code
 */
  SexErrorCode: number;
/**
 * Gets the Sex status.
 */
  SexStatus: ElementStatus;
/**
 * Gets the SignatureUsualMark error code
 */
  SignatureUsualMarkErrorCode: number;
/**
 * Gets the SignatureUsualMark status.
 */
  SignatureUsualMarkStatus: ElementStatus;
/**
 * Gets the UnDistinguishedSign error code
 */
  UnDistinguishedSignErrorCode: number;
/**
 * Gets the UnDistinguishedSign status.
 */
  UnDistinguishedSignStatus: ElementStatus;
/**
 * Gets the Weight error code
 */
  WeightErrorCode: number;
/**
 * Gets the Weight status.
 */
  WeightStatus: ElementStatus;
  /**
   * parses a string into a MDLDataStatus.  
   * @returns a new MDLDataStatus; or undefined if the object could not be parsed.
   */
  static parse(data:string): MDLDataStatus {
    const obj = JSON.parse(data);
    if(obj && isMDLDataStatus(obj)){
      return MDLDataStatus.copy(obj);
    }
    throw Error("Cannot parse MDLDataStatus from " + data);
  } // END parse

  /**
   * Returns a copy of MDLDataStatus or undefined if the original object is not copyable.
   */
  static copy(obj: MDLDataStatusLike): MDLDataStatus {
    if(isMDLDataStatus(obj)){
      let copy = new MDLDataStatus();
      copy = Object.assign(copy, obj);
      return copy;
    }
    throw Error("Cannot copy MDLDataStatus from Object.");
  } // END copy
} // END MDLDataStatus
