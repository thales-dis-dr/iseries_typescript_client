/*
 * DO NOT EDIT.  Generated Message from WebApi.deviceSettings.json
 * Copyright © Thales, 2023
 */

import { DataToSendSettings , type DataToSendSettingsLike, isDataToSendSettings} from './dataToSendSettings.mts';
import { DocDetectSettings , type DocDetectSettingsLike, isDocDetectSettings} from './docDetectSettings.mts';
import { DocProcessingSettings , type DocProcessingSettingsLike, isDocProcessingSettings} from './docProcessingSettings.mts';
import { ImgSettings , type ImgSettingsLike, isImgSettings} from './imgSettings.mts';
import { LoggingSettings , type LoggingSettingsLike, isLoggingSettings} from './loggingSettings.mts';
import { MDLSettings , type MDLSettingsLike, isMDLSettings} from './mDLSettings.mts';
import { OcrSettings , type OcrSettingsLike, isOcrSettings} from './ocrSettings.mts';
import { RfConfigSettings , type RfConfigSettingsLike, isRfConfigSettings} from './rfConfigSettings.mts';
import { RfDataToSendSettings , type RfDataToSendSettingsLike, isRfDataToSendSettings} from './rfDataToSendSettings.mts';
import { SoundSettings , type SoundSettingsLike, isSoundSettings} from './soundSettings.mts';

export function isDeviceSettings(obj: any): obj is DeviceSettingsLike {
  return  obj && // not null AND
    (( obj instanceof DeviceSettings) || // instance of DeviceSettings OR
    ( typeof obj === 'object' && /*"data_to_send" in obj && */ /*"doc_detect" in obj && */ /*"document_processing" in obj && */ /*"img" in obj && */ /*"logging" in obj && */ /*"mdl_config" in obj && */ /*"ocr" in obj && */ /*"rf_config" in obj && */ /*"rf_data_to_send" in obj && */ /*"sound" in obj && */     true) // its an object with all the right properties
    );
}
/**
 */
export interface DeviceSettingsLike {
/**
 * Settings to specify data items for the reader to process and return to the client.  Equivalent to DataToSend.
 */
  data_to_send?: DataToSendSettingsLike | undefined | null;
/**
 * Document Detection settings.  Equivalent to DocDetect.
 */
  doc_detect?: DocDetectSettingsLike | undefined | null;
/**
 * Document Processing settings.  Equivalent to Document Processing settings and IDV settings.
 */
  document_processing?: DocProcessingSettingsLike | undefined | null;
/**
 * Image settings.  Equivalent to Img / ImageOverrides.
 */
  img?: ImgSettingsLike | undefined | null;
/**
 * Logging settings.  Equivalent to Logging.
 */
  logging?: LoggingSettingsLike | undefined | null;
/**
 * Settings for mDL configuration.
 */
  mdl_config?: MDLSettingsLike | undefined | null;
/**
 * OCR settings.  Equivalent to OCRContext and OCR settings.
 */
  ocr?: OcrSettingsLike | undefined | null;
/**
 * Settings to specify RF configuration for ePassport security, etc.  Equivalent to RFProcSettings.
 */
  rf_config?: RfConfigSettingsLike | undefined | null;
/**
 * Settings to specify RF data items for the reader to process and return to the client.  Equivalent to RFDataToSend.
 */
  rf_data_to_send?: RfDataToSendSettingsLike | undefined | null;
/**
 * Sound settings.  Equivalent to Sound settings.
 */
  sound?: SoundSettingsLike | undefined | null;
  /** Indexer */
  [key: string]: any;
}

/**
 * Sends the device settings client.
 */
export class DeviceSettings /*extends MessageData implements DeviceSettingsLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.data_to_send = null;
    this.doc_detect = null;
    this.document_processing = null;
    this.img = null;
    this.logging = null;
    this.mdl_config = null;
    this.ocr = null;
    this.rf_config = null;
    this.rf_data_to_send = null;
    this.sound = null;
  }

/**
 * Settings to specify data items for the reader to process and return to the client.  Equivalent to DataToSend.
 */
  data_to_send?: DataToSendSettings | undefined | null;
/**
 * Document Detection settings.  Equivalent to DocDetect.
 */
  doc_detect?: DocDetectSettings | undefined | null;
