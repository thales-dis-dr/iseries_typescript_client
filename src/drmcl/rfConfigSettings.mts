/*
 * DO NOT EDIT.  Generated Message from WebApi.rfConfigSettings.json
 * Copyright © Thales, 2023
 */

import { ExternalCertMode } from './ExternalCertMode.mts';
import { DocSignerCertMode } from './DocSignerCertMode.mts';
import { TerminalType } from './TerminalType.mts';

export function isRfConfigSettings(obj: any): obj is RfConfigSettingsLike {
  return  obj && // not null AND
    (( obj instanceof RfConfigSettings) || // instance of RfConfigSettings OR
    ( typeof obj === 'object' && /*"bac_fallback_enabled" in obj && */ /*"cert_type_checking_enabled" in obj && */ /*"check_csc_revocation" in obj && */ /*"check_dsc_revocation" in obj && */ /*"chip_in_use_timeout" in obj && */ /*"csc_crl_mode" in obj && */ /*"default_chip_baud_rate" in obj && */ /*"doc_signer_cert_mode" in obj && */ /*"eac_enabled" in obj && */ /*"external_csc_mode" in obj && */ /*"external_cvcerts_mode" in obj && */ /*"external_dsc_mode" in obj && */ /*"external_private_key_mode" in obj && */ /*"force_extended_apdu" in obj && */ /*"max_apdu_attempts" in obj && */ /*"mdl_enabled" in obj && */ /*"open_chip_timeout" in obj && */ /*"pace_cam_enabled" in obj && */ /*"read_binary_buffer_size" in obj && */ /*"read_binary_use_efatr_if_present" in obj && */ /*"read_edl" in obj && */ /*"read_epassport" in obj && */ /*"read_idl" in obj && */ /*"sac_enabled" in obj && */ /*"select_lds_application" in obj && */ /*"terminal_access_rights" in obj && */ /*"terminal_type" in obj && */ /*"validate_security_setup_fields" in obj && */     true) // its an object with all the right properties
    );
}
/**
 */
export interface RfConfigSettingsLike {
/**
 * Enable/Disable whether or not to try BAC if SAC fails.
 */
  bac_fallback_enabled?: boolean | undefined | null;
/**
 * Enable/Disable if certificate type (CV/DV/IS) checking is performed on certificates passed to the reader via callback.
 */
  cert_type_checking_enabled?: boolean | undefined | null;
/**
 * Enable/Disable checking Country Signer Certificate revocation status.
 */
  check_csc_revocation?: boolean | undefined | null;
/**
 * Enable/Disable checking Doc Signer Certificate revocation status.
 */
  check_dsc_revocation?: boolean | undefined | null;
/**
 * Specify how long the reader should wait (milliseconds) to open an RFID chip before giving up, if the chip is already in use.
 */
  chip_in_use_timeout?: number | undefined | null;
/**
 * Specify how to retrieve Certificate Revocation Lists (CRLs) for Country Signer Certificates (CSCs).
 */
  csc_crl_mode?: ExternalCertMode | undefined | null;
/**
 * Specify the default over-aid baud rate to use for RFID chip communication (not applicable to all RF readers).
 */
  default_chip_baud_rate?: number | undefined | null;
/**
 * Specify mode for loading the Doc Signer Certificate.
 */
  doc_signer_cert_mode?: DocSignerCertMode | undefined | null;
/**
 * Enable/Disable EAC for access to protected data groups, such as DG3 (requires EAC certificates for Terminal Authentication).
 */
  eac_enabled?: boolean | undefined | null;
/**
 * Specify mode for getting external Country Signer Certificates (CSCs).
 */
  external_csc_mode?: ExternalCertMode | undefined | null;
/**
 * Specify how to retrieve Country Verifying Certification Authority (CVCA) certificates when EAC is enabled for Terminal Authentication.
 */
  external_cvcerts_mode?: ExternalCertMode | undefined | null;
/**
 * Specify mode for getting external Doc Signer Certificates (DSCs).
 */
  external_dsc_mode?: ExternalCertMode | undefined | null;
/**
 * Specify how to retrieve Inspection System (IS) private keys when EAC is enabled for Terminal Authentication.
 */
  external_private_key_mode?: ExternalCertMode | undefined | null;
/**
 * Enable/Disable always using extended APDU with size specified in read_binary_buffer_size/puReadBinaryBufferSize.
 */
  force_extended_apdu?: boolean | undefined | null;
/**
 * Specify the the maximum number of attempts to try when communicating with the RFID chip.
 */
  max_apdu_attempts?: number | undefined | null;
/**
 * Enable/disable mdl
 */
  mdl_enabled?: boolean | undefined | null;
/**
 * Specify how long the device should wait to open an RFID chip before giving up.
 */
  open_chip_timeout?: number | undefined | null;
/**
 * Enable/Disable PACE-CAM SAC algorithm.
 */
  pace_cam_enabled?: boolean | undefined | null;
/**
 * Specify the default buffer size to request from the RFID chip on every Read Binary APDU.
 */
  read_binary_buffer_size?: number | undefined | null;
/**
 * Enable/Disable whether the device will attempt to read the EF.ATR file on the RFID chip to determine Read Binary buffer size.
 */
  read_binary_use_efatr_if_present?: boolean | undefined | null;
/**
 * Enable/Disable attempting to read the eDL application.
 */
  read_edl?: boolean | undefined | null;
/**
 * Enable/Disable attempting to read the ePassport application.
 */
  read_epassport?: boolean | undefined | null;
/**
 * Enable/Disable attempting to read the iDL application.
 */
  read_idl?: boolean | undefined | null;
/**
 * Enable/Disable SAC.
 */
  sac_enabled?: boolean | undefined | null;
/**
 * Enable/Disable whether to select the LDS application on an RFID chip.
 */
  select_lds_application?: boolean | undefined | null;
/**
 * Specifies the Terminal Access Rights for EACv2 RF documents. Hex String. Default for TerminalType::INSPECTION_SYSTEM is '03'
 */
  terminal_access_rights?: string | undefined | null;
/**
 * Specify mode for the EACv2 terminal type (requires terminal certificates).
 */
  terminal_type?: TerminalType | undefined | null;
/**
 * Enable/Disable whether or not to perform extra validation on chip security setup fields for BAC/SAC (DocNum, DOB, DOE, etc.)  Default is length check only.
 */
  validate_security_setup_fields?: boolean | undefined | null;
  /** Indexer */
  [key: string]: any;
}

