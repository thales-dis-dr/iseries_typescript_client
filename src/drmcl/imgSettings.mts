/*
 * DO NOT EDIT.  Generated Message from WebApi.imgSettings.json
 * Copyright © Thales, 2023
 */

export function isImgSettings(obj: any): obj is ImgSettingsLike {
  return  obj && // not null AND
    (( obj instanceof ImgSettings) || // instance of ImgSettings OR
    ( typeof obj === 'object' && /*"align_top_bottom" in obj && */ /*"anti_glare_ir" in obj && */ /*"anti_glare_uv" in obj && */ /*"anti_glare_vis" in obj && */ /*"barcode_threads" in obj && */ /*"check_visible_ocr" in obj && */ /*"crop_barcode_image" in obj && */ /*"enhanced_dark_object_barcode_decoding" in obj && */ /*"enhanced_ocr" in obj && */ /*"exposure_ir" in obj && */ /*"exposure_uv" in obj && */ /*"exposure_vis" in obj && */ /*"face_find" in obj && */ /*"face_find_passport" in obj && */ /*"gamma_ir" in obj && */ /*"gamma_uv" in obj && */ /*"gamma_vis" in obj && */ /*"needs_debarrel" in obj && */ /*"scale_down_barcode_dpi" in obj && */ /*"scaleBrightness_ir" in obj && */ /*"scaleBrightness_uv" in obj && */ /*"scaleBrightness_vis" in obj && */ /*"scaleFactor" in obj && */ /*"use_ambient_for_barcode_dark_objects" in obj && */ /*"use_binned_capture" in obj && */ /*"use_seq_img_ir" in obj && */ /*"use_seq_img_vis" in obj && */ /*"use_visible_for_barcode" in obj && */     true) // its an object with all the right properties
    );
}
/**
 */
export interface ImgSettingsLike {
/**
 * Makes the cr5400 image top/bottom aligned.
 */
  align_top_bottom?: boolean | undefined | null;
/**
 * Enable/Disable AntiGlare for the IR image
 */
  anti_glare_ir?: boolean | undefined | null;
/**
 * Enable/Disable AntiGlare for the UV image.
 */
  anti_glare_uv?: boolean | undefined | null;
/**
 * Enable/Disable AntiGlare for the Visible image.
 */
  anti_glare_vis?: boolean | undefined | null;
/**
 * Set the number of threads used for barcode decoding.  Default = 0 (use max number of CPU cores on machine for faster decoding)
 */
  barcode_threads?: number | undefined | null;
/**
 * Enable/Disable checking the visible image for MRZ OCR if not found in the IR image.
 */
  check_visible_ocr?: boolean | undefined | null;
/**
 * Enable/Disable cropping of the High Level API image used for barcode decoding on white documents.
 */
  crop_barcode_image?: boolean | undefined | null;
/**
 * Enable/Disable enhanced decoding of barcodes on dark objects (cell phones) to handle a wider range of cell phone brightness (max dim to max bright).
 */
  enhanced_dark_object_barcode_decoding?: boolean | undefined | null;
/**
 * Enable/Disable enhanced OCR functionality.
 */
  enhanced_ocr?: boolean | undefined | null;
/**
 * Sets the image exposure value.
 */
  exposure_ir?: number | undefined | null;
/**
 * Sets the image exposure value.
 */
  exposure_uv?: number | undefined | null;
/**
 * Sets the image exposure value.
 */
  exposure_vis?: number | undefined | null;
/**
 * Enable/Disable using face find for photo location and/or auto orientation.
 */
  face_find?: boolean | undefined | null;
/**
 * Enable/Disable using face find for photo location on passports.  By default, the passport photo is cropped to a fixed location for speed as orientation and location is fixed.
 */
  face_find_passport?: boolean | undefined | null;
/**
 * Sets the Gamma correction value.
 */
  gamma_ir?: number | undefined | null;
/**
 * Sets the Gamma correction value.
 */
  gamma_uv?: number | undefined | null;
/**
 * Sets the Gamma correction value.
 */
  gamma_vis?: number | undefined | null;
/**
 * Enable/Disable debarreling images.
 */
  needs_debarrel?: boolean | undefined | null;
/**
 * Sets target DPI of image used for MRZ OCR on higher DPI readers.
 */
  scale_down_barcode_dpi?: number | undefined | null;
/**
 * Sets the brightness scale correction value.
 */
  scaleBrightness_ir?: number | undefined | null;
/**
 * Sets the brightness scale correction value.
 */
  scaleBrightness_uv?: number | undefined | null;
/**
 * Sets the brightness scale correction value.
 */
  scaleBrightness_vis?: number | undefined | null;
/**
 * Controls the image scale/DPI for scalable readers, (100=Fullscale to 25% scale). This allows for larger/higher quality images or smaller/lower quality images for performance/quality tradeoff. The DPI at each scale is simply a factor of the maximum DPI of the reader at full scale (ScaleFactor=100). For a CR5400, for example, at ScaleFactor=100 the maximum DPI would be (puCameraSettings.xDPI + puCameraSettings.yDPI) / 2. Each reader can vary slightly based on calibration, for example, (621 + 634) / 2 = 627 (maxDPI). Then, DPI = (maxDPI * ScaleFactor / 100), as you scale down.  For example, (627 * 64 / 100) = ~401 DPI. So, for the CR5400 readers a ScaleFactor=64 is approximately 400 DPI.
 */
  scaleFactor?: number | undefined | null;
/**
 * Enable/Disable ambient light instead of white light for decoding barcodes on dark objects (cell phones).
 */
  use_ambient_for_barcode_dark_objects?: boolean | undefined | null;
/**
 * Enable/Disable using binned image for faster capture and processing on high DPI readers.
 */
  use_binned_capture?: boolean | undefined | null;
/**
 * Enable/Disable Sequential Imaging for the IR image.
 */
  use_seq_img_ir?: boolean | undefined | null;
/**
 * Enable/Disable Sequential Imaging for the Visible image.
 */
  use_seq_img_vis?: boolean | undefined | null;
/**
 * Enable/Disable using visible image already captured instead of additional visible capture for barcode decoding.
 */
  use_visible_for_barcode?: boolean | undefined | null;
  /** Indexer */
  [key: string]: any;
}

