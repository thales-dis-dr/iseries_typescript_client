/*
 * DO NOT EDIT.  Generated Message from WebApi.mDLSettings.json
 * Copyright © Thales, 2023
 */

export function isMDLSettings(obj: any): obj is MDLSettingsLike {
  return  obj && // not null AND
    (( obj instanceof MDLSettings) || // instance of MDLSettings OR
    ( typeof obj === 'object' && "age_over_nn_value_1" in obj && "age_over_nn_value_2" in obj && "barcode_engagement_enabled" in obj && "ble_retrieval_enabled" in obj && "nfc_engagement_enabled" in obj && "nfc_retrieval_enabled" in obj && "request_admin_number" in obj && "request_age_birth_year" in obj && "request_age_in_years" in obj && "request_age_over_nn" in obj && "request_birth_date" in obj && "request_birth_place" in obj && "request_document_number" in obj && "request_driving_privileges" in obj && "request_expiry_date" in obj && "request_eye_color" in obj && "request_family_name" in obj && "request_family_name_national_character" in obj && "request_given_name" in obj && "request_given_name_national_character" in obj && "request_hair_color" in obj && "request_height" in obj && "request_issue_date" in obj && "request_issuing_authority" in obj && "request_issuing_country" in obj && "request_issuing_jurisdiction" in obj && "request_nationality" in obj && "request_photo" in obj && "request_photo_capture_date" in obj && "request_resident_address" in obj && "request_resident_city" in obj && "request_resident_country" in obj && "request_resident_postal_code" in obj && "request_resident_state" in obj && "request_sex" in obj && "request_signature_usual_mark" in obj && "request_un_distinguished_sign" in obj && "request_weight" in obj && "wifi_retrieval_enabled" in obj &&     true) // its an object with all the right properties
    );
}
/**
 */
export interface MDLSettingsLike {
/**
 * First Age Attestation value (0 to 99 or -1 to ignore) to check, if mDLSettings.RequestAgeOverNN is enabled.
 */
  age_over_nn_value_1: number;
/**
 * Second Age Attestation value (0 to 99 or -1 to ignore) to check, if mDLSettings.RequestAgeOverNN is enabled.
 */
  age_over_nn_value_2: number;
/**
 * Enable/Disable using Barcode engagement.
 */
  barcode_engagement_enabled: boolean;
/**
 * Enable/Disable using Bluetooth data retrieval.
 */
  ble_retrieval_enabled: boolean;
/**
 * Enable/Disable using NFC engagement.
 */
  nfc_engagement_enabled: boolean;
/**
 * Enable/Disable using NFC data retrieval.
 */
  nfc_retrieval_enabled: boolean;
/**
 * Enable/Disable attempting to read the AdminNumber.
 */
  request_admin_number: boolean;
/**
 * Enable/Disable attempting to read the AgeBirthYear.
 */
  request_age_birth_year: boolean;
/**
 * Enable/Disable attempting to read the AgeInYears.
 */
  request_age_in_years: boolean;
/**
 * Enable/Disable attempting to request Age Attestation checks for AgeOverNNValue1 / AgeOverNNValue2, if specified.
 */
  request_age_over_nn: boolean;
/**
 * Enable/Disable attempting to read the BirthDate.
 */
  request_birth_date: boolean;
/**
 * Enable/Disable attempting to read the BirthPlace.
 */
  request_birth_place: boolean;
/**
 * Enable/Disable attempting to read the DocumentNumber.
 */
  request_document_number: boolean;
/**
 * Enable/Disable attempting to read the DrivingPrivileges.
 */
  request_driving_privileges: boolean;
/**
 * Enable/Disable attempting to read the ExpiryDate.
 */
  request_expiry_date: boolean;
/**
 * Enable/Disable attempting to read the EyeColor.
 */
  request_eye_color: boolean;
/**
 * Enable/Disable attempting to read the FamilyName.
 */
  request_family_name: boolean;
/**
 * Enable/Disable attempting to read the FamilyNameNationalCharacter.
 */
  request_family_name_national_character: boolean;
/**
 * Enable/Disable attempting to read the GivenName.
 */
  request_given_name: boolean;
/**
 * Enable/Disable attempting to read the GivenNameNationalCharacter.
 */
  request_given_name_national_character: boolean;
/**
 * Enable/Disable attempting to read the HairColor.
 */
  request_hair_color: boolean;
/**
 * Enable/Disable attempting to read the Height.
 */
  request_height: boolean;
/**
 * Enable/Disable attempting to read the IssueDate.
 */
  request_issue_date: boolean;
/**
 * Enable/Disable attempting to read the IssuingAuthority.
 */
  request_issuing_authority: boolean;
/**
 * Enable/Disable attempting to read the IssuringCountry.
 */
  request_issuing_country: boolean;
/**
 * Enable/Disable attempting to read the IssuingJurisdiction.
 */
  request_issuing_jurisdiction: boolean;
/**
 * Enable/Disable attempting to read the Nationality.
 */
  request_nationality: boolean;
/**
 * Enable/Disable attempting to read the Photo.
 */
  request_photo: boolean;
/**
 * Enable/Disable attempting to read the PhotoCaptureDate.
 */
  request_photo_capture_date: boolean;
/**
 * Enable/Disable attempting to read the ResidentAddress.
 */
  request_resident_address: boolean;
/**
 * Enable/Disable attempting to read the ResidentCity.
 */
  request_resident_city: boolean;
/**
 * Enable/Disable attempting to read the ResidentCountry.
 */
  request_resident_country: boolean;
/**
 * Enable/Disable attempting to read the ResidentPostalCode.
 */
  request_resident_postal_code: boolean;
/**
 * Enable/Disable attempting to read the ResidentState.
 */
  request_resident_state: boolean;
/**
 * Enable/Disable attempting to read the Sex.
 */
  request_sex: boolean;
/**
 * Enable/Disable attempting to read the SignatureUsualMark.
 */
  request_signature_usual_mark: boolean;
/**
 * Enable/Disable attempting to read the UnDistinguishedSign.
 */
  request_un_distinguished_sign: boolean;
/**
 * Enable/Disable attempting to read the Weight.
 */
  request_weight: boolean;
/**
 * Enable/Disable using WiFi data retrieval.
 */
  wifi_retrieval_enabled: boolean;
  /** Indexer */
  [key: string]: any;
}