/**
 * Settings to specify RF configuration for ePassport security, etc.  Equivalent to RFProcSettings.
 */
export class RfConfigSettings /*extends MessageData implements RfConfigSettingsLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.bac_fallback_enabled = null;
    this.cert_type_checking_enabled = null;
    this.check_csc_revocation = null;
    this.check_dsc_revocation = null;
    this.chip_in_use_timeout = null;
    this.csc_crl_mode = ExternalCertMode.ECM_CERT_FILE_STORE; 
    this.default_chip_baud_rate = null;
    this.doc_signer_cert_mode = DocSignerCertMode.DSCM_ON_CHIP_ONLY; 
    this.eac_enabled = null;
    this.external_csc_mode = ExternalCertMode.ECM_CERT_FILE_STORE; 
    this.external_cvcerts_mode = ExternalCertMode.ECM_CERT_FILE_STORE; 
    this.external_dsc_mode = ExternalCertMode.ECM_CERT_FILE_STORE; 
    this.external_private_key_mode = ExternalCertMode.ECM_CERT_FILE_STORE; 
    this.force_extended_apdu = null;
    this.max_apdu_attempts = null;
    this.mdl_enabled = null;
    this.open_chip_timeout = null;
    this.pace_cam_enabled = null;
    this.read_binary_buffer_size = null;
    this.read_binary_use_efatr_if_present = null;
    this.read_edl = null;
    this.read_epassport = null;
    this.read_idl = null;
    this.sac_enabled = null;
    this.select_lds_application = null;
    this.terminal_access_rights = null;
    this.terminal_type = TerminalType.INSPECTION_SYSTEM; 
    this.validate_security_setup_fields = null;
  }

/**
 * Enable/Disable whether or not to try BAC if SAC fails.
 */
  bac_fallback_enabled?: boolean | undefined | null;
/**
 * Enable/Disable if certificate type (CV/DV/IS) checking is performed on certificates passed to the reader via callback.
 */
  cert_type_checking_enabled?: boolean | undefined | null;
/**
 * Enable/Disable checking Country Signer Certificate revocation status.
 */
  check_csc_revocation?: boolean | undefined | null;
/**
 * Enable/Disable checking Doc Signer Certificate revocation status.
 */
  check_dsc_revocation?: boolean | undefined | null;
/**
 * Specify how long the reader should wait (milliseconds) to open an RFID chip before giving up, if the chip is already in use.
 */
  chip_in_use_timeout?: number | undefined | null;
