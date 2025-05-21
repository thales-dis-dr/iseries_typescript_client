/*
 * DO NOT EDIT.  Generated Message from WebApi.aamvaResult.json
 * Copyright © Thales, 2023
 */

import { AamvaDataItem , type AamvaDataItemLike, isAamvaDataItem} from './aamvaDataItem.mts';
import { SimpleDate ,type  SimpleDateLike, isSimpleDate} from './simpleDate.mts';
import { EyeColours } from './EyeColours.mts';
import { HairColours } from './HairColours.mts';
import { SimpleMeasure , type SimpleMeasureLike, isSimpleMeasure} from './simpleMeasure.mts';

export function isAamvaResult(obj: any): obj is AamvaResultLike {
  return  obj && // not null AND
    (( obj instanceof AamvaResult) || // instance of AamvaResult OR
    ( typeof obj === 'object' && "AddressCity" in obj && "AddressCountry" in obj && "AddressPostalCode" in obj && "AddressState" in obj && "AddressStreet" in obj && "DataItems" in obj && "DateOfBirth" in obj && "ExpiryDate" in obj && "EyeColour" in obj && "FileType" in obj && "Forename" in obj && "FullName" in obj && "GivenNames" in obj && "HairColour" in obj && "Height" in obj && "IIN" in obj && "IssueDate" in obj && "IssuerName" in obj && "JurisdicationVersion" in obj && "LicenceNumber" in obj && "MiddleName" in obj && "NameSuffix" in obj && "Sex" in obj && "ShortSex" in obj && "Surname" in obj && "Version" in obj && "Weight" in obj &&     true) // its an object with all the right properties
    );
}
/**
 */
export interface AamvaResultLike {
/**
 * Gets the individuals city.
 */
  AddressCity: string;
/**
 * Gets the individuals country.
 */
  AddressCountry: string;
/**
 * Gets the individuals postal code.
 */
  AddressPostalCode: string;
/**
 * Gets the individuals state.
 */
  AddressState: string;
/**
 * Gets the individuals street.
 */
  AddressStreet: string;
/**
 * A collection of the AAMVA data items
 */
  DataItems: AamvaDataItemLike[];
/**
 * Gets the individuals date of birth.
 */
  DateOfBirth: SimpleDateLike;
/**
 * Gets the expiration date of the AAMVA.
 */
  ExpiryDate: SimpleDateLike;
/**
 * Gets the individuals eye color.
 */
  EyeColour: EyeColours;
/**
 * Gets the file type.
 */
  FileType: string;
/**
 * Gets the individuals first name/Forname.
 */
  Forename: string;
/**
 * Gets the individuals full name.
 */
  FullName: string;
/**
 * Gets a set of the individuals given names.
 */
  GivenNames: string;
/**
 * Gets the individuals hair color.
 */
  HairColour: HairColours;
/**
 * Gets the individuals height measurment.
 */
  Height: SimpleMeasureLike;
/**
 * Gets the records IIN
 */
  IIN: string;
/**
 * Gets the issue date of the AAMVA document.
 */
  IssueDate: SimpleDateLike;
/**
 * Gets the issue's name.
 */
  IssuerName: string;
/**
 * The Version number. Reserved for the issuing jurisdiction.
 */
  JurisdicationVersion: number;
/**
 * Gets the individuals licence number.
 */
  LicenceNumber: string;
/**
 * Gets the individuals middle name.
 */
  MiddleName: string;
/**
 * Gets the individuals name suffix.
 */
  NameSuffix: string;
/**
 * Gets the individuals gender
 */
  Sex: string;
/**
 * Gets the individuals gender as a single character (ie. M or F)
 */
  ShortSex: string;
/**
 * Gets the indigiduals Surname.
 */
  Surname: string;
/**
 * The AAMVA version number.
 */
  Version: number;
/**
 * Gets the individuals weight measurment.
 */
  Weight: SimpleMeasureLike;
  /** Indexer */
  [key: string]: any;
}

/**
 * Structure of the results of parsing AAMVA data
 */
export class AamvaResult /*extends CaptureResult implements AamvaResultLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.AddressCity = "";
    this.AddressCountry = "";
    this.AddressPostalCode = "";
    this.AddressState = "";
    this.AddressStreet = "";
    this.DataItems = [];
    this.DateOfBirth = new SimpleDate();
    this.ExpiryDate = new SimpleDate();
    this.EyeColour = EyeColours.UNKNOWN; 
    this.FileType = "";
    this.Forename = "";
    this.FullName = "";
    this.GivenNames = "";
    this.HairColour = HairColours.UNKNOWN; 
    this.Height = new SimpleMeasure();
    this.IIN = "";
    this.IssueDate = new SimpleDate();
    this.IssuerName = "";
    this.JurisdicationVersion = 0;
    this.LicenceNumber = "";
    this.MiddleName = "";
    this.NameSuffix = "";
    this.Sex = "";
    this.ShortSex = "";
    this.Surname = "";
    this.Version = 0;
    this.Weight = new SimpleMeasure();
  }

/**
 * Gets the individuals city.
 */
  AddressCity: string;
