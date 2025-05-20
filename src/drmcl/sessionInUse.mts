/*
 * DO NOT EDIT.  Generated Message from WebApi.sessionInUse.json
 * Copyright © Thales, 2023
 */

export function isSessionInUse(obj: any): obj is SessionInUseLike {
  return  obj && // not null AND
    (( obj instanceof SessionInUse) || // instance of SessionInUse OR
    ( typeof obj === 'object' && "id" in obj &&     true) // its an object with all the right properties
    );
}
/**
 */
export interface SessionInUseLike {
/**
 * The session id value that has ownership of the session.
 */
  id: number;
  /** Indexer */
  [key: string]: any;
}

/**
 * Returned when a session was not available. see SESSION_IN_USE
 */
export class SessionInUse /*extends MessageData implements SessionInUseLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.id = 0;
  }

/**
 * The session id value that has ownership of the session.
 */
  id: number;
  /**
   * parses a string into a SessionInUse.  
   * @returns a new SessionInUse; or undefined if the object could not be parsed.
   */
  static parse(data:string): SessionInUse {
    const obj = JSON.parse(data);
    if(obj && isSessionInUse(obj)){
      return SessionInUse.copy(obj);
    }
    throw Error("Cannot parse SessionInUse from " + data);
  } // END parse

  /**
   * Returns a copy of SessionInUse or undefined if the original object is not copyable.
   */
  static copy(obj: SessionInUseLike): SessionInUse {
    if(isSessionInUse(obj)){
      let copy = new SessionInUse();
      copy = Object.assign(copy, obj);
      return copy;
    }
    throw Error("Cannot copy SessionInUse from Object.");
  } // END copy
} // END SessionInUse
