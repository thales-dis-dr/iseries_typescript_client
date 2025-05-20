/*
 * DO NOT EDIT.  Generated Message from WebApi.sessionOpenedMessage.json
 * Copyright © Thales, 2023
 */

export function isSessionOpenedMessage(obj: any): obj is SessionOpenedMessageLike {
  return  obj && // not null AND
    (( obj instanceof SessionOpenedMessage) || // instance of SessionOpenedMessage OR
    ( typeof obj === 'object' && "id" in obj &&     true) // its an object with all the right properties
    );
}
/**
 */
export interface SessionOpenedMessageLike {
/**
 * The session id value.
 */
  id: number;
  /** Indexer */
  [key: string]: any;
}

/**
 * Returned when a session is succefully opened. see SESSION_OPENED
 */
export class SessionOpenedMessage /*extends MessageData implements SessionOpenedMessageLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.id = 0;
  }

/**
 * The session id value.
 */
  id: number;
  /**
   * parses a string into a SessionOpenedMessage.  
   * @returns a new SessionOpenedMessage; or undefined if the object could not be parsed.
   */
  static parse(data:string): SessionOpenedMessage {
    const obj = JSON.parse(data);
    if(obj && isSessionOpenedMessage(obj)){
      return SessionOpenedMessage.copy(obj);
    }
    throw Error("Cannot parse SessionOpenedMessage from " + data);
  } // END parse

  /**
   * Returns a copy of SessionOpenedMessage or undefined if the original object is not copyable.
   */
  static copy(obj: SessionOpenedMessageLike): SessionOpenedMessage {
    if(isSessionOpenedMessage(obj)){
      let copy = new SessionOpenedMessage();
      copy = Object.assign(copy, obj);
      return copy;
    }
    throw Error("Cannot copy SessionOpenedMessage from Object.");
  } // END copy
} // END SessionOpenedMessage
