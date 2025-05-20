/*
 * DO NOT EDIT.  Generated Message from WebApi.rfDataToSendSettings.json
 * Copyright © Thales, 2023
 */

export function isRfDataToSendSettings(obj: any): obj is RfDataToSendSettingsLike {
  return  obj && // not null AND
    (( obj instanceof RfDataToSendSettings) || // instance of RfDataToSendSettings OR
    ( typeof obj === 'object' && /*"active_authentication" in obj && */ /*"air_baud_rate" in obj && */ /*"bac_status" in obj && */ /*"chip_authentication_status" in obj && */ /*"chip_id" in obj && */ /*"crosscheck_efcom_efsod" in obj && */ /*"dg1_edl_data" in obj && */ /*"dg1_file" in obj && */ /*"dg1_file_edl" in obj && */ /*"dg1_mrz_data" in obj && */ /*"dg10_file" in obj && */ /*"dg10_file_edl" in obj && */ /*"dg11_file" in obj && */ /*"dg11_file_edl" in obj && */ /*"dg12_file" in obj && */ /*"dg12_file_edl" in obj && */ /*"dg13_file" in obj && */ /*"dg13_file_edl" in obj && */ /*"dg14_file" in obj && */ /*"dg14_file_edl" in obj && */ /*"dg15_file" in obj && */ /*"dg16_file" in obj && */ /*"dg2_face_jpeg" in obj && */ /*"dg2_file" in obj && */ /*"dg2_file_edl" in obj && */ /*"dg3_file" in obj && */ /*"dg3_file_edl" in obj && */ /*"dg3_fingerprints" in obj && */ /*"dg4_file" in obj && */ /*"dg4_file_edl" in obj && */ /*"dg5_file" in obj && */ /*"dg5_file_edl" in obj && */ /*"dg6_edl_face_jpeg" in obj && */ /*"dg6_file" in obj && */ /*"dg6_file_edl" in obj && */ /*"dg7_edl_fingerprints" in obj && */ /*"dg7_file" in obj && */ /*"dg7_file_edl" in obj && */ /*"dg8_file" in obj && */ /*"dg8_file_edl" in obj && */ /*"dg9_file" in obj && */ /*"dg9_file_edl" in obj && */ /*"doc_signer_cert" in obj && */ /*"ef_card_access_file" in obj && */ /*"ef_card_security_file" in obj && */ /*"ef_chip_security_file" in obj && */ /*"ef_com_file" in obj && */ /*"ef_cvca_file" in obj && */ /*"ef_sod_file" in obj && */ /*"efcom_dg_map" in obj && */ /*"efsod_hash_map" in obj && */ /*"passive_authentication" in obj && */ /*"sac_status" in obj && */ /*"terminal_authentication_status" in obj && */ /*"validate_dgs" in obj && */ /*"validate_doc_signer_cert" in obj && */ /*"validate_signature" in obj && */ /*"validate_signed_attrs" in obj && */     true) // its an object with all the right properties
    );
}
/**
 */
