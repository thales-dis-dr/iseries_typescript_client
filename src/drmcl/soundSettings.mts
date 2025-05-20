/*
 * DO NOT EDIT.  Generated Message from WebApi.soundSettings.json
 * Copyright © Thales, 2023
 */

export function isSoundSettings(obj: any): obj is SoundSettingsLike {
  return  obj && // not null AND
    (( obj instanceof SoundSettings) || // instance of SoundSettings OR
    ( typeof obj === 'object' && /*"beep_enabled" in obj && */     true) // its an object with all the right properties
    );
}
/**
 */
export interface SoundSettingsLike {
/**
 * Enable/Disable the device beep sound.
 */
  beep_enabled?: boolean | undefined | null;
  /** Indexer */
  [key: string]: any;
}

/**
 * Sound settings.  Equivalent to Sound.
 */
export class SoundSettings /*extends MessageData implements SoundSettingsLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.beep_enabled = null;
  }

/**
 * Enable/Disable the device beep sound.
 */
  beep_enabled?: boolean | undefined | null;
  /**
   * parses a string into a SoundSettings.  
   * @returns a new SoundSettings; or undefined if the object could not be parsed.
   */
  static parse(data:string): SoundSettings {
    const obj = JSON.parse(data);
    if(obj && isSoundSettings(obj)){
      return SoundSettings.copy(obj);
    }
    throw Error("Cannot parse SoundSettings from " + data);
  } // END parse

  /**
   * Returns a copy of SoundSettings or undefined if the original object is not copyable.
   */
  static copy(obj: SoundSettingsLike): SoundSettings {
    if(isSoundSettings(obj)){
      let copy = new SoundSettings();
      copy = Object.assign(copy, obj);
      return copy;
    }
    throw Error("Cannot copy SoundSettings from Object.");
  } // END copy
} // END SoundSettings
