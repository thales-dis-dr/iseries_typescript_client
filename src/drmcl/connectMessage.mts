/*
 * DO NOT EDIT.  Generated Message from WebApi.connectMessage.json
 * Copyright © Thales, 2023
 */

export function isConnectMessage(obj: any): obj is ConnectMessageLike {
  return  obj && // not null AND
    (( obj instanceof ConnectMessage) || // instance of ConnectMessage OR
    ( typeof obj === 'object' && "authKey" in obj && "authKeyID" in obj &&     true) // its an object with all the right properties
    );
}
/**
 */
export interface ConnectMessageLike {
/**
 * The key used to authenticate the caller.
 */
  authKey: string;
/**
 * The key label of the key used to authenticate the caller.
 */
  authKeyID: string;
  /** Indexer */
  [key: string]: any;
}

/**
 * A CONNECT:1 message is sent to establish the connection.  The server will respond with CONNECTED:2
 */
export class ConnectMessage /*extends MessageData implements ConnectMessageLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.authKey = "";
    this.authKeyID = "";
  }

/**
 * The key used to authenticate the caller.
 */
  authKey: string;
/**
 * The key label of the key used to authenticate the caller.
 */
  authKeyID: string;
  /**
   * parses a string into a ConnectMessage.  
   * @returns a new ConnectMessage; or undefined if the object could not be parsed.
   */
  static parse(data:string): ConnectMessage {
    const obj = JSON.parse(data);
    if(obj && isConnectMessage(obj)){
      return ConnectMessage.copy(obj);
    }
    throw Error("Cannot parse ConnectMessage from " + data);
  } // END parse

  /**
   * Returns a copy of ConnectMessage or undefined if the original object is not copyable.
   */
  static copy(obj: ConnectMessageLike): ConnectMessage {
    if(isConnectMessage(obj)){
      let copy = new ConnectMessage();
      copy = Object.assign(copy, obj);
      return copy;
    }
    throw Error("Cannot copy ConnectMessage from Object.");
  } // END copy
} // END ConnectMessage