/**
 * Gets the individuals country.
 */
  AddressCountry: string;
/**
 * Gets the individuals postal code.
 */
  AddressPostalCode: string;
/**
 * Gets the individuals state.
 */
  AddressState: string;
/**
 * Gets the individuals street.
 */
  AddressStreet: string;
/**
 * A collection of the AAMVA data items
 */
  DataItems: AamvaDataItem[];
/**
 * Gets the individuals date of birth.
 */
  DateOfBirth: SimpleDate;
/**
 * Gets the expiration date of the AAMVA.
 */
  ExpiryDate: SimpleDate;
/**
 * Gets the individuals eye color.
 */
  EyeColour: EyeColours;
/**
 * Gets the file type.
 */
  FileType: string;
/**
 * Gets the individuals first name/Forname.
 */
  Forename: string;
/**
 * Gets the individuals full name.
 */
  FullName: string;
/**
 * Gets a set of the individuals given names.
 */
  GivenNames: string;
/**
 * Gets the individuals hair color.
 */
  HairColour: HairColours;
/**
 * Gets the individuals height measurment.
 */
  Height: SimpleMeasure;
/**
 * Gets the records IIN
 */
  IIN: string;
/**
 * Gets the issue date of the AAMVA document.
 */
  IssueDate: SimpleDate;
/**
 * Gets the issue's name.
 */
  IssuerName: string;
/**
 * The Version number. Reserved for the issuing jurisdiction.
 */
  JurisdicationVersion: number;
/**
 * Gets the individuals licence number.
 */
  LicenceNumber: string;
/**
 * Gets the individuals middle name.
 */
  MiddleName: string;
/**
 * Gets the individuals name suffix.
 */
  NameSuffix: string;
/**
 * Gets the individuals gender
 */
  Sex: string;
/**
 * Gets the individuals gender as a single character (ie. M or F)
 */
  ShortSex: string;
/**
 * Gets the indigiduals Surname.
 */
  Surname: string;
/**
 * The AAMVA version number.
 */
  Version: number;
/**
 * Gets the individuals weight measurment.
 */
  Weight: SimpleMeasure;
  /**
   * parses a string into a AamvaResult.  
   * @returns a new AamvaResult; or undefined if the object could not be parsed.
   */
  static parse(data:string): AamvaResult {
    const obj = JSON.parse(data);
    if(obj && isAamvaResult(obj)){
      return AamvaResult.copy(obj);
    }
    throw Error("Cannot parse AamvaResult from " + data);
  } // END parse

  /**
   * Returns a copy of AamvaResult or undefined if the original object is not copyable.
   */
  static copy(obj: AamvaResultLike): AamvaResult {
    if(isAamvaResult(obj)){
      let copy = new AamvaResult();
      copy = Object.assign(copy, obj);
      copy.DataItems = new Array<AamvaDataItem>();
      for(const el of obj.DataItems){
        if(isAamvaDataItem(el)){
          copy.DataItems.push(AamvaDataItem.copy(el));
        } else { throw Error("Missing required property DataItems of AamvaResult") }
      }
      if(isSimpleDate(obj.DateOfBirth)){ copy.DateOfBirth = SimpleDate.copy(obj.DateOfBirth); } else { throw Error("Missing required property DateOfBirth of AamvaResult") }
      if(isSimpleDate(obj.ExpiryDate)){ copy.ExpiryDate = SimpleDate.copy(obj.ExpiryDate); } else { throw Error("Missing required property ExpiryDate of AamvaResult") }
      if(isSimpleMeasure(obj.Height)){ copy.Height = SimpleMeasure.copy(obj.Height); } else { throw Error("Missing required property Height of AamvaResult") }
      if(isSimpleDate(obj.IssueDate)){ copy.IssueDate = SimpleDate.copy(obj.IssueDate); } else { throw Error("Missing required property IssueDate of AamvaResult") }
      if(isSimpleMeasure(obj.Weight)){ copy.Weight = SimpleMeasure.copy(obj.Weight); } else { throw Error("Missing required property Weight of AamvaResult") }
      return copy;
    }
    throw Error("Cannot copy AamvaResult from Object.");
  } // END copy
} // END AamvaResult
