/*
 * DO NOT EDIT.  Generated Message from WebApi.connectedMessage.json
 * Copyright © Thales, 2023
 */

export function isConnectedMessage(obj: any): obj is ConnectedMessageLike {
  return  obj && // not null AND
    (( obj instanceof ConnectedMessage) || // instance of ConnectedMessage OR
    ( typeof obj === 'object' && "version" in obj &&     true) // its an object with all the right properties
    );
}
/**
 */
export interface ConnectedMessageLike {
/**
 * The version of the message protocol being used.
 */
  version: number;
  /** Indexer */
  [key: string]: any;
}

/**
 * A CONNECT:1 message is sent to establish the connection.  The server will respond with CONNECTED:2
 */
export class ConnectedMessage /*extends MessageData implements ConnectedMessageLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.version = 0;
  }

/**
 * The version of the message protocol being used.
 */
  version: number;
  /**
   * parses a string into a ConnectedMessage.  
   * @returns a new ConnectedMessage; or undefined if the object could not be parsed.
   */
  static parse(data:string): ConnectedMessage {
    const obj = JSON.parse(data);
    if(obj && isConnectedMessage(obj)){
      return ConnectedMessage.copy(obj);
    }
    throw Error("Cannot parse ConnectedMessage from " + data);
  } // END parse

  /**
   * Returns a copy of ConnectedMessage or undefined if the original object is not copyable.
   */
  static copy(obj: ConnectedMessageLike): ConnectedMessage {
    if(isConnectedMessage(obj)){
      let copy = new ConnectedMessage();
      copy = Object.assign(copy, obj);
      return copy;
    }
    throw Error("Cannot copy ConnectedMessage from Object.");
  } // END copy
} // END ConnectedMessage
