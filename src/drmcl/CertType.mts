/*
 * DO NOT EDIT.  Generated Enum from WebApi.CertType.json
 * Copyright © Thales, 2023
 */

/** 
 * Enumeration of the certificate types
 */
export enum CertType {
  // START ENUMS 
  /**
   * No certificate.
   */
  NONE = 0, 
  /**
   * A Document Signer Certificate (DSC).
   */
  DOCSIGNERCERT = 1, 
  /**
   * A Country Signer Certificate (CSC).
   */
  COUNTRYSIGNERCERT = 2, 
  /**
   * A Certificate Revocation List (CRL).
   */
  CRL = 3, 
  /**
   * A Country Verifying Certification Authority (CVCA) certificate.
   */
  CVCACERT = 4, 
  /**
   * A Document Verifier (DV) certificate.
   */
  DVCERT = 5, 
  /**
   * An Inspection System (IS) certificate.
   */
  ISCERT = 6, 
  /**
   * A PKCS8 private key for an IS certificate.
   */
  ISPRIVATEKEY = 7, 
  /**
   * An Authentication Terminal (AT) certificate.
   */
  ATCERT = 8, 
  CERTCHAIN = 17, 
  // END ENUMS 
}