export interface RfDataToSendSettingsLike {
/**
 * Return the Active Authentication status.
 */
  active_authentication?: number | undefined | null;
/**
 * Returns the over-air baud rate used for RF. Set to to 0 for off.
 */
  air_baud_rate?: number | undefined | null;
/**
 * Return BAC status.
 */
  bac_status?: number | undefined | null;
/**
 * Return the Chip Authentication status.
 */
  chip_authentication_status?: number | undefined | null;
/**
 * Returns the RF chip ID. Set to to 0 for off.
 */
  chip_id?: number | undefined | null;
/**
 * Cross-check the EF.COM and EF.SOD.
 */
  crosscheck_efcom_efsod?: number | undefined | null;
/**
 * Return the DG1 eDL data.
 */
  dg1_edl_data?: number | undefined | null;
/**
 * Return the DG1 file.
 */
  dg1_file?: number | undefined | null;
/**
 * Return the eDL DG1 file.
 */
  dg1_file_edl?: number | undefined | null;
/**
 * Return the ePassport DG1 MRZ Codeline Data. Set to to 0 for off.
 */
  dg1_mrz_data?: number | undefined | null;
/**
 * Return the DG10 file.
 */
  dg10_file?: number | undefined | null;
/**
 * Return the eDL DG10 file.
 */
  dg10_file_edl?: number | undefined | null;
/**
 * Return the DG11 file.
 */
  dg11_file?: number | undefined | null;
/**
 * Return the eDL DG11 file.
 */
  dg11_file_edl?: number | undefined | null;
/**
 * Return the DG12 file.
 */
  dg12_file?: number | undefined | null;
/**
 * Return the eDL DG12 file.
 */
  dg12_file_edl?: number | undefined | null;
/**
 * Return the DG13 file.
 */
  dg13_file?: number | undefined | null;
/**
 * Return the eDL DG13 file.
 */
  dg13_file_edl?: number | undefined | null;
/**
 * Return the DG14 file.
 */
  dg14_file?: number | undefined | null;
/**
 * Return the eDL DG14 file.
 */
  dg14_file_edl?: number | undefined | null;
/**
 * Return the DG15 file.
 */
  dg15_file?: number | undefined | null;
/**
 * Return the DG16 file.
 */
  dg16_file?: number | undefined | null;
/**
 * Return the ePassport DG2 facial image. Set to to 0 for off.
 */
  dg2_face_jpeg?: number | undefined | null;
/**
 * Return the DG2 file.
 */
  dg2_file?: number | undefined | null;
/**
 * Return the eDL DG2 file.
 */
  dg2_file_edl?: number | undefined | null;
/**
 * Return the DG3 file.
 */
  dg3_file?: number | undefined | null;
/**
 * Return the eDL DG3 file.
 */
  dg3_file_edl?: number | undefined | null;
/**
 * Return the ePassport DG3 fingerprints (requires EAC certificates for Terminal Authentication). Set to to 0 for off.
 */
  dg3_fingerprints?: number | undefined | null;
/**
 * Return the DG4 file.
 */
  dg4_file?: number | undefined | null;
/**
 * Return the eDL DG4 file.
 */
  dg4_file_edl?: number | undefined | null;
/**
 * Return the DG5 file.
 */
  dg5_file?: number | undefined | null;
/**
 * Return the eDL DG5 file.
 */
  dg5_file_edl?: number | undefined | null;
/**
 * Return the DG6 eDL fingerprints.
 */
  dg6_edl_face_jpeg?: number | undefined | null;
/**
 * Return the DG6 file.
 */
  dg6_file?: number | undefined | null;
/**
 * Return the eDL DG6 file.
 */
  dg6_file_edl?: number | undefined | null;
/**
 * Return the DG7 eDL fingerprints (requires EAC certificates for Terminal Authentication).
 */
  dg7_edl_fingerprints?: number | undefined | null;
/**
 * Return the DG7 file.
 */
  dg7_file?: number | undefined | null;
/**
 * Return the eDL DG7 file.
 */
  dg7_file_edl?: number | undefined | null;
/**
 * Return the DG8 file.
 */
  dg8_file?: number | undefined | null;
/**
 * Return the eDL DG8 file.
 */
  dg8_file_edl?: number | undefined | null;
/**
 * Return the DG9 file.
 */
  dg9_file?: number | undefined | null;
/**
 * Return the eDL DG9 file.
 */
  dg9_file_edl?: number | undefined | null;
/**
 * Return the Doc Signer Certificate from the chip.
 */
  doc_signer_cert?: number | undefined | null;
/**
 * Return the EF.CardAccess file.
 */
  ef_card_access_file?: number | undefined | null;
/**
 * Return the EF.CardSecurity file.
 */
  ef_card_security_file?: number | undefined | null;
/**
 * Return the EF.ChipSecurity file.
 */
  ef_chip_security_file?: number | undefined | null;
/**
 * Return the EF.COM file.
 */
  ef_com_file?: number | undefined | null;
/**
 * Return the EF.CVCA file.
 */
  ef_cvca_file?: number | undefined | null;
/**
 * Return the EF.SOD file.
 */
  ef_sod_file?: number | undefined | null;
/**
 * Return the EF.COM DG presence map.
 */
  efcom_dg_map?: number | undefined | null;
/**
 * Return the EF.SOD hash map.
 */
  efsod_hash_map?: number | undefined | null;
/**
 * Return the Passive Authentication status.
 */
  passive_authentication?: number | undefined | null;
/**
 * Return SAC status.
 */
  sac_status?: number | undefined | null;
/**
 * Return the Terminal Authentication status.
 */
  terminal_authentication_status?: number | undefined | null;
/**
 * Validate all selected DGs.
 */
  validate_dgs?: boolean | undefined | null;
/**
 * Validate the Doc Signer certificate.
 */
  validate_doc_signer_cert?: number | undefined | null;
/**
 * Validate signature. Set to to 0 for off. max value is PASSPORT_DATA_ID::NUM_DATA_IDS
 */
  validate_signature?: number | undefined | null;
/**
 * Validate signed attributes. Set to to 0 for off.
 */
  validate_signed_attrs?: number | undefined | null;
  /** Indexer */
  [key: string]: any;
}

