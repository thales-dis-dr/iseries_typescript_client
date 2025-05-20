/*
 * DO NOT EDIT.  Generated Enum from WebApi.ReaderCheckDigitResult.json
 * Copyright © Thales, 2023
 */

/** 
 * ReaderCheckDigitResult
 */
export enum ReaderCheckDigitResult {
  // START ENUMS 
  /**
   * Check digit is invalid
   */
  CDR_INVALID = 0, 
  /**
   * Check digit is valid
   */
  CDR_VALID = 1, 
  /**
   * Check digit is not valid according to ICAO rules, but this maybe expected
   */
  CDR_WARNING = 2, 
  /**
   * Check digit validation has not been carried out
   */
  CDR_NOTVALIDATED = 3, 
  // END ENUMS 
}
