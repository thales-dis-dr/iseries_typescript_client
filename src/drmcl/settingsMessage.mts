/*
 * DO NOT EDIT.  Generated Message from WebApi.settingsMessage.json
 * Copyright © Thales, 2023
 */

import { DeviceSettings , DeviceSettingsLike, isDeviceSettings} from './deviceSettings.mjs';

export function isSettingsMessage(obj: any): obj is SettingsMessageLike {
  return  obj && // not null AND
    (( obj instanceof SettingsMessage) || // instance of SettingsMessage OR
    ( typeof obj === 'object' && "settings" in obj &&     true) // its an object with all the right properties
    );
}
/**
 */
export interface SettingsMessageLike {
/**
 * Document reader settings.  Equivalent to MMMReader_GetSettings()
 */
  settings: DeviceSettingsLike;
  /** Indexer */
  [key: string]: any;
}

/**
 * Sends the device settings client
 */
export class SettingsMessage /*extends MessageData implements SettingsMessageLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.settings = new DeviceSettings();
  }

/**
 * Document reader settings.  Equivalent to MMMReader_GetSettings()
 */
  settings: DeviceSettings;
  /**
   * parses a string into a SettingsMessage.  
   * @returns a new SettingsMessage; or undefined if the object could not be parsed.
   */
  static parse(data:string): SettingsMessage {
    const obj = JSON.parse(data);
    if(obj && isSettingsMessage(obj)){
      return SettingsMessage.copy(obj);
    }
    throw Error("Cannot parse SettingsMessage from " + data);
  } // END parse

  /**
   * Returns a copy of SettingsMessage or undefined if the original object is not copyable.
   */
  static copy(obj: SettingsMessageLike): SettingsMessage {
    if(isSettingsMessage(obj)){
      let copy = new SettingsMessage();
      copy = Object.assign(copy, obj);
      if(isDeviceSettings(obj.settings)){ copy.settings = DeviceSettings.copy(obj.settings); } else { throw Error("Missing required property settings of SettingsMessage") }
      return copy;
    }
    throw Error("Cannot copy SettingsMessage from Object.");
  } // END copy
} // END SettingsMessage
