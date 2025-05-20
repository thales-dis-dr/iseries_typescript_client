/*
 * DO NOT EDIT.  Generated Message from WebApi.ocrSettings.json
 * Copyright © Thales, 2023
 */

export function isOcrSettings(obj: any): obj is OcrSettingsLike {
  return  obj && // not null AND
    (( obj instanceof OcrSettings) || // instance of OcrSettings OR
    ( typeof obj === 'object' && /*"despeckle_codeline_image" in obj && */ /*"scale_down_dpi" in obj && */ /*"visa_label_check" in obj && */     true) // its an object with all the right properties
    );
}
/**
 */
export interface OcrSettingsLike {
/**
 * Enable/Disable OCR processing to despeckle the codeline image.
 */
  despeckle_codeline_image?: boolean | undefined | null;
/**
 * Configure the target DPI of the OCR image for higher resoultion scanners.
 */
  scale_down_dpi?: number | undefined | null;
/**
 * Enable/Disable possibly performing an extra OCR attempt for higher MRZs, as seen on VISA pages.
 */
  visa_label_check?: boolean | undefined | null;
  /** Indexer */
  [key: string]: any;
}

/**
 * OCR settings.  Equivalent to OCRContext and OCR settings.
 */
export class OcrSettings /*extends MessageData implements OcrSettingsLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.despeckle_codeline_image = null;
    this.scale_down_dpi = null;
    this.visa_label_check = null;
  }

/**
 * Enable/Disable OCR processing to despeckle the codeline image.
 */
  despeckle_codeline_image?: boolean | undefined | null;
/**
 * Configure the target DPI of the OCR image for higher resoultion scanners.
 */
  scale_down_dpi?: number | undefined | null;
/**
 * Enable/Disable possibly performing an extra OCR attempt for higher MRZs, as seen on VISA pages.
 */
  visa_label_check?: boolean | undefined | null;
  /**
   * parses a string into a OcrSettings.  
   * @returns a new OcrSettings; or undefined if the object could not be parsed.
   */
  static parse(data:string): OcrSettings {
    const obj = JSON.parse(data);
    if(obj && isOcrSettings(obj)){
      return OcrSettings.copy(obj);
    }
    throw Error("Cannot parse OcrSettings from " + data);
  } // END parse

  /**
   * Returns a copy of OcrSettings or undefined if the original object is not copyable.
   */
  static copy(obj: OcrSettingsLike): OcrSettings {
    if(isOcrSettings(obj)){
      let copy = new OcrSettings();
      copy = Object.assign(copy, obj);
      return copy;
    }
    throw Error("Cannot copy OcrSettings from Object.");
  } // END copy
} // END OcrSettings
