/*
 * DO NOT EDIT.  Generated Message from WebApi.dataResponse.json
 * Copyright © Thales, 2023
 */

import { AamvaResult , type AamvaResultLike, isAamvaResult} from './aamvaResult.mts';
import { BarcodeCaptureResult , type BarcodeCaptureResultLike, isBarcodeCaptureResult} from './barcodeCaptureResult.mts';
import { MrzData ,type  MrzDataLike, isMrzData} from './mrzData.mts';
import { Image , type ImageLike, isImage} from './image.mts';
import { MDLData ,type  MDLDataLike, isMDLData} from './mDLData.mts';
import { MDLDataStatus , type MDLDataStatusLike, isMDLDataStatus} from './mDLDataStatus.mts';
import { TRISTATE } from './TRISTATE.mts';
import { ReaderDataType } from './ReaderDataType.mts';
import { ReaderValidationCode } from './ReaderValidationCode.mts';

export function isDataResponse(obj: any): obj is DataResponseLike {
  return  obj && // not null AND
    (( obj instanceof DataResponse) || // instance of DataResponse OR
    ( typeof obj === 'object' && /*"aamva_data" in obj && */ /*"barcode_data" in obj && */ /*"codeline_data" in obj && */ /*"data" in obj && */ "id" in obj && /*"img" in obj && */ /*"mdl_data" in obj && */ /*"mdl_data_status" in obj && */ "name" in obj && /*"operation_status" in obj && */ /*"text" in obj && */ "type" in obj && /*"validation_code" in obj && */     true) // its an object with all the right properties
    );
}
/**
 */
export interface DataResponseLike {
/**
 * Gets the AAMVA data details
 */
  aamva_data?: AamvaResultLike | undefined | null;
/**
 * Gets Barcode details
 */
  barcode_data?: BarcodeCaptureResultLike | undefined | null;
/**
 * Gets the mrz details
 */
  codeline_data?: MrzDataLike | undefined | null;
/**
 * binary data
 */
  data?: string | undefined | null;
/**
 * Data Item ID
 */
  id: number;
/**
 * Image data
 */
  img?: ImageLike | undefined | null;
/**
 * Gets the parsed mDL data from the mDL document type
 */
  mdl_data?: MDLDataLike | undefined | null;
/**
 * Gets the parsed mDL status from the mDL document type
 */
  mdl_data_status?: MDLDataStatusLike | undefined | null;
/**
 * Data Item Name
 */
  name: string;
/**
 * TRISTATE status
 */
  operation_status?: TRISTATE | undefined | null;
/**
 * Gets text
 */
  text?: string | undefined | null;
/**
 * ReaderDataType
 */
  type: ReaderDataType;
/**
 * ReaderValidationCode
 */
  validation_code?: ReaderValidationCode | undefined | null;
  /** Indexer */
  [key: string]: any;
}

/**
 * Returns the value of the data item requested.  Only the element corresponding to the data item type is returned.
 */
export class DataResponse /*extends MessageData implements DataResponseLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.aamva_data = null;
    this.barcode_data = null;
    this.codeline_data = null;
    this.data = null;
    this.id = 0;
    this.img = null;
    this.mdl_data = null;
    this.mdl_data_status = null;
    this.name = "";
    this.operation_status = null;
    this.text = null;
    this.type = ReaderDataType.SCDG1_CODELINE; 
    this.validation_code = null;
  }

/**
 * Gets the AAMVA data details
 */
  aamva_data?: AamvaResult | undefined | null;
/**
 * Gets Barcode details
 */
  barcode_data?: BarcodeCaptureResult | undefined | null;
/**
 * Gets the mrz details
 */
  codeline_data?: MrzData | undefined | null;
/**
 * binary data
 */
  data?: string | undefined | null;
/**
 * Data Item ID
 */
  id: number;
/**
 * Image data
 */
  img?: Image | undefined | null;
/**
 * Gets the parsed mDL data from the mDL document type
 */
  mdl_data?: MDLData | undefined | null;
/**
 * Gets the parsed mDL status from the mDL document type
 */
  mdl_data_status?: MDLDataStatus | undefined | null;
/**
 * Data Item Name
 */
  name: string;
/**
 * TRISTATE status
 */
  operation_status?: TRISTATE | undefined | null;
/**
 * Gets text
 */
  text?: string | undefined | null;
/**
 * ReaderDataType
 */
  type: ReaderDataType;
/**
 * ReaderValidationCode
 */
  validation_code?: ReaderValidationCode | undefined | null;
  /**
   * parses a string into a DataResponse.  
   * @returns a new DataResponse; or undefined if the object could not be parsed.
   */
  static parse(data:string): DataResponse {
    const obj = JSON.parse(data);
    if(obj && isDataResponse(obj)){
      return DataResponse.copy(obj);
    }
    throw Error("Cannot parse DataResponse from " + data);
  } // END parse

  /**
   * Returns a copy of DataResponse or undefined if the original object is not copyable.
   */
  static copy(obj: DataResponseLike): DataResponse {
    if(isDataResponse(obj)){
      let copy = new DataResponse();
      copy = Object.assign(copy, obj);
      if(obj.aamva_data) {
        if(isAamvaResult(obj.aamva_data)){ copy.aamva_data = AamvaResult.copy(obj.aamva_data); } else { throw Error("Missing required property aamva_data of DataResponse") }
      }
      if(obj.barcode_data) {
        if(isBarcodeCaptureResult(obj.barcode_data)){ copy.barcode_data = BarcodeCaptureResult.copy(obj.barcode_data); } else { throw Error("Missing required property barcode_data of DataResponse") }
      }
      if(obj.codeline_data) {
        if(isMrzData(obj.codeline_data)){ copy.codeline_data = MrzData.copy(obj.codeline_data); } else { throw Error("Missing required property codeline_data of DataResponse") }
      }
      if(obj.img) {
        if(isImage(obj.img)){ copy.img = Image.copy(obj.img); } else { throw Error("Missing required property img of DataResponse") }
      }
      if(obj.mdl_data) {
        if(isMDLData(obj.mdl_data)){ copy.mdl_data = MDLData.copy(obj.mdl_data); } else { throw Error("Missing required property mdl_data of DataResponse") }
      }
      if(obj.mdl_data_status) {
        if(isMDLDataStatus(obj.mdl_data_status)){ copy.mdl_data_status = MDLDataStatus.copy(obj.mdl_data_status); } else { throw Error("Missing required property mdl_data_status of DataResponse") }
      }
      return copy;
    }
    throw Error("Cannot copy DataResponse from Object.");
  } // END copy
} // END DataResponse
