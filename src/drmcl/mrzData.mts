/*
 * DO NOT EDIT.  Generated Message from WebApi.mrzData.json
 * Copyright © Thales, 2023
 */

import { CheckDigitDataItem , CheckDigitDataItemLike, isCheckDigitDataItem} from './checkDigitDataItem.mjs';
import { ReaderCheckDigitResult } from './ReaderCheckDigitResult.mjs';
import { SimpleDate , SimpleDateLike, isSimpleDate} from './simpleDate.mjs';

export function isMrzData(obj: any): obj is MrzDataLike {
  return  obj && // not null AND
    (( obj instanceof MrzData) || // instance of MrzData OR
    ( typeof obj === 'object' && "CheckDigitDataList" in obj && "CodelineValidationResult" in obj && "Data" in obj && "DateOfBirth" in obj && "DocId" in obj && "DocNumber" in obj && "DocType" in obj && "ExpiredDocumentFlag" in obj && "ExpiryDate" in obj && "Forename" in obj && "Forenames" in obj && "ImageSource" in obj && "IssuingState" in obj && "Line1" in obj && "Line2" in obj && "Line3" in obj && "LineCount" in obj && "MrzOnRearSide" in obj && "Nationality" in obj && "OptionalData1" in obj && "OptionalData2" in obj && "SecondName" in obj && "Sex" in obj && "ShortSex" in obj && "Surname" in obj &&     true) // its an object with all the right properties
    );
}
/**
 */
export interface MrzDataLike {
/**
 * A collection of check digit data items
 */
  CheckDigitDataList: CheckDigitDataItemLike[];
/**
 * Gets the result code of codeline validation.  see ReaderCheckDigitResult
 */
  CodelineValidationResult: ReaderCheckDigitResult;
/**
 * Gets the entire MRZ content.
 */
  Data: string;
/**
 * Gets the individuals date of birth.
 * Alias for DOB
 */
  DateOfBirth: SimpleDateLike;
/**
 * Gets the document ID. one of: ["SHORTVISA","LONGVISA","PASSPORT","IDTWOLINE","IDTHREELINE","IDFRANCE","USSPECIAL","IDHONGKONG","RESIDENCECARD","SWISSDL","UNKNOWN"]
 */
  DocId: string;
/**
 * Gets the document number.
 */
  DocNumber: string;
/**
 * Gets the document type identifier. one of:["VISA", "RESIDENCE CARD" "PASSPORT", "IDENTITY CARD", "DRIVING LICENCE", "VEHICLE REGISTRATION", "UNKNOWN DOCUMENT"]
 */
  DocType: string;
/**
 * Gets a flag indicating that the document is expired.
 */
  ExpiredDocumentFlag: boolean;
/**
 * Gets the documents expiration date.
 */
  ExpiryDate: SimpleDateLike;
/**
 * Gets the individuals forename.
 */
  Forename: string;
/**
 * Gets the individuals fornames.
 */
  Forenames: string;
/**
 * Gets the Image source.
 */
  ImageSource: number;
/**
 * Gets the documents issuing state.
 */
  IssuingState: string;
/**
 * Gets the MRZ's 1st line.
 */
  Line1: string;
/**
 * Gets the MRZ's 2nd line.
 */
  Line2: string;
/**
 * Gets the MRZ's 3rd line.
 */
  Line3: string;
/**
 * Gets the number of lines detected in this MRZ.
 */
  LineCount: number;
/**
 * Gets a flag indicating the MRZ was found on the back side of the document.
 */
  MrzOnRearSide: boolean;
/**
 * Gets the individuals nationality.
 */
  Nationality: string;
/**
 * Gets the first optional dat field value.
 */
  OptionalData1: string;
/**
 * Gets the second optional data field value.
 */
  OptionalData2: string;
/**
 * Gets the individuals second name.
 */
  SecondName: string;
/**
 * Gets a long description of the individuals gender. One of ["Male","Female","Unknown"]
 */
  Sex: string;
/**
 * Gets the short description of the individuals gender. One of ["M", "F", "U"]
 */
  ShortSex: string;
/**
 * Gets the individuals surname.
 */
  Surname: string;
  /** Indexer */
  [key: string]: any;
}

/**
 * Contains all the MRZ feilds parsed from the codeline.
 * Alias for mrzData
 */