/**
 * Image settings.  Equivalent to Img / ImageOverrides.
 */
export class ImgSettings /*extends MessageData implements ImgSettingsLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.align_top_bottom = null;
    this.anti_glare_ir = null;
    this.anti_glare_uv = null;
    this.anti_glare_vis = null;
    this.barcode_threads = null;
    this.check_visible_ocr = null;
    this.crop_barcode_image = null;
    this.enhanced_dark_object_barcode_decoding = null;
    this.enhanced_ocr = null;
    this.exposure_ir = null;
    this.exposure_uv = null;
    this.exposure_vis = null;
    this.face_find = null;
    this.face_find_passport = null;
    this.gamma_ir = null;
    this.gamma_uv = null;
    this.gamma_vis = null;
    this.needs_debarrel = null;
    this.scale_down_barcode_dpi = null;
    this.scaleBrightness_ir = null;
    this.scaleBrightness_uv = null;
    this.scaleBrightness_vis = null;
    this.scaleFactor = null;
    this.use_ambient_for_barcode_dark_objects = null;
    this.use_binned_capture = null;
    this.use_seq_img_ir = null;
    this.use_seq_img_vis = null;
    this.use_visible_for_barcode = null;
  }

/**
 * Makes the cr5400 image top/bottom aligned.
 */
  align_top_bottom?: boolean | undefined | null;
/**
 * Enable/Disable AntiGlare for the IR image
 */
  anti_glare_ir?: boolean | undefined | null;
/**
 * Enable/Disable AntiGlare for the UV image.
 */
  anti_glare_uv?: boolean | undefined | null;
/**
 * Enable/Disable AntiGlare for the Visible image.
 */
  anti_glare_vis?: boolean | undefined | null;
/**
 * Set the number of threads used for barcode decoding.  Default = 0 (use max number of CPU cores on machine for faster decoding)
 */
  barcode_threads?: number | undefined | null;
/**
 * Enable/Disable checking the visible image for MRZ OCR if not found in the IR image.
 */
  check_visible_ocr?: boolean | undefined | null;
/**
 * Enable/Disable cropping of the High Level API image used for barcode decoding on white documents.
 */
  crop_barcode_image?: boolean | undefined | null;