/**
 * Specify how to retrieve Certificate Revocation Lists (CRLs) for Country Signer Certificates (CSCs).
 */
  csc_crl_mode?: ExternalCertMode | undefined | null;
/**
 * Specify the default over-aid baud rate to use for RFID chip communication (not applicable to all RF readers).
 */
  default_chip_baud_rate?: number | undefined | null;
/**
 * Specify mode for loading the Doc Signer Certificate.
 */
  doc_signer_cert_mode?: DocSignerCertMode | undefined | null;
/**
 * Enable/Disable EAC for access to protected data groups, such as DG3 (requires EAC certificates for Terminal Authentication).
 */
  eac_enabled?: boolean | undefined | null;
/**
 * Specify mode for getting external Country Signer Certificates (CSCs).
 */
  external_csc_mode?: ExternalCertMode | undefined | null;
/**
 * Specify how to retrieve Country Verifying Certification Authority (CVCA) certificates when EAC is enabled for Terminal Authentication.
 */
  external_cvcerts_mode?: ExternalCertMode | undefined | null;
/**
 * Specify mode for getting external Doc Signer Certificates (DSCs).
 */
  external_dsc_mode?: ExternalCertMode | undefined | null;
/**
 * Specify how to retrieve Inspection System (IS) private keys when EAC is enabled for Terminal Authentication.
 */
  external_private_key_mode?: ExternalCertMode | undefined | null;
/**
 * Enable/Disable always using extended APDU with size specified in read_binary_buffer_size/puReadBinaryBufferSize.
 */
  force_extended_apdu?: boolean | undefined | null;
/**
 * Specify the the maximum number of attempts to try when communicating with the RFID chip.
 */
  max_apdu_attempts?: number | undefined | null;
/**
 * Enable/disable mdl
 */
  mdl_enabled?: boolean | undefined | null;
/**
 * Specify how long the device should wait to open an RFID chip before giving up.
 */
  open_chip_timeout?: number | undefined | null;
/**
 * Enable/Disable PACE-CAM SAC algorithm.
 */
  pace_cam_enabled?: boolean | undefined | null;
/**
 * Specify the default buffer size to request from the RFID chip on every Read Binary APDU.
 */
  read_binary_buffer_size?: number | undefined | null;
/**
 * Enable/Disable whether the device will attempt to read the EF.ATR file on the RFID chip to determine Read Binary buffer size.
 */
  read_binary_use_efatr_if_present?: boolean | undefined | null;
/**
 * Enable/Disable attempting to read the eDL application.
 */
  read_edl?: boolean | undefined | null;
/**
 * Enable/Disable attempting to read the ePassport application.
 */
  read_epassport?: boolean | undefined | null;
/**
 * Enable/Disable attempting to read the iDL application.
 */
  read_idl?: boolean | undefined | null;
/**
 * Enable/Disable SAC.
 */
  sac_enabled?: boolean | undefined | null;
/**
 * Enable/Disable whether to select the LDS application on an RFID chip.
 */
  select_lds_application?: boolean | undefined | null;
/**
 * Specifies the Terminal Access Rights for EACv2 RF documents. Hex String. Default for TerminalType::INSPECTION_SYSTEM is '03'
 */
  terminal_access_rights?: string | undefined | null;
/**
 * Specify mode for the EACv2 terminal type (requires terminal certificates).
 */
  terminal_type?: TerminalType | undefined | null;
/**
 * Enable/Disable whether or not to perform extra validation on chip security setup fields for BAC/SAC (DocNum, DOB, DOE, etc.)  Default is length check only.
 */
  validate_security_setup_fields?: boolean | undefined | null;
  /**
   * parses a string into a RfConfigSettings.  
   * @returns a new RfConfigSettings; or undefined if the object could not be parsed.
   */
  static parse(data:string): RfConfigSettings {
    const obj = JSON.parse(data);
    if(obj && isRfConfigSettings(obj)){
      return RfConfigSettings.copy(obj);
    }
    throw Error("Cannot parse RfConfigSettings from " + data);
  } // END parse

  /**
   * Returns a copy of RfConfigSettings or undefined if the original object is not copyable.
   */
  static copy(obj: RfConfigSettingsLike): RfConfigSettings {
    if(isRfConfigSettings(obj)){
      let copy = new RfConfigSettings();
      copy = Object.assign(copy, obj);
      return copy;
    }
    throw Error("Cannot copy RfConfigSettings from Object.");
  } // END copy
} // END RfConfigSettings
