/*
 * DO NOT EDIT.  Generated Message from WebApi.dataToSendSettings.json
 * Copyright © Thales, 2023
 */

import { CoaxIRCameraMode } from './CoaxIRCameraMode.mts';
import { CoaxVisibleCameraMode } from './CoaxVisibleCameraMode.mts';
import { IRCameraMode } from './IRCameraMode.mts';
import { VisibleCameraMode } from './VisibleCameraMode.mts';
import { UVCameraMode } from './UVCameraMode.mts';

export function isDataToSendSettings(obj: any): obj is DataToSendSettingsLike {
  return  obj && // not null AND
    (( obj instanceof DataToSendSettings) || // instance of DataToSendSettings OR
    ( typeof obj === 'object' && /*"aamva" in obj && */ /*"auto_orientation_barcode" in obj && */ /*"auto_orientation_face" in obj && */ /*"auto_orientation_magstripe" in obj && */ /*"auto_orientation_mrz" in obj && */ /*"azteccode" in obj && */ /*"barcode_ignore_second_side" in obj && */ /*"barcode_image" in obj && */ /*"coax_ir_image" in obj && */ /*"coax_visible_image" in obj && */ /*"codeline_data" in obj && */ /*"datamatrix" in obj && */ /*"first_barcode_reporting" in obj && */ /*"idv_remote_document_verify" in obj && */ /*"idv_remote_facematch_verify" in obj && */ /*"idv_remote_rf_verify" in obj && */ /*"ir_image" in obj && */ /*"onedbarcodes" in obj && */ /*"pdf417" in obj && */ /*"photo_image" in obj && */ /*"qrcode" in obj && */ /*"restrict_barcode_id3" in obj && */ /*"security_check_ir" in obj && */ /*"security_check_uv" in obj && */ /*"smart_card" in obj && */ /*"uv_image" in obj && */ /*"visible_image" in obj && */     true) // its an object with all the right properties
    );
}
/**
 */
export interface DataToSendSettingsLike {
/**
 * Parse AAMVA data from PDF417 barcodes
 */
  aamva?: boolean | undefined | null;
/**
 * Enable/Disable auto-orienting document by PDF417 Barcode.
 */
  auto_orientation_barcode?: boolean | undefined | null;
/**
 * Enable/Disable auto-orienting document by Face.
 */
  auto_orientation_face?: boolean | undefined | null;
/**
 * Enable/Disable auto-orienting document by Magstripe.
 */
  auto_orientation_magstripe?: boolean | undefined | null;
/**
 * Enable/Disable auto-orienting document by MRZ.
 */
  auto_orientation_mrz?: boolean | undefined | null;
/**
 * Enable scanning for Aztec barcodes.
 */
  azteccode?: boolean | undefined | null;
/**
 * Specify if we should end barcode processing if a barcode is found on the first side of a dual-sided reader
 */
  barcode_ignore_second_side?: boolean | undefined | null;
/**
 * Return the image of the barcode
 */
  barcode_image?: boolean | undefined | null;
/**
 * Set the Coax IR camera mode.
 */
  coax_ir_image?: CoaxIRCameraMode | undefined | null;
/**
 * Set the Coax Visible camera mode.
 */
  coax_visible_image?: CoaxVisibleCameraMode | undefined | null;
/**
 * Return the codeline data.
 */
  codeline_data?: boolean | undefined | null;
/**
 * Enable scanning for Data Matrix barodes.
 */
  datamatrix?: boolean | undefined | null;
/**
 * Options for ending document processing on the first barcode processed.
 */
  first_barcode_reporting?: boolean | undefined | null;
/**
 * Enable/Disable Verifying Documents.
 */
  idv_remote_document_verify?: boolean | undefined | null;
/**
 * Enable/Disable verifying documents with facematch.
 */
  idv_remote_facematch_verify?: boolean | undefined | null;
/**
 * Enable/Disable verifying documents with rf data/smartcard data.
 */
  idv_remote_rf_verify?: boolean | undefined | null;
/**
 * Set the IR camera mode.
 */
  ir_image?: IRCameraMode | undefined | null;
/**
 * Enable scanning for 1D barcodes.
 */
  onedbarcodes?: boolean | undefined | null;
/**
 * Enable scanning for PDF 417 barodes.
 */
  pdf417?: boolean | undefined | null;
/**
 * Set the Photo capture mode.
 */
  photo_image?: VisibleCameraMode | undefined | null;
/**
 * Enable scanning for QR Codes.
 */
  qrcode?: boolean | undefined | null;
/**
 * restrict barcode processing to only ID-3 cards.
 */
  restrict_barcode_id3?: boolean | undefined | null;
/**
 * Set
 */
  security_check_ir?: boolean | undefined | null;
/**
 * Set the Photo capture mode.
 */
  security_check_uv?: boolean | undefined | null;
/**
 * Enable/Disable smart card reading.
 */
  smart_card?: boolean | undefined | null;
/**
 * Set the UV camera mode.
 */
  uv_image?: UVCameraMode | undefined | null;
/**
 * Set the Visable Image camera mode
 */
  visible_image?: VisibleCameraMode | undefined | null;
  /** Indexer */
  [key: string]: any;
}

/**
 * Settings to specify data items for the reader to process and return to the client.  Equivalent to DataToSend.
 */
