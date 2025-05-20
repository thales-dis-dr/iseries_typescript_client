/*
 * DO NOT EDIT.  Generated Message from WebApi.updateStatus.json
 * Copyright © Thales, 2023
 */

export function isUpdateStatus(obj: any): obj is UpdateStatusLike {
  return  obj && // not null AND
    (( obj instanceof UpdateStatus) || // instance of UpdateStatus OR
    ( typeof obj === 'object' && "download_percent" in obj && "image" in obj && "info" in obj && "install_percent" in obj && "name" in obj && "nsteps" in obj && "rebootRequired" in obj && "source" in obj && "status" in obj && "step" in obj &&     true) // its an object with all the right properties
    );
}
/**
 */
export interface UpdateStatusLike {
/**
 * Indicates the installation step percent
 */
  download_percent: number;
/**
 * Name of the image
 */
  image: string;
/**
 * the info
 */
  info: string;
/**
 * Indicates the installation step percent
 */
  install_percent: number;
/**
 * the name
 */
  name: string;
/**
 * Indicates the total number of installation step
 */
  nsteps: number;
/**
 * Indicates a reboot is pending
 */
  rebootRequired: boolean;
/**
 * the source
 */
  source: string;
/**
 * the status
 */
  status: string;
/**
 * Indicates the installation step
 */
  step: number;
  /** Indexer */
  [key: string]: any;
}

/**
 */
export class UpdateStatus /*extends MessageData implements UpdateStatusLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.download_percent = 0;
    this.image = "";
    this.info = "";
    this.install_percent = 0;
    this.name = "";
    this.nsteps = 0;
    this.rebootRequired = true;
    this.source = "";
    this.status = "";
    this.step = 0;
  }

/**
 * Indicates the installation step percent
 */
  download_percent: number;
/**
 * Name of the image
 */
  image: string;
/**
 * the info
 */
  info: string;
/**
 * Indicates the installation step percent
 */
  install_percent: number;
/**
 * the name
 */
  name: string;
/**
 * Indicates the total number of installation step
 */
  nsteps: number;
/**
 * Indicates a reboot is pending
 */
  rebootRequired: boolean;
/**
 * the source
 */
  source: string;
/**
 * the status
 */
  status: string;
/**
 * Indicates the installation step
 */
  step: number;
  /**
   * parses a string into a UpdateStatus.  
   * @returns a new UpdateStatus; or undefined if the object could not be parsed.
   */
  static parse(data:string): UpdateStatus {
    const obj = JSON.parse(data);
    if(obj && isUpdateStatus(obj)){
      return UpdateStatus.copy(obj);
    }
    throw Error("Cannot parse UpdateStatus from " + data);
  } // END parse

  /**
   * Returns a copy of UpdateStatus or undefined if the original object is not copyable.
   */
  static copy(obj: UpdateStatusLike): UpdateStatus {
    if(isUpdateStatus(obj)){
      let copy = new UpdateStatus();
      copy = Object.assign(copy, obj);
      return copy;
    }
    throw Error("Cannot copy UpdateStatus from Object.");
  } // END copy
} // END UpdateStatus
