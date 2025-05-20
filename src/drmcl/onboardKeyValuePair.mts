/*
 * DO NOT EDIT.  Generated Message from WebApi.onboardKeyValuePair.json
 * Copyright © Thales, 2023
 */

export function isOnboardKeyValuePair(obj: any): obj is OnboardKeyValuePairLike {
  return  obj && // not null AND
    (( obj instanceof OnboardKeyValuePair) || // instance of OnboardKeyValuePair OR
    ( typeof obj === 'object' && "k" in obj && "v" in obj &&     true) // its an object with all the right properties
    );
}
/**
 */
export interface OnboardKeyValuePairLike {
/**
 * A Key value, such as Description or Location
 * Alias for key
 */
  k: string;
/**
 * Value
 * Alias for value
 */
  v: string;
  /** Indexer */
  [key: string]: any;
}

/**
 * Key Value pairs send to the onboarding engine
 */
export class OnboardKeyValuePair /*extends MessageData implements OnboardKeyValuePairLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.k = "";
    this.v = "";
  }

/**
 * A Key value, such as Description or Location
 * Alias for key
 */
  k: string;
  get key(): string { return this.k; }
  set key(value: string) { this.k = value; }
/**
 * Value
 * Alias for value
 */
  v: string;
  get value(): string { return this.v; }
  set value(value: string) { this.v = value; }
  /**
   * parses a string into a OnboardKeyValuePair.  
   * @returns a new OnboardKeyValuePair; or undefined if the object could not be parsed.
   */
  static parse(data:string): OnboardKeyValuePair {
    const obj = JSON.parse(data);
    if(obj && isOnboardKeyValuePair(obj)){
      return OnboardKeyValuePair.copy(obj);
    }
    throw Error("Cannot parse OnboardKeyValuePair from " + data);
  } // END parse

  /**
   * Returns a copy of OnboardKeyValuePair or undefined if the original object is not copyable.
   */
  static copy(obj: OnboardKeyValuePairLike): OnboardKeyValuePair {
    if(isOnboardKeyValuePair(obj)){
      let copy = new OnboardKeyValuePair();
      copy = Object.assign(copy, obj);
      return copy;
    }
    throw Error("Cannot copy OnboardKeyValuePair from Object.");
  } // END copy
} // END OnboardKeyValuePair
