/*
 * DO NOT EDIT.  Generated Enum from WebApi.DocSignerCertMode.json
 * Copyright © Thales, 2023
 */

/** 
 * Defines the different ways of retrieving a Document Signer Certificate (DSC) in order to validate the signature in the Document Security Object
 */
export enum DocSignerCertMode {
  // START ENUMS 
  /**
   * Load the DSC from the RF chip only
   */
  DSCM_ON_CHIP_ONLY = 1, 
  /**
   * Load DSC from external source
   */
  DSCM_EXTERNAL_ONLY = 2, 
  /**
   * Attempt to load the DSC from the RF chip. If none is loaded, load from an external source
   */
  DSCM_ON_CHIP_THEN_EXTERNAL = 3, 
  /**
   * Attempt to load the DSC from an external source. If none is loaded, load from the RF chip
   */
  DSCM_EXTERNAL_THEN_ON_CHIP = 4, 
  // END ENUMS 
}
