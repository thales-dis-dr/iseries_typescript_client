/*
 * DO NOT EDIT.  Generated Message from WebApi.docProcessingSettings.json
 * Copyright © Thales, 2023
 */

export function isDocProcessingSettings(obj: any): obj is DocProcessingSettingsLike {
  return  obj && // not null AND
    (( obj instanceof DocProcessingSettings) || // instance of DocProcessingSettings OR
    ( typeof obj === 'object' && /*"api_key" in obj && */ /*"app_client_id" in obj && */ /*"app_client_secret" in obj && */ /*"authentication_server" in obj && */ /*"authentication_uri" in obj && */ /*"debug_file_saves" in obj && */ /*"default_request_timeout" in obj && */ /*"face_match_uri" in obj && */ /*"idv_server" in obj && */ /*"primary_channel" in obj && */ /*"remote_image_compression_level" in obj && */ /*"remote_image_scale_down" in obj && */ /*"remote_photo_compression_level" in obj && */ /*"secondary_channel" in obj && */ /*"verification_uri" in obj && */     true) // its an object with all the right properties
    );
}
/**
 */
export interface DocProcessingSettingsLike {
/**
 * Set the API Key for the Document Verification Server authentication
 */
  api_key?: string | undefined | null;
/**
 * Set the client ID for Document Verification
 */
  app_client_id?: string | undefined | null;
/**
 * Set the client ID secret key for Document Verification
 */
  app_client_secret?: string | undefined | null;
/**
 * Set the url for the authentication server for Document Verification
 */
  authentication_server?: string | undefined | null;
/**
 * Set the Uri for the authentcation server for Document Verification
 */
  authentication_uri?: string | undefined | null;
/**
 * Enable/Disable Debug file saves
 */
  debug_file_saves?: boolean | undefined | null;
/**
 * Set the default timeout for Document Verification Responses
 */
  default_request_timeout?: number | undefined | null;
/**
 * Set the Uri for face match verification
 */
  face_match_uri?: string | undefined | null;
/**
 * Set the url for the Document Verification Server
 */
  idv_server?: string | undefined | null;
/**
 * Set the Primary Channel for Document Verification
 */
  primary_channel?: string | undefined | null;
/**
 * Set the compression level for document processing image
 */
  remote_image_compression_level?: number | undefined | null;
/**
 * Set the scale down for document processing image
 */
  remote_image_scale_down?: number | undefined | null;
/**
 * Set the compression level for document processing photo image
 */
  remote_photo_compression_level?: number | undefined | null;
/**
 * Set the Secondary Channel for Document Verification
 */
  secondary_channel?: string | undefined | null;
/**
 * Set the Uri for Document verification
 */
  verification_uri?: string | undefined | null;
  /** Indexer */
  [key: string]: any;
}

/**
 * Document Processing Settings.  Equivalent to Document Processing settings and IDV settings.
 */
export class DocProcessingSettings /*extends MessageData implements DocProcessingSettingsLike */ {
  /** Indexer */
  [key: string]: any;
  constructor() {
    this.api_key = null;
    this.app_client_id = null;
    this.app_client_secret = null;
    this.authentication_server = null;
    this.authentication_uri = null;
    this.debug_file_saves = null;
    this.default_request_timeout = null;
    this.face_match_uri = null;
    this.idv_server = null;
    this.primary_channel = null;
    this.remote_image_compression_level = null;
    this.remote_image_scale_down = null;
    this.remote_photo_compression_level = null;
    this.secondary_channel = null;
    this.verification_uri = null;
  }

/**
 * Set the API Key for the Document Verification Server authentication
 */
  api_key?: string | undefined | null;
/**
 * Set the client ID for Document Verification
 */
  app_client_id?: string | undefined | null;
/**
 * Set the client ID secret key for Document Verification
 */
  app_client_secret?: string | undefined | null;
/**
 * Set the url for the authentication server for Document Verification
 */
  authentication_server?: string | undefined | null;
/**
 * Set the Uri for the authentcation server for Document Verification
 */
  authentication_uri?: string | undefined | null;
/**
 * Enable/Disable Debug file saves
 */
  debug_file_saves?: boolean | undefined | null;
/**
 * Set the default timeout for Document Verification Responses
 */
  default_request_timeout?: number | undefined | null;
/**
 * Set the Uri for face match verification
 */
  face_match_uri?: string | undefined | null;
/**
 * Set the url for the Document Verification Server
 */
  idv_server?: string | undefined | null;
/**
 * Set the Primary Channel for Document Verification
 */
  primary_channel?: string | undefined | null;
/**
 * Set the compression level for document processing image
 */
  remote_image_compression_level?: number | undefined | null;
/**
 * Set the scale down for document processing image
 */
  remote_image_scale_down?: number | undefined | null;
/**
 * Set the compression level for document processing photo image
 */
  remote_photo_compression_level?: number | undefined | null;
/**
 * Set the Secondary Channel for Document Verification
 */
  secondary_channel?: string | undefined | null;
/**
 * Set the Uri for Document verification
 */
  verification_uri?: string | undefined | null;
  /**
   * parses a string into a DocProcessingSettings.  
   * @returns a new DocProcessingSettings; or undefined if the object could not be parsed.
   */
  static parse(data:string): DocProcessingSettings {
    const obj = JSON.parse(data);
    if(obj && isDocProcessingSettings(obj)){
      return DocProcessingSettings.copy(obj);
    }
    throw Error("Cannot parse DocProcessingSettings from " + data);
  } // END parse

  /**
   * Returns a copy of DocProcessingSettings or undefined if the original object is not copyable.
   */
  static copy(obj: DocProcessingSettingsLike): DocProcessingSettings {
    if(isDocProcessingSettings(obj)){
      let copy = new DocProcessingSettings();
      copy = Object.assign(copy, obj);
      return copy;
    }
    throw Error("Cannot copy DocProcessingSettings from Object.");
  } // END copy
} // END DocProcessingSettings
