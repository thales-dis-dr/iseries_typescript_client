/*
 * DO NOT EDIT.  Generated Message from WebApi.exchangeKey.json
 * Copyright © Thales, 2023
 */

export function isExchangeKey(obj: any): obj is ExchangeKeyLike {
  return  obj && // not null AND
    (( obj instanceof ExchangeKey) || // instance of ExchangeKey OR
    ( typeof obj === 'object' && "iv" in obj && "k" in obj && "e" in obj &&     true) // its an object with all the right properties
    );
}
/**
 */
export interface ExchangeKeyLike {
/**
 */
  iv: string;
/**
 * Alias for publicKey
 */
  k: string;
/**
 * Alias for symmetricKey
 */
  e: string;
  /** Indexer */
  [key: string]: any;
}

/**
 * Used to send public keys for ECDH key exchange
 */
export class ExchangeKey /*extends MessageData implements ExchangeKeyLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.iv = "";
    this.k = "";
    this.e = "";
  }

/**
 */
  iv: string;
/**
 * Alias for publicKey
 */
  k: string;
  get publicKey(): string { return this.k; }
  set publicKey(value: string) { this.k = value; }
/**
 * Alias for symmetricKey
 */
  e: string;
  get symmetricKey(): string { return this.e; }
  set symmetricKey(value: string) { this.e = value; }
  /**
   * parses a string into a ExchangeKey.  
   * @returns a new ExchangeKey; or undefined if the object could not be parsed.
   */
  static parse(data:string): ExchangeKey {
    const obj = JSON.parse(data);
    if(obj && isExchangeKey(obj)){
      return ExchangeKey.copy(obj);
    }
    throw Error("Cannot parse ExchangeKey from " + data);
  } // END parse

  /**
   * Returns a copy of ExchangeKey or undefined if the original object is not copyable.
   */
  static copy(obj: ExchangeKeyLike): ExchangeKey {
    if(isExchangeKey(obj)){
      let copy = new ExchangeKey();
      copy = Object.assign(copy, obj);
      return copy;
    }
    throw Error("Cannot copy ExchangeKey from Object.");
  } // END copy
} // END ExchangeKey