/**
 * Settings for mDL configuration.
 */
export class MDLSettings /*extends MessageData implements MDLSettingsLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.age_over_nn_value_1 = 0;
    this.age_over_nn_value_2 = 0;
    this.barcode_engagement_enabled = true;
    this.ble_retrieval_enabled = true;
    this.nfc_engagement_enabled = true;
    this.nfc_retrieval_enabled = true;
    this.request_admin_number = true;
    this.request_age_birth_year = true;
    this.request_age_in_years = true;
    this.request_age_over_nn = true;
    this.request_birth_date = true;
    this.request_birth_place = true;
    this.request_document_number = true;
    this.request_driving_privileges = true;
    this.request_expiry_date = true;
    this.request_eye_color = true;
    this.request_family_name = true;
    this.request_family_name_national_character = true;
    this.request_given_name = true;
    this.request_given_name_national_character = true;
    this.request_hair_color = true;
    this.request_height = true;
    this.request_issue_date = true;
    this.request_issuing_authority = true;
    this.request_issuing_country = true;
    this.request_issuing_jurisdiction = true;
    this.request_nationality = true;
    this.request_photo = true;
    this.request_photo_capture_date = true;
    this.request_resident_address = true;
    this.request_resident_city = true;
    this.request_resident_country = true;
    this.request_resident_postal_code = true;
    this.request_resident_state = true;
    this.request_sex = true;
    this.request_signature_usual_mark = true;
    this.request_un_distinguished_sign = true;
    this.request_weight = true;
    this.wifi_retrieval_enabled = true;
  }

/**
 * First Age Attestation value (0 to 99 or -1 to ignore) to check, if mDLSettings.RequestAgeOverNN is enabled.
 */
  age_over_nn_value_1: number;
/**
 * Second Age Attestation value (0 to 99 or -1 to ignore) to check, if mDLSettings.RequestAgeOverNN is enabled.
 */
  age_over_nn_value_2: number;
/**
 * Enable/Disable using Barcode engagement.
 */
  barcode_engagement_enabled: boolean;
/**
 * Enable/Disable using Bluetooth data retrieval.
 */
  ble_retrieval_enabled: boolean;
/**
 * Enable/Disable using NFC engagement.
 */
  nfc_engagement_enabled: boolean;
/**
 * Enable/Disable using NFC data retrieval.
 */
  nfc_retrieval_enabled: boolean;
/**
 * Enable/Disable attempting to read the AdminNumber.
 */
  request_admin_number: boolean;
