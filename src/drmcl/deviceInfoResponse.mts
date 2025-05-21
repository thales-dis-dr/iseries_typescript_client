/*
 * DO NOT EDIT.  Generated Message from WebApi.deviceInfoResponse.json
 * Copyright © Thales, 2023
 */

import { CameraDimensions, type CameraDimensionsLike } from './CameraDimensions.mts';

export function isDeviceInfoResponse(obj: any): obj is DeviceInfoResponseLike {
  return  obj && // not null AND
    (( obj instanceof DeviceInfoResponse) || // instance of DeviceInfoResponse OR
    ( typeof obj === 'object' && /*"calibratedByAutoCal" in obj && */ /*"cameraDims" in obj && */ /*"cameraSpec" in obj && */ /*"ethMAC" in obj && */ /*"hasAntiGlare" in obj && */ /*"hasBluetooth" in obj && */ /*"hasCoax" in obj && */ /*"hasImageScalling" in obj && */ /*"hasNoExtraData" in obj && */ /*"hasNoNetworkConfig" in obj && */ /*"hasNoUpgrade" in obj && */ /*"hasRf" in obj && */ /*"hasUV" in obj && */ /*"imagerSerial" in obj && */ /*"isTwoSided" in obj && */ /*"isUsbPowered" in obj && */ /*"model" in obj && */ /*"rebootPending" in obj && */ /*"serial" in obj && */ /*"updateAvailable" in obj && */ /*"version" in obj && */ /*"wifiMAC" in obj && */     true) // its an object with all the right properties
    );
}
/**
 */
export interface DeviceInfoResponseLike {
/**
 */
  calibratedByAutoCal?: boolean | undefined | null;
/**
 */
  cameraDims?: CameraDimensionsLike | undefined | null;
/**
 */
  cameraSpec?: string | undefined | null;
/**
 * The ethernet MAC address
 */
  ethMAC?: string | undefined | null;
/**
 * Indicates if the reader has Anti-Glare support
 */
  hasAntiGlare?: boolean | undefined | null;
/**
 * Indicates if the reader has Bluetooth capabilities
 */
  hasBluetooth?: boolean | undefined | null;
/**
 * Indicates if the reader has Coax light sources
 */
  hasCoax?: boolean | undefined | null;
/**
 * Indicates if the imager can scale images
 */
  hasImageScalling?: boolean | undefined | null;
/**
 * Indicates the Extra Data Commands have no storage backing them
 */
  hasNoExtraData?: boolean | undefined | null;
/**
 * Indicates networking is not configurable
 */
  hasNoNetworkConfig?: boolean | undefined | null;
/**
 * Indicates the Firmware update commands cannot be used
 */
  hasNoUpgrade?: boolean | undefined | null;
/**
 * Indicates if the reader has RF capabilities
 */
  hasRf?: boolean | undefined | null;
/**
 * Indicates if the reader has UV capabilities
 */
  hasUV?: boolean | undefined | null;
/**
 * Serial number for the image
 */
  imagerSerial?: string | undefined | null;
/**
 */
  isTwoSided?: boolean | undefined | null;
/**
 * Indicates if the reader has only usb power
 */
  isUsbPowered?: boolean | undefined | null;
/**
 * Model number
 */
  model?: string | undefined | null;
/**
 */
  rebootPending?: boolean | undefined | null;
/**
 * Serial number
 */
  serial?: string | undefined | null;
/**
 * Indicates if an update is a vailable on the GUS
 */
  updateAvailable?: boolean | undefined | null;
/**
 * Version number
 */
  version?: string | undefined | null;
/**
 * The Wi-Fi MAC address
 */
  wifiMAC?: string | undefined | null;
  /** Indexer */
  [key: string]: any;
}

/**
 * General Device information
 */
export class DeviceInfoResponse /*extends MessageData implements DeviceInfoResponseLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.calibratedByAutoCal = null;
    this.cameraDims = null; 
    this.cameraSpec = null;
    this.ethMAC = null;
    this.hasAntiGlare = null;
    this.hasBluetooth = null;
    this.hasCoax = null;
    this.hasImageScalling = null;
    this.hasNoExtraData = null;
    this.hasNoNetworkConfig = null;
    this.hasNoUpgrade = null;
    this.hasRf = null;
    this.hasUV = null;
    this.imagerSerial = null;
    this.isTwoSided = null;
    this.isUsbPowered = null;
    this.model = null;
    this.rebootPending = null;
    this.serial = null;
    this.updateAvailable = null;
    this.version = null;
    this.wifiMAC = null;
  }

/**
 */
  calibratedByAutoCal?: boolean | undefined | null;
/**
 */
  cameraDims?: CameraDimensions | undefined | null;
/**
 */
  cameraSpec?: string | undefined | null;
/**
 * The ethernet MAC address
 */
  ethMAC?: string | undefined | null;
/**
 * Indicates if the reader has Anti-Glare support
 */
  hasAntiGlare?: boolean | undefined | null;
/**
 * Indicates if the reader has Bluetooth capabilities
 */
  hasBluetooth?: boolean | undefined | null;
/**
 * Indicates if the reader has Coax light sources
 */
  hasCoax?: boolean | undefined | null;
/**
 * Indicates if the imager can scale images
 */
  hasImageScalling?: boolean | undefined | null;
/**
 * Indicates the Extra Data Commands have no storage backing them
 */
  hasNoExtraData?: boolean | undefined | null;
/**
 * Indicates networking is not configurable
 */
  hasNoNetworkConfig?: boolean | undefined | null;
/**
 * Indicates the Firmware update commands cannot be used
 */
  hasNoUpgrade?: boolean | undefined | null;
/**
 * Indicates if the reader has RF capabilities
 */
  hasRf?: boolean | undefined | null;
/**
 * Indicates if the reader has UV capabilities
 */
  hasUV?: boolean | undefined | null;
/**
 * Serial number for the image
 */
  imagerSerial?: string | undefined | null;
/**
 */
  isTwoSided?: boolean | undefined | null;
/**
 * Indicates if the reader has only usb power
 */
  isUsbPowered?: boolean | undefined | null;
/**
 * Model number
 */
  model?: string | undefined | null;
/**
 */
  rebootPending?: boolean | undefined | null;
/**
 * Serial number
 */
  serial?: string | undefined | null;
/**
 * Indicates if an update is a vailable on the GUS
 */
  updateAvailable?: boolean | undefined | null;
/**
 * Version number
 */
  version?: string | undefined | null;
/**
 * The Wi-Fi MAC address
 */
  wifiMAC?: string | undefined | null;
  /**
   * parses a string into a DeviceInfoResponse.  
   * @returns a new DeviceInfoResponse; or undefined if the object could not be parsed.
   */
  static parse(data:string): DeviceInfoResponse {
    const obj = JSON.parse(data);
    if(obj && isDeviceInfoResponse(obj)){
      return DeviceInfoResponse.copy(obj);
    }
    throw Error("Cannot parse DeviceInfoResponse from " + data);
  } // END parse

  /**
   * Returns a copy of DeviceInfoResponse or undefined if the original object is not copyable.
   */
  static copy(obj: DeviceInfoResponseLike): DeviceInfoResponse {
    if(isDeviceInfoResponse(obj)){
      let copy = new DeviceInfoResponse();
      copy = Object.assign(copy, obj);
      return copy;
    }
    throw Error("Cannot copy DeviceInfoResponse from Object.");
  } // END copy
} // END DeviceInfoResponse