/**
 * Settings to specify RF data items for the reader to process and return to the client.  Equivalent to RFDataToSend.
 */
export class RfDataToSendSettings /*extends MessageData implements RfDataToSendSettingsLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.active_authentication = null;
    this.air_baud_rate = null;
    this.bac_status = null;
    this.chip_authentication_status = null;
    this.chip_id = null;
    this.crosscheck_efcom_efsod = null;
    this.dg1_edl_data = null;
    this.dg1_file = null;
    this.dg1_file_edl = null;
    this.dg1_mrz_data = null;
    this.dg10_file = null;
    this.dg10_file_edl = null;
    this.dg11_file = null;
    this.dg11_file_edl = null;
    this.dg12_file = null;
    this.dg12_file_edl = null;
    this.dg13_file = null;
    this.dg13_file_edl = null;
    this.dg14_file = null;
    this.dg14_file_edl = null;
    this.dg15_file = null;
    this.dg16_file = null;
    this.dg2_face_jpeg = null;
    this.dg2_file = null;
    this.dg2_file_edl = null;
    this.dg3_file = null;
    this.dg3_file_edl = null;
    this.dg3_fingerprints = null;
    this.dg4_file = null;
    this.dg4_file_edl = null;
    this.dg5_file = null;
    this.dg5_file_edl = null;
    this.dg6_edl_face_jpeg = null;
    this.dg6_file = null;
    this.dg6_file_edl = null;
    this.dg7_edl_fingerprints = null;
    this.dg7_file = null;
    this.dg7_file_edl = null;
    this.dg8_file = null;
    this.dg8_file_edl = null;
    this.dg9_file = null;
    this.dg9_file_edl = null;
    this.doc_signer_cert = null;
    this.ef_card_access_file = null;
    this.ef_card_security_file = null;
    this.ef_chip_security_file = null;
    this.ef_com_file = null;
    this.ef_cvca_file = null;
    this.ef_sod_file = null;
    this.efcom_dg_map = null;
    this.efsod_hash_map = null;
    this.passive_authentication = null;
    this.sac_status = null;
    this.terminal_authentication_status = null;
    this.validate_dgs = null;
    this.validate_doc_signer_cert = null;
    this.validate_signature = null;
    this.validate_signed_attrs = null;
  }

/**
 * Return the Active Authentication status.
 */
  active_authentication?: number | undefined | null;
/**
 * Returns the over-air baud rate used for RF. Set to to 0 for off.
 */
  air_baud_rate?: number | undefined | null;
/**
 * Return BAC status.
 */
  bac_status?: number | undefined | null;
/**
 * Return the Chip Authentication status.
 */
  chip_authentication_status?: number | undefined | null;
/**
 * Returns the RF chip ID. Set to to 0 for off.
 */
  chip_id?: number | undefined | null;
/**
 * Cross-check the EF.COM and EF.SOD.
 */
  crosscheck_efcom_efsod?: number | undefined | null;
/**
 * Return the DG1 eDL data.
 */
  dg1_edl_data?: number | undefined | null;
/**
 * Return the DG1 file.
 */
  dg1_file?: number | undefined | null;
/**
 * Return the eDL DG1 file.
 */
  dg1_file_edl?: number | undefined | null;
/**
 * Return the ePassport DG1 MRZ Codeline Data. Set to to 0 for off.
 */
  dg1_mrz_data?: number | undefined | null;
/**
 * Return the DG10 file.
 */
  dg10_file?: number | undefined | null;
/**
 * Return the eDL DG10 file.
 */
  dg10_file_edl?: number | undefined | null;
/**
 * Return the DG11 file.
 */
  dg11_file?: number | undefined | null;
/**
 * Return the eDL DG11 file.
 */
  dg11_file_edl?: number | undefined | null;
/**
 * Return the DG12 file.
 */
  dg12_file?: number | undefined | null;
/**
 * Return the eDL DG12 file.
 */
  dg12_file_edl?: number | undefined | null;
/**
 * Return the DG13 file.
 */
  dg13_file?: number | undefined | null;
/**
 * Return the eDL DG13 file.
 */
  dg13_file_edl?: number | undefined | null;
/**
 * Return the DG14 file.
 */
  dg14_file?: number | undefined | null;
/**
 * Return the eDL DG14 file.
 */
  dg14_file_edl?: number | undefined | null;
/**
 * Return the DG15 file.
 */
  dg15_file?: number | undefined | null;
/**
 * Return the DG16 file.
 */
  dg16_file?: number | undefined | null;
/**
 * Return the ePassport DG2 facial image. Set to to 0 for off.
 */
  dg2_face_jpeg?: number | undefined | null;