/**
 * Enable/Disable attempting to read the AgeBirthYear.
 */
  request_age_birth_year: boolean;
/**
 * Enable/Disable attempting to read the AgeInYears.
 */
  request_age_in_years: boolean;
/**
 * Enable/Disable attempting to request Age Attestation checks for AgeOverNNValue1 / AgeOverNNValue2, if specified.
 */
  request_age_over_nn: boolean;
/**
 * Enable/Disable attempting to read the BirthDate.
 */
  request_birth_date: boolean;
/**
 * Enable/Disable attempting to read the BirthPlace.
 */
  request_birth_place: boolean;
/**
 * Enable/Disable attempting to read the DocumentNumber.
 */
  request_document_number: boolean;
/**
 * Enable/Disable attempting to read the DrivingPrivileges.
 */
  request_driving_privileges: boolean;
/**
 * Enable/Disable attempting to read the ExpiryDate.
 */
  request_expiry_date: boolean;
/**
 * Enable/Disable attempting to read the EyeColor.
 */
  request_eye_color: boolean;
/**
 * Enable/Disable attempting to read the FamilyName.
 */
  request_family_name: boolean;
/**
 * Enable/Disable attempting to read the FamilyNameNationalCharacter.
 */
  request_family_name_national_character: boolean;
/**
 * Enable/Disable attempting to read the GivenName.
 */
  request_given_name: boolean;
/**
 * Enable/Disable attempting to read the GivenNameNationalCharacter.
 */
  request_given_name_national_character: boolean;
/**
 * Enable/Disable attempting to read the HairColor.
 */
  request_hair_color: boolean;
/**
 * Enable/Disable attempting to read the Height.
 */
  request_height: boolean;
/**
 * Enable/Disable attempting to read the IssueDate.
 */
  request_issue_date: boolean;
/**
 * Enable/Disable attempting to read the IssuingAuthority.
 */
  request_issuing_authority: boolean;
/**
 * Enable/Disable attempting to read the IssuringCountry.
 */
  request_issuing_country: boolean;
/**
 * Enable/Disable attempting to read the IssuingJurisdiction.
 */
  request_issuing_jurisdiction: boolean;
/**
 * Enable/Disable attempting to read the Nationality.
 */
  request_nationality: boolean;
/**
 * Enable/Disable attempting to read the Photo.
 */
  request_photo: boolean;
/**
 * Enable/Disable attempting to read the PhotoCaptureDate.
 */
  request_photo_capture_date: boolean;
/**
 * Enable/Disable attempting to read the ResidentAddress.
 */
  request_resident_address: boolean;
/**
 * Enable/Disable attempting to read the ResidentCity.
 */
  request_resident_city: boolean;
/**
 * Enable/Disable attempting to read the ResidentCountry.
 */
  request_resident_country: boolean;
/**
 * Enable/Disable attempting to read the ResidentPostalCode.
 */
  request_resident_postal_code: boolean;
/**
 * Enable/Disable attempting to read the ResidentState.
 */
  request_resident_state: boolean;
/**
 * Enable/Disable attempting to read the Sex.
 */
  request_sex: boolean;
/**
 * Enable/Disable attempting to read the SignatureUsualMark.
 */
  request_signature_usual_mark: boolean;
/**
 * Enable/Disable attempting to read the UnDistinguishedSign.
 */
  request_un_distinguished_sign: boolean;
/**
 * Enable/Disable attempting to read the Weight.
 */
  request_weight: boolean;
/**
 * Enable/Disable using WiFi data retrieval.
 */
  wifi_retrieval_enabled: boolean;
  /**
   * parses a string into a MDLSettings.  
   * @returns a new MDLSettings; or undefined if the object could not be parsed.
   */
  static parse(data:string): MDLSettings {
    const obj = JSON.parse(data);
    if(obj && isMDLSettings(obj)){
      return MDLSettings.copy(obj);
    }
    throw Error("Cannot parse MDLSettings from " + data);
  } // END parse

  /**
   * Returns a copy of MDLSettings or undefined if the original object is not copyable.
   */
  static copy(obj: MDLSettingsLike): MDLSettings {
    if(isMDLSettings(obj)){
      let copy = new MDLSettings();
      copy = Object.assign(copy, obj);
      return copy;
    }
    throw Error("Cannot copy MDLSettings from Object.");
  } // END copy
} // END MDLSettings
