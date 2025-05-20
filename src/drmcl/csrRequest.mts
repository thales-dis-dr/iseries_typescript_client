/*
 * DO NOT EDIT.  Generated Message from WebApi.csrRequest.json
 * Copyright © Thales, 2023
 */

export function isCsrRequest(obj: any): obj is CsrRequestLike {
  return  obj && // not null AND
    (( obj instanceof CsrRequest) || // instance of CsrRequest OR
    ( typeof obj === 'object' && /*"c" in obj && */ /*"cn" in obj && */ /*"email" in obj && */ /*"l" in obj && */ /*"o" in obj && */ /*"ou" in obj && */ /*"s" in obj && */     true) // its an object with all the right properties
    );
}
/**
 */
export interface CsrRequestLike {
/**
 * Two-letter country code where organization is located.
 */
  c?: string | undefined | null;
/**
 * The fully qualified domain name (FQDN) of your server.
 */
  cn?: string | undefined | null;
/**
 * Email address used to contact your organization
 */
  email?: string | undefined | null;
/**
 * The city where your organization is located. This shouldn’t be abbreviated.
 */
  l?: string | undefined | null;
/**
 * The legal name of your organization. Do not abbreviate and include any suffixes, such as Inc., Corp., or LLC.
 */
  o?: string | undefined | null;
/**
 * The division of your organization handling the certificate.
 */
  ou?: string[] | undefined | null;
/**
 * The state/region where your organization is located. This shouldn't be abbreviated.
 */
  s?: string | undefined | null;
  /** Indexer */
  [key: string]: any;
}

/**
 * Request to generate a CSR
 */
export class CsrRequest /*extends MessageData implements CsrRequestLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.c = null;
    this.cn = null;
    this.email = null;
    this.l = null;
    this.o = null;
    this.ou = null;
    this.s = null;
  }

/**
 * Two-letter country code where organization is located.
 */
  c?: string | undefined | null;
/**
 * The fully qualified domain name (FQDN) of your server.
 */
  cn?: string | undefined | null;
/**
 * Email address used to contact your organization
 */
  email?: string | undefined | null;
/**
 * The city where your organization is located. This shouldn’t be abbreviated.
 */
  l?: string | undefined | null;
/**
 * The legal name of your organization. Do not abbreviate and include any suffixes, such as Inc., Corp., or LLC.
 */
  o?: string | undefined | null;
/**
 * The division of your organization handling the certificate.
 */
  ou?: string[] | undefined | null;
/**
 * The state/region where your organization is located. This shouldn't be abbreviated.
 */
  s?: string | undefined | null;
  /**
   * parses a string into a CsrRequest.  
   * @returns a new CsrRequest; or undefined if the object could not be parsed.
   */
  static parse(data:string): CsrRequest {
    const obj = JSON.parse(data);
    if(obj && isCsrRequest(obj)){
      return CsrRequest.copy(obj);
    }
    throw Error("Cannot parse CsrRequest from " + data);
  } // END parse

  /**
   * Returns a copy of CsrRequest or undefined if the original object is not copyable.
   */
  static copy(obj: CsrRequestLike): CsrRequest {
    if(isCsrRequest(obj)){
      let copy = new CsrRequest();
      copy = Object.assign(copy, obj);
      return copy;
    }
    throw Error("Cannot copy CsrRequest from Object.");
  } // END copy
} // END CsrRequest