/**
 * Enable/Disable enhanced decoding of barcodes on dark objects (cell phones) to handle a wider range of cell phone brightness (max dim to max bright).
 */
  enhanced_dark_object_barcode_decoding?: boolean | undefined | null;
/**
 * Enable/Disable enhanced OCR functionality.
 */
  enhanced_ocr?: boolean | undefined | null;
/**
 * Sets the image exposure value.
 */
  exposure_ir?: number | undefined | null;
/**
 * Sets the image exposure value.
 */
  exposure_uv?: number | undefined | null;
/**
 * Sets the image exposure value.
 */
  exposure_vis?: number | undefined | null;
/**
 * Enable/Disable using face find for photo location and/or auto orientation.
 */
  face_find?: boolean | undefined | null;
/**
 * Enable/Disable using face find for photo location on passports.  By default, the passport photo is cropped to a fixed location for speed as orientation and location is fixed.
 */
  face_find_passport?: boolean | undefined | null;
/**
 * Sets the Gamma correction value.
 */
  gamma_ir?: number | undefined | null;
/**
 * Sets the Gamma correction value.
 */
  gamma_uv?: number | undefined | null;
/**
 * Sets the Gamma correction value.
 */
  gamma_vis?: number | undefined | null;
/**
 * Enable/Disable debarreling images.
 */
  needs_debarrel?: boolean | undefined | null;
/**
 * Sets target DPI of image used for MRZ OCR on higher DPI readers.
 */
  scale_down_barcode_dpi?: number | undefined | null;
/**
 * Sets the brightness scale correction value.
 */
  scaleBrightness_ir?: number | undefined | null;
/**
 * Sets the brightness scale correction value.
 */
  scaleBrightness_uv?: number | undefined | null;
/**
 * Sets the brightness scale correction value.
 */
  scaleBrightness_vis?: number | undefined | null;
/**
 * Controls the image scale/DPI for scalable readers, (100=Fullscale to 25% scale). This allows for larger/higher quality images or smaller/lower quality images for performance/quality tradeoff. The DPI at each scale is simply a factor of the maximum DPI of the reader at full scale (ScaleFactor=100). For a CR5400, for example, at ScaleFactor=100 the maximum DPI would be (puCameraSettings.xDPI + puCameraSettings.yDPI) / 2. Each reader can vary slightly based on calibration, for example, (621 + 634) / 2 = 627 (maxDPI). Then, DPI = (maxDPI * ScaleFactor / 100), as you scale down.  For example, (627 * 64 / 100) = ~401 DPI. So, for the CR5400 readers a ScaleFactor=64 is approximately 400 DPI.
 */
  scaleFactor?: number | undefined | null;
/**
 * Enable/Disable ambient light instead of white light for decoding barcodes on dark objects (cell phones).
 */
  use_ambient_for_barcode_dark_objects?: boolean | undefined | null;
/**
 * Enable/Disable using binned image for faster capture and processing on high DPI readers.
 */
  use_binned_capture?: boolean | undefined | null;
/**
 * Enable/Disable Sequential Imaging for the IR image.
 */
  use_seq_img_ir?: boolean | undefined | null;
/**
 * Enable/Disable Sequential Imaging for the Visible image.
 */
  use_seq_img_vis?: boolean | undefined | null;
/**
 * Enable/Disable using visible image already captured instead of additional visible capture for barcode decoding.
 */
  use_visible_for_barcode?: boolean | undefined | null;
  /**
   * parses a string into a ImgSettings.  
   * @returns a new ImgSettings; or undefined if the object could not be parsed.
   */
  static parse(data:string): ImgSettings {
    const obj = JSON.parse(data);
    if(obj && isImgSettings(obj)){
      return ImgSettings.copy(obj);
    }
    throw Error("Cannot parse ImgSettings from " + data);
  } // END parse

  /**
   * Returns a copy of ImgSettings or undefined if the original object is not copyable.
   */
  static copy(obj: ImgSettingsLike): ImgSettings {
    if(isImgSettings(obj)){
      let copy = new ImgSettings();
      copy = Object.assign(copy, obj);
      return copy;
    }
    throw Error("Cannot copy ImgSettings from Object.");
  } // END copy
} // END ImgSettings
