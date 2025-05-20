/*
 * DO NOT EDIT.  Generated Message from WebApi.loggingSettings.json
 * Copyright © Thales, 2023
 */

export function isLoggingSettings(obj: any): obj is LoggingSettingsLike {
  return  obj && // not null AND
    (( obj instanceof LoggingSettings) || // instance of LoggingSettings OR
    ( typeof obj === 'object' && /*"log_level" in obj && */     true) // its an object with all the right properties
    );
}
/**
 */
export interface LoggingSettingsLike {
/**
 * Configure the SDK log level (0-5).
 */
  log_level?: number | undefined | null;
  /** Indexer */
  [key: string]: any;
}

/**
 * Logging settings.  Equivalent to Logging.
 */
export class LoggingSettings /*extends MessageData implements LoggingSettingsLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.log_level = null;
  }

/**
 * Configure the SDK log level (0-5).
 */
  log_level?: number | undefined | null;
  /**
   * parses a string into a LoggingSettings.  
   * @returns a new LoggingSettings; or undefined if the object could not be parsed.
   */
  static parse(data:string): LoggingSettings {
    const obj = JSON.parse(data);
    if(obj && isLoggingSettings(obj)){
      return LoggingSettings.copy(obj);
    }
    throw Error("Cannot parse LoggingSettings from " + data);
  } // END parse

  /**
   * Returns a copy of LoggingSettings or undefined if the original object is not copyable.
   */
  static copy(obj: LoggingSettingsLike): LoggingSettings {
    if(isLoggingSettings(obj)){
      let copy = new LoggingSettings();
      copy = Object.assign(copy, obj);
      return copy;
    }
    throw Error("Cannot copy LoggingSettings from Object.");
  } // END copy
} // END LoggingSettings
