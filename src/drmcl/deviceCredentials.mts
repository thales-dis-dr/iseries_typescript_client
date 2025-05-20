/*
 * DO NOT EDIT.  Generated Message from WebApi.deviceCredentials.json
 * Copyright © Thales, 2023
 */

export function isDeviceCredentials(obj: any): obj is DeviceCredentialsLike {
  return  obj && // not null AND
    (( obj instanceof DeviceCredentials) || // instance of DeviceCredentials OR
    ( typeof obj === 'object' && "i" in obj && "k" in obj && /*"a" in obj && */     true) // its an object with all the right properties
    );
}
/**
 */
export interface DeviceCredentialsLike {
/**
 * credential ID
 * Alias for credentialId
 */
  i: string;
/**
 * credential key
 * Alias for credentialKey
 */
  k: string;
/**
 * is Admin
 * Alias for isAdmin
 */
  a?: boolean | undefined | null;
  /** Indexer */
  [key: string]: any;
}

/**
 * Credential keys
 */
export class DeviceCredentials /*extends MessageData implements DeviceCredentialsLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.i = "";
    this.k = "";
    this.a = null;
  }

/**
 * credential ID
 * Alias for credentialId
 */
  i: string;
  get credentialId(): string { return this.i; }
  set credentialId(value: string) { this.i = value; }
/**
 * credential key
 * Alias for credentialKey
 */
  k: string;
  get credentialKey(): string { return this.k; }
  set credentialKey(value: string) { this.k = value; }
/**
 * is Admin
 * Alias for isAdmin
 */
  a?: boolean | undefined | null;
  get isAdmin(): boolean | undefined | null { return this.a; }
  set isAdmin(value: boolean | undefined | null) { this.a = value; }
  /**
   * parses a string into a DeviceCredentials.  
   * @returns a new DeviceCredentials; or undefined if the object could not be parsed.
   */
  static parse(data:string): DeviceCredentials {
    const obj = JSON.parse(data);
    if(obj && isDeviceCredentials(obj)){
      return DeviceCredentials.copy(obj);
    }
    throw Error("Cannot parse DeviceCredentials from " + data);
  } // END parse

  /**
   * Returns a copy of DeviceCredentials or undefined if the original object is not copyable.
   */
  static copy(obj: DeviceCredentialsLike): DeviceCredentials {
    if(isDeviceCredentials(obj)){
      let copy = new DeviceCredentials();
      copy = Object.assign(copy, obj);
      return copy;
    }
    throw Error("Cannot copy DeviceCredentials from Object.");
  } // END copy
} // END DeviceCredentials
