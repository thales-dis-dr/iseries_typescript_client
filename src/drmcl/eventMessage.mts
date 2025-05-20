/*
 * DO NOT EDIT.  Generated Message from WebApi.eventMessage.json
 * Copyright © Thales, 2023
 */

import { EventCodes } from './EventCodes.mjs';

export function isEventMessage(obj: any): obj is EventMessageLike {
  return  obj && // not null AND
    (( obj instanceof EventMessage) || // instance of EventMessage OR
    ( typeof obj === 'object' && "eventId" in obj &&     true) // its an object with all the right properties
    );
}
/**
 */
export interface EventMessageLike {
/**
 */
  eventId: EventCodes;
  /** Indexer */
  [key: string]: any;
}

/**
 */
export class EventMessage /*extends MessageData implements EventMessageLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.eventId = EventCodes.DOC_ON_WINDOW; 
  }

/**
 */
  eventId: EventCodes;
  /**
   * parses a string into a EventMessage.  
   * @returns a new EventMessage; or undefined if the object could not be parsed.
   */
  static parse(data:string): EventMessage {
    const obj = JSON.parse(data);
    if(obj && isEventMessage(obj)){
      return EventMessage.copy(obj);
    }
    throw Error("Cannot parse EventMessage from " + data);
  } // END parse

  /**
   * Returns a copy of EventMessage or undefined if the original object is not copyable.
   */
  static copy(obj: EventMessageLike): EventMessage {
    if(isEventMessage(obj)){
      let copy = new EventMessage();
      copy = Object.assign(copy, obj);
      return copy;
    }
    throw Error("Cannot copy EventMessage from Object.");
  } // END copy
} // END EventMessage