/**
 * Document Processing settings.  Equivalent to Document Processing settings and IDV settings.
 */
  document_processing?: DocProcessingSettings | undefined | null;
/**
 * Image settings.  Equivalent to Img / ImageOverrides.
 */
  img?: ImgSettings | undefined | null;
/**
 * Logging settings.  Equivalent to Logging.
 */
  logging?: LoggingSettings | undefined | null;
/**
 * Settings for mDL configuration.
 */
  mdl_config?: MDLSettings | undefined | null;
/**
 * OCR settings.  Equivalent to OCRContext and OCR settings.
 */
  ocr?: OcrSettings | undefined | null;
/**
 * Settings to specify RF configuration for ePassport security, etc.  Equivalent to RFProcSettings.
 */
  rf_config?: RfConfigSettings | undefined | null;
/**
 * Settings to specify RF data items for the reader to process and return to the client.  Equivalent to RFDataToSend.
 */
  rf_data_to_send?: RfDataToSendSettings | undefined | null;
/**
 * Sound settings.  Equivalent to Sound settings.
 */
  sound?: SoundSettings | undefined | null;
  /**
   * parses a string into a DeviceSettings.  
   * @returns a new DeviceSettings; or undefined if the object could not be parsed.
   */
  static parse(data:string): DeviceSettings {
    const obj = JSON.parse(data);
    if(obj && isDeviceSettings(obj)){
      return DeviceSettings.copy(obj);
    }
    throw Error("Cannot parse DeviceSettings from " + data);
  } // END parse

  /**
   * Returns a copy of DeviceSettings or undefined if the original object is not copyable.
   */
  static copy(obj: DeviceSettingsLike): DeviceSettings {
    if(isDeviceSettings(obj)){
      let copy = new DeviceSettings();
      copy = Object.assign(copy, obj);
      if(obj.data_to_send) {
        if(isDataToSendSettings(obj.data_to_send)){ copy.data_to_send = DataToSendSettings.copy(obj.data_to_send); } else { throw Error("Missing required property data_to_send of DeviceSettings") }
      }
      if(obj.doc_detect) {
        if(isDocDetectSettings(obj.doc_detect)){ copy.doc_detect = DocDetectSettings.copy(obj.doc_detect); } else { throw Error("Missing required property doc_detect of DeviceSettings") }
      }
      if(obj.document_processing) {
        if(isDocProcessingSettings(obj.document_processing)){ copy.document_processing = DocProcessingSettings.copy(obj.document_processing); } else { throw Error("Missing required property document_processing of DeviceSettings") }
      }
      if(obj.img) {
        if(isImgSettings(obj.img)){ copy.img = ImgSettings.copy(obj.img); } else { throw Error("Missing required property img of DeviceSettings") }
      }
      if(obj.logging) {
        if(isLoggingSettings(obj.logging)){ copy.logging = LoggingSettings.copy(obj.logging); } else { throw Error("Missing required property logging of DeviceSettings") }
      }
      if(obj.mdl_config) {
        if(isMDLSettings(obj.mdl_config)){ copy.mdl_config = MDLSettings.copy(obj.mdl_config); } else { throw Error("Missing required property mdl_config of DeviceSettings") }
      }
      if(obj.ocr) {
        if(isOcrSettings(obj.ocr)){ copy.ocr = OcrSettings.copy(obj.ocr); } else { throw Error("Missing required property ocr of DeviceSettings") }
      }
      if(obj.rf_config) {
        if(isRfConfigSettings(obj.rf_config)){ copy.rf_config = RfConfigSettings.copy(obj.rf_config); } else { throw Error("Missing required property rf_config of DeviceSettings") }
      }
      if(obj.rf_data_to_send) {
        if(isRfDataToSendSettings(obj.rf_data_to_send)){ copy.rf_data_to_send = RfDataToSendSettings.copy(obj.rf_data_to_send); } else { throw Error("Missing required property rf_data_to_send of DeviceSettings") }
      }
      if(obj.sound) {
        if(isSoundSettings(obj.sound)){ copy.sound = SoundSettings.copy(obj.sound); } else { throw Error("Missing required property sound of DeviceSettings") }
      }
      return copy;
    }
    throw Error("Cannot copy DeviceSettings from Object.");
  } // END copy
} // END DeviceSettings
