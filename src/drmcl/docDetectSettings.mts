/*
 * DO NOT EDIT.  Generated Message from WebApi.docDetectSettings.json
 * Copyright © Thales, 2023
 */

export function isDocDetectSettings(obj: any): obj is DocDetectSettingsLike {
  return  obj && // not null AND
    (( obj instanceof DocDetectSettings) || // instance of DocDetectSettings OR
    ( typeof obj === 'object' && /*"active_reader" in obj && */ /*"active_reader_bottom_offset" in obj && */ /*"active_reader_white_threshold" in obj && */ /*"active_video" in obj && */ /*"active_video_count_threshold" in obj && */ /*"active_video_white_threshold" in obj && */ /*"boxes_white_threshold" in obj && */ /*"crop_to_laminate" in obj && */ /*"dark_objects" in obj && */ /*"delay" in obj && */ /*"movement" in obj && */ /*"search_area_multiplier" in obj && */ /*"use_first_image_captured_for_locate" in obj && */ /*"use_hardware_auto_capture" in obj && */ /*"use_ir_for_detect" in obj && */     true) // its an object with all the right properties
    );
}
/**
 */
export interface DocDetectSettingsLike {
/**
 * Enable/Disable using firmware document detection instead of active_video.
 */
  active_reader?: boolean | undefined | null;
/**
 * Configure active_reader detection bottom offset.
 */
  active_reader_bottom_offset?: number | undefined | null;
/**
 * Configure active_reader detection white threshold.
 */
  active_reader_white_threshold?: number | undefined | null;
/**
 * Enable/Disable active video document detection (default) allowing for detection of documents/phones across entire glass.
 */
  active_video?: boolean | undefined | null;
/**
 * Configure active_video count threshold.
 */
  active_video_count_threshold?: number | undefined | null;
/**
 * Configure active_video detection white threshold.
 */
  active_video_white_threshold?: number | undefined | null;
/**
 * Configure detection boxes white threshold.
 */
  boxes_white_threshold?: number | undefined | null;
/**
 * Enable/Disable cropping to edge of laminate border on some documents.
 */
  crop_to_laminate?: boolean | undefined | null;
/**
 * Enable/Disable dark object detection used for cell phones.
 */
  dark_objects?: boolean | undefined | null;
/**
 * Configure document detection delay (milliseconds).
 */
  delay?: number | undefined | null;
/**
 * Configure active_video movement threshold.
 */
  movement?: number | undefined | null;
/**
 * Configure how much area of the glass is used for active_video detection (default=0 entire glass).
 */
  search_area_multiplier?: number | undefined | null;
/**
 * Enable/Disable using the IR image captured for document cropping instead of the image used during detection.
 */
  use_first_image_captured_for_locate?: boolean | undefined | null;
/**
 * Use Auto Capture.
 */
  use_hardware_auto_capture?: boolean | undefined | null;
/**
 * Enable/Disable using IR image settings for detection instead of IR DETECT specific settings.
 */
  use_ir_for_detect?: boolean | undefined | null;
  /** Indexer */
  [key: string]: any;
}

/**
 * Document Detection settings.  Equivalent to DocDetect.
 */
export class DocDetectSettings /*extends MessageData implements DocDetectSettingsLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.active_reader = null;
    this.active_reader_bottom_offset = null;
    this.active_reader_white_threshold = null;
    this.active_video = null;
    this.active_video_count_threshold = null;
    this.active_video_white_threshold = null;
    this.boxes_white_threshold = null;
    this.crop_to_laminate = null;
    this.dark_objects = null;
    this.delay = null;
    this.movement = null;
    this.search_area_multiplier = null;
    this.use_first_image_captured_for_locate = null;
    this.use_hardware_auto_capture = null;
    this.use_ir_for_detect = null;
  }

/**
 * Enable/Disable using firmware document detection instead of active_video.
 */
  active_reader?: boolean | undefined | null;
/**
 * Configure active_reader detection bottom offset.
 */
  active_reader_bottom_offset?: number | undefined | null;
/**
 * Configure active_reader detection white threshold.
 */
  active_reader_white_threshold?: number | undefined | null;
/**
 * Enable/Disable active video document detection (default) allowing for detection of documents/phones across entire glass.
 */
  active_video?: boolean | undefined | null;
/**
 * Configure active_video count threshold.
 */
  active_video_count_threshold?: number | undefined | null;
/**
 * Configure active_video detection white threshold.
 */
  active_video_white_threshold?: number | undefined | null;
/**
 * Configure detection boxes white threshold.
 */
  boxes_white_threshold?: number | undefined | null;
/**
 * Enable/Disable cropping to edge of laminate border on some documents.
 */
  crop_to_laminate?: boolean | undefined | null;
/**
 * Enable/Disable dark object detection used for cell phones.
 */
  dark_objects?: boolean | undefined | null;
/**
 * Configure document detection delay (milliseconds).
 */
  delay?: number | undefined | null;
/**
 * Configure active_video movement threshold.
 */
  movement?: number | undefined | null;
/**
 * Configure how much area of the glass is used for active_video detection (default=0 entire glass).
 */
  search_area_multiplier?: number | undefined | null;
/**
 * Enable/Disable using the IR image captured for document cropping instead of the image used during detection.
 */
  use_first_image_captured_for_locate?: boolean | undefined | null;
/**
 * Use Auto Capture.
 */
  use_hardware_auto_capture?: boolean | undefined | null;
/**
 * Enable/Disable using IR image settings for detection instead of IR DETECT specific settings.
 */
  use_ir_for_detect?: boolean | undefined | null;
  /**
   * parses a string into a DocDetectSettings.  
   * @returns a new DocDetectSettings; or undefined if the object could not be parsed.
   */
  static parse(data:string): DocDetectSettings {
    const obj = JSON.parse(data);
    if(obj && isDocDetectSettings(obj)){
      return DocDetectSettings.copy(obj);
    }
    throw Error("Cannot parse DocDetectSettings from " + data);
  } // END parse

  /**
   * Returns a copy of DocDetectSettings or undefined if the original object is not copyable.
   */
  static copy(obj: DocDetectSettingsLike): DocDetectSettings {
    if(isDocDetectSettings(obj)){
      let copy = new DocDetectSettings();
      copy = Object.assign(copy, obj);
      return copy;
    }
    throw Error("Cannot copy DocDetectSettings from Object.");
  } // END copy
} // END DocDetectSettings
