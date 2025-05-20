/*
 * DO NOT EDIT.  Generated Enum from WebApi.ExternalCertMode.json
 * Copyright © Thales, 2023
 */

/** 
 * Enumeration of the external certificate sources for device RF read security operations.
 */
export enum ExternalCertMode {
  // START ENUMS 
  /**
   * Retrieve a certificate from a number of certificate files contained in a local directory
   */
  ECM_CERT_FILE_STORE = 1, 
  /**
   * Retrieve a certificate by having the device call back to the hosting application
   */
  ECM_CERT_CALLBACK = 2, 
  /**
   * Request that a signature is generated over some data provided by the device to verify Terminal Authentication
   */
  ECM_SIGN_REQUEST = 3, 
  // END ENUMS 
}