export class MrzData /*extends MessageData implements MrzDataLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.CheckDigitDataList = [];
    this.CodelineValidationResult = ReaderCheckDigitResult.CDR_INVALID; 
    this.Data = "";
    this.DateOfBirth = new SimpleDate();
    this.DocId = "";
    this.DocNumber = "";
    this.DocType = "";
    this.ExpiredDocumentFlag = true;
    this.ExpiryDate = new SimpleDate();
    this.Forename = "";
    this.Forenames = "";
    this.ImageSource = 0;
    this.IssuingState = "";
    this.Line1 = "";
    this.Line2 = "";
    this.Line3 = "";
    this.LineCount = 0;
    this.MrzOnRearSide = true;
    this.Nationality = "";
    this.OptionalData1 = "";
    this.OptionalData2 = "";
    this.SecondName = "";
    this.Sex = "";
    this.ShortSex = "";
    this.Surname = "";
  }

/**
 * A collection of check digit data items
 */
  CheckDigitDataList: CheckDigitDataItem[];
/**
 * Gets the result code of codeline validation.  see ReaderCheckDigitResult
 */
  CodelineValidationResult: ReaderCheckDigitResult;
/**
 * Gets the entire MRZ content.
 */
  Data: string;
/**
 * Gets the individuals date of birth.
 * Alias for DOB
 */
  DateOfBirth: SimpleDate;
  get DOB(): SimpleDate { return this.DateOfBirth; }
  set DOB(value: SimpleDate) { this.DateOfBirth = value; }
/**
 * Gets the document ID. one of: ["SHORTVISA","LONGVISA","PASSPORT","IDTWOLINE","IDTHREELINE","IDFRANCE","USSPECIAL","IDHONGKONG","RESIDENCECARD","SWISSDL","UNKNOWN"]
 */
  DocId: string;
/**
 * Gets the document number.
 */
  DocNumber: string;
/**
 * Gets the document type identifier. one of:["VISA", "RESIDENCE CARD" "PASSPORT", "IDENTITY CARD", "DRIVING LICENCE", "VEHICLE REGISTRATION", "UNKNOWN DOCUMENT"]
 */
  DocType: string;
/**
 * Gets a flag indicating that the document is expired.
 */
  ExpiredDocumentFlag: boolean;
/**
 * Gets the documents expiration date.
 */
  ExpiryDate: SimpleDate;
/**
 * Gets the individuals forename.
 */
  Forename: string;
/**
 * Gets the individuals fornames.
 */
  Forenames: string;
/**
 * Gets the Image source.
 */
  ImageSource: number;
/**
 * Gets the documents issuing state.
 */
  IssuingState: string;
/**
 * Gets the MRZ's 1st line.
 */
  Line1: string;
/**
 * Gets the MRZ's 2nd line.
 */
  Line2: string;
/**
 * Gets the MRZ's 3rd line.
 */
  Line3: string;
/**
 * Gets the number of lines detected in this MRZ.
 */
  LineCount: number;
/**
 * Gets a flag indicating the MRZ was found on the back side of the document.
 */
  MrzOnRearSide: boolean;
/**
 * Gets the individuals nationality.
 */
  Nationality: string;
/**
 * Gets the first optional dat field value.
 */
  OptionalData1: string;
/**
 * Gets the second optional data field value.
 */
  OptionalData2: string;
/**
 * Gets the individuals second name.
 */
  SecondName: string;
/**
 * Gets a long description of the individuals gender. One of ["Male","Female","Unknown"]
 */
  Sex: string;
/**
 * Gets the short description of the individuals gender. One of ["M", "F", "U"]
 */
  ShortSex: string;
/**
 * Gets the individuals surname.
 */
  Surname: string;
  /**
   * parses a string into a MrzData.  
   * @returns a new MrzData; or undefined if the object could not be parsed.
   */
  static parse(data:string): MrzData {
    const obj = JSON.parse(data);
    if(obj && isMrzData(obj)){
      return MrzData.copy(obj);
    }
    throw Error("Cannot parse MrzData from " + data);
  } // END parse

  /**
   * Returns a copy of MrzData or undefined if the original object is not copyable.
   */
  static copy(obj: MrzDataLike): MrzData {
    if(isMrzData(obj)){
      let copy = new MrzData();
      copy = Object.assign(copy, obj);
      copy.CheckDigitDataList = new Array<CheckDigitDataItem>();
      for(const el of obj.CheckDigitDataList){
        if(isCheckDigitDataItem(el)){
          copy.CheckDigitDataList.push(CheckDigitDataItem.copy(el));
        } else { throw Error("Missing required property CheckDigitDataList of MrzData") }
      }
      if(isSimpleDate(obj.DateOfBirth)){ copy.DateOfBirth = SimpleDate.copy(obj.DateOfBirth); } else { throw Error("Missing required property DateOfBirth of MrzData") }
      if(isSimpleDate(obj.ExpiryDate)){ copy.ExpiryDate = SimpleDate.copy(obj.ExpiryDate); } else { throw Error("Missing required property ExpiryDate of MrzData") }
      return copy;
    }
    throw Error("Cannot copy MrzData from Object.");
  } // END copy
} // END MrzData