export class DataToSendSettings /*extends MessageData implements DataToSendSettingsLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.aamva = null;
    this.auto_orientation_barcode = null;
    this.auto_orientation_face = null;
    this.auto_orientation_magstripe = null;
    this.auto_orientation_mrz = null;
    this.azteccode = null;
    this.barcode_ignore_second_side = null;
    this.barcode_image = null;
    this.coax_ir_image = CoaxIRCameraMode.OFF; 
    this.coax_visible_image = CoaxVisibleCameraMode.OFF; 
    this.codeline_data = null;
    this.datamatrix = null;
    this.first_barcode_reporting = null;
    this.idv_remote_document_verify = null;
    this.idv_remote_facematch_verify = null;
    this.idv_remote_rf_verify = null;
    this.ir_image = IRCameraMode.OFF; 
    this.onedbarcodes = null;
    this.pdf417 = null;
    this.photo_image = VisibleCameraMode.OFF; 
    this.qrcode = null;
    this.restrict_barcode_id3 = null;
    this.security_check_ir = null;
    this.security_check_uv = null;
    this.smart_card = null;
    this.uv_image = UVCameraMode.OFF; 
    this.visible_image = VisibleCameraMode.OFF; 
  }

/**
 * Parse AAMVA data from PDF417 barcodes
 */
  aamva?: boolean | undefined | null;
/**
 * Enable/Disable auto-orienting document by PDF417 Barcode.
 */
  auto_orientation_barcode?: boolean | undefined | null;
/**
 * Enable/Disable auto-orienting document by Face.
 */
  auto_orientation_face?: boolean | undefined | null;
/**
 * Enable/Disable auto-orienting document by Magstripe.
 */
  auto_orientation_magstripe?: boolean | undefined | null;
/**
 * Enable/Disable auto-orienting document by MRZ.
 */
  auto_orientation_mrz?: boolean | undefined | null;
/**
 * Enable scanning for Aztec barcodes.
 */
  azteccode?: boolean | undefined | null;
/**
 * Specify if we should end barcode processing if a barcode is found on the first side of a dual-sided reader
 */
  barcode_ignore_second_side?: boolean | undefined | null;
/**
 * Return the image of the barcode
 */
  barcode_image?: boolean | undefined | null;
/**
 * Set the Coax IR camera mode.
 */
  coax_ir_image?: CoaxIRCameraMode | undefined | null;
/**
 * Set the Coax Visible camera mode.
 */
  coax_visible_image?: CoaxVisibleCameraMode | undefined | null;
/**
 * Return the codeline data.
 */
  codeline_data?: boolean | undefined | null;
/**
 * Enable scanning for Data Matrix barodes.
 */
  datamatrix?: boolean | undefined | null;
/**
 * Options for ending document processing on the first barcode processed.
 */
  first_barcode_reporting?: boolean | undefined | null;
/**
 * Enable/Disable Verifying Documents.
 */
  idv_remote_document_verify?: boolean | undefined | null;
/**
 * Enable/Disable verifying documents with facematch.
 */
  idv_remote_facematch_verify?: boolean | undefined | null;
/**
 * Enable/Disable verifying documents with rf data/smartcard data.
 */
  idv_remote_rf_verify?: boolean | undefined | null;
/**
 * Set the IR camera mode.
 */
  ir_image?: IRCameraMode | undefined | null;
/**
 * Enable scanning for 1D barcodes.
 */
  onedbarcodes?: boolean | undefined | null;
/**
 * Enable scanning for PDF 417 barodes.
 */
  pdf417?: boolean | undefined | null;
/**
 * Set the Photo capture mode.
 */
  photo_image?: VisibleCameraMode | undefined | null;
/**
 * Enable scanning for QR Codes.
 */
  qrcode?: boolean | undefined | null;
/**
 * restrict barcode processing to only ID-3 cards.
 */
  restrict_barcode_id3?: boolean | undefined | null;
/**
 * Set
 */
  security_check_ir?: boolean | undefined | null;
/**
 * Set the Photo capture mode.
 */
  security_check_uv?: boolean | undefined | null;
/**
 * Enable/Disable smart card reading.
 */
  smart_card?: boolean | undefined | null;
/**
 * Set the UV camera mode.
 */
  uv_image?: UVCameraMode | undefined | null;
/**
 * Set the Visable Image camera mode
 */
  visible_image?: VisibleCameraMode | undefined | null;
  /**
   * parses a string into a DataToSendSettings.  
   * @returns a new DataToSendSettings; or undefined if the object could not be parsed.
   */
  static parse(data:string): DataToSendSettings {
    const obj = JSON.parse(data);
    if(obj && isDataToSendSettings(obj)){
      return DataToSendSettings.copy(obj);
    }
    throw Error("Cannot parse DataToSendSettings from " + data);
  } // END parse

  /**
   * Returns a copy of DataToSendSettings or undefined if the original object is not copyable.
   */
  static copy(obj: DataToSendSettingsLike): DataToSendSettings {
    if(isDataToSendSettings(obj)){
      let copy = new DataToSendSettings();
      copy = Object.assign(copy, obj);
      return copy;
    }
    throw Error("Cannot copy DataToSendSettings from Object.");
  } // END copy
} // END DataToSendSettings