/**
 * Return the DG2 file.
 */
  dg2_file?: number | undefined | null;
/**
 * Return the eDL DG2 file.
 */
  dg2_file_edl?: number | undefined | null;
/**
 * Return the DG3 file.
 */
  dg3_file?: number | undefined | null;
/**
 * Return the eDL DG3 file.
 */
  dg3_file_edl?: number | undefined | null;
/**
 * Return the ePassport DG3 fingerprints (requires EAC certificates for Terminal Authentication). Set to to 0 for off.
 */
  dg3_fingerprints?: number | undefined | null;
/**
 * Return the DG4 file.
 */
  dg4_file?: number | undefined | null;
/**
 * Return the eDL DG4 file.
 */
  dg4_file_edl?: number | undefined | null;
/**
 * Return the DG5 file.
 */
  dg5_file?: number | undefined | null;
/**
 * Return the eDL DG5 file.
 */
  dg5_file_edl?: number | undefined | null;
/**
 * Return the DG6 eDL fingerprints.
 */
  dg6_edl_face_jpeg?: number | undefined | null;
/**
 * Return the DG6 file.
 */
  dg6_file?: number | undefined | null;
/**
 * Return the eDL DG6 file.
 */
  dg6_file_edl?: number | undefined | null;
/**
 * Return the DG7 eDL fingerprints (requires EAC certificates for Terminal Authentication).
 */
  dg7_edl_fingerprints?: number | undefined | null;
/**
 * Return the DG7 file.
 */
  dg7_file?: number | undefined | null;
/**
 * Return the eDL DG7 file.
 */
  dg7_file_edl?: number | undefined | null;
/**
 * Return the DG8 file.
 */
  dg8_file?: number | undefined | null;
/**
 * Return the eDL DG8 file.
 */
  dg8_file_edl?: number | undefined | null;
/**
 * Return the DG9 file.
 */
  dg9_file?: number | undefined | null;
/**
 * Return the eDL DG9 file.
 */
  dg9_file_edl?: number | undefined | null;
/**
 * Return the Doc Signer Certificate from the chip.
 */
  doc_signer_cert?: number | undefined | null;
/**
 * Return the EF.CardAccess file.
 */
  ef_card_access_file?: number | undefined | null;
/**
 * Return the EF.CardSecurity file.
 */
  ef_card_security_file?: number | undefined | null;
/**
 * Return the EF.ChipSecurity file.
 */
  ef_chip_security_file?: number | undefined | null;
/**
 * Return the EF.COM file.
 */
  ef_com_file?: number | undefined | null;
/**
 * Return the EF.CVCA file.
 */
  ef_cvca_file?: number | undefined | null;
/**
 * Return the EF.SOD file.
 */
  ef_sod_file?: number | undefined | null;
/**
 * Return the EF.COM DG presence map.
 */
  efcom_dg_map?: number | undefined | null;
/**
 * Return the EF.SOD hash map.
 */
  efsod_hash_map?: number | undefined | null;
/**
 * Return the Passive Authentication status.
 */
  passive_authentication?: number | undefined | null;
/**
 * Return SAC status.
 */
  sac_status?: number | undefined | null;
/**
 * Return the Terminal Authentication status.
 */
  terminal_authentication_status?: number | undefined | null;
/**
 * Validate all selected DGs.
 */
  validate_dgs?: boolean | undefined | null;
/**
 * Validate the Doc Signer certificate.
 */
  validate_doc_signer_cert?: number | undefined | null;
/**
 * Validate signature. Set to to 0 for off. max value is PASSPORT_DATA_ID::NUM_DATA_IDS
 */
  validate_signature?: number | undefined | null;
/**
 * Validate signed attributes. Set to to 0 for off.
 */
  validate_signed_attrs?: number | undefined | null;
  /**
   * parses a string into a RfDataToSendSettings.  
   * @returns a new RfDataToSendSettings; or undefined if the object could not be parsed.
   */
  static parse(data:string): RfDataToSendSettings {
    const obj = JSON.parse(data);
    if(obj && isRfDataToSendSettings(obj)){
      return RfDataToSendSettings.copy(obj);
    }
    throw Error("Cannot parse RfDataToSendSettings from " + data);
  } // END parse

  /**
   * Returns a copy of RfDataToSendSettings or undefined if the original object is not copyable.
   */
  static copy(obj: RfDataToSendSettingsLike): RfDataToSendSettings {
    if(isRfDataToSendSettings(obj)){
      let copy = new RfDataToSendSettings();
      copy = Object.assign(copy, obj);
      return copy;
    }
    throw Error("Cannot copy RfDataToSendSettings from Object.");
  } // END copy
} // END RfDataToSendSettings
