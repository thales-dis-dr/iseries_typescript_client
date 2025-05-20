/*
 * DO NOT EDIT.  Generated Enum from WebApi.ConnectionEvents.json
 * Copyright © Thales, 2023
 */

/** 
 * Enumeration of the data massage types
 */
export enum ConnectionEvents {
  // START ENUMS 
  /**
   * Indicates a success.
   */
  OK = 0, 
  /**
   * Opens a connection to the reader.
   * CONNECT responds With: INVALID_KEY,CONNECTED,UNPROVISIONED_DEVICE
   */
  CONNECT = 1, 
  /**
   * Indicates the results of the CONNECT:1 message
   */
  CONNECTED = 2, 
  /**
   * Used to close the socket.
   * CLOSE responds With: CLOSED
   */
  CLOSE = 3, 
  CLOSED = 4, 
  /**
   * Starts a document capture on the device.
   * CAPTURE responds With: CAPTURED,CAPTURE_ERROR
   * @deprecated this value should not be used.
   */
  CAPTURE = 5, 
  /**
   * Indicates that capture is completed.
   */
  CAPTURED = 6, 
  /**
   * @deprecated this value should not be used.
   */
  RESERVED_7 = 7, 
  /**
   * Indicates an internal error while trying to open a session.
   */
  NOT_AUTHORIZED = 8, 
  /**
   * Requests to create a device ownership session.
   * SESSION_OPEN responds With: SESSION_OPENED,SESSION_IN_USE,ERROR
   */
  SESSION_OPEN = 9, 
  /**
   * Indicates that the receiver has ownership of the device.
   */
  SESSION_OPENED = 10, 
  /**
   * Releases ownership of the device.
   * SESSION_CLOSE responds With: SESSION_CLOSED
   */
  SESSION_CLOSE = 11, 
  /**
   * Acknowledgment that ownership has been released.
   */
  SESSION_CLOSED = 12, 
  /**
   * Indicates an error occurred during the capture process.
   */
  CAPTURE_ERROR = 13, 
  /**
   * This message indicates that the session is not owned by the sender.
   */
  INVALID_SESSION = 14, 
  /**
   * This message indicates that the session request was rejected.
   */
  SESSION_IN_USE = 15, 
  /**
   * Requests that the image data captured from CAPTURE_IMAGE_CAPTURED:24 be returned.
   * RETRIEVE_IMAGE responds With: RETURNED_IMAGE
   */
  RETRIEVE_IMAGE = 16, 
  /**
   * Returns image data to the caller.
   */
  RETURNED_IMAGE = 17, 
  /**
   * Requests the readers network settings.
   * GET_NETWORK_CONFIG responds With: NETWORK_CONFIG
   */
  GET_NETWORK_CONFIG = 18, 
  /**
   * Sets the readers network settings.
   * SET_NETWORK_CONFIG responds With: NETWORK_CONFIG
   */
  SET_NETWORK_CONFIG = 19, 
  /**
   * The readers network settings.
   */
  NETWORK_CONFIG = 20, 
  /**
   * @deprecated this value should not be used.
   */
  RESERVED_21 = 21, 
  /**
   * This is the response when the CONNECT:1 message contains an invalid key.
   */
  INVALID_KEY = 22, 
  /**
   * This message is sent when CAPTURE:5 or CAPTURE_DATA:50 finds a document.
   */
  CAPTURE_DOCFOUND = 23, 
  /**
   * This message is sent when CAPTURE:5 captures an image.
   */
  CAPTURE_IMAGE_CAPTURED = 24, 
  /**
   * This message is sent when CAPTURE:5 processes an image and finds an MRZ.
   */
  CAPTURE_MRZ = 25, 
  /**
   * This message is sent when CAPTURE:5 processes an image and finds a barcode.
   */
  CAPTURE_BARCODE = 26, 
  /**
   * Indicates an error while trying to retrieve data.
   */
  RETRIEVE_ERROR = 27, 
  /**
   * This is returned by the device when a command was not understood.
   */
  INVALID_COMMAND = 28, 
  /**
   * This message is sent when CAPTURE:5 processes smart-card data.
   */
  CAPTURE_SMARTCARD_FILE = 29, 
  /**
   * This message is used to requests that the 'extra data' be returned.
   * GET_EXTRADATA responds With: EXTRADATA
   */
  GET_EXTRADATA = 30, 
  /**
   * This message contains "extra data".
   */
  EXTRADATA = 31, 
  /**
   * Requests the device settings. 
   * GET_SETTINGS responds With: RETURNED_SETTINGS,GET_SETTINGS_ERROR
   */
  GET_SETTINGS = 32, 
  /**
   * Returns the device settings.
   */
  RETURNED_SETTINGS = 33, 
  /**
   * Indicates an error happened while trying to return the device settings.
   */
  GET_SETTINGS_ERROR = 34, 
  /**
   * Sends settings to be set on the device.
   * SET_SETTINGS responds With: SETTINGS_UPDATED,SET_SETTINGS_ERROR
   */
  SET_SETTINGS = 35, 
  /**
   * Indicates a setting update is completed.
   */
  SETTINGS_UPDATED = 36, 
  /**
   * Indicates an error occurred while trying to set the settings.
   */
  SET_SETTINGS_ERROR = 37, 
  /**
   * Stops the capture operation started with CAPTURE:5 or CAPTURE_DATA:50.
   * CAPTURE_STOP responds With: CAPTURE_STOP_ERROR,CAPTURE_STOPPED
   */
  CAPTURE_STOP = 38, 
  /**
   * Stops the capture operation started with CAPTURE:5 or CAPTURE_DATA:50.
   */
  CAPTURE_STOPPED = 39, 
  /**
   * CAPTURE_STOP:38 encountered an error.
   */
  CAPTURE_STOP_ERROR = 40, 
  /**
   * Returns AAMVA data from a CAPTURE:5 capture.
   */
  CAPTURE_AAMVA = 41, 
  /**
   * Turns on event listening.
   * LISTEN_START responds With: LISTEN_STARTED,EVENT
   */
  LISTEN_START = 42, 
  /**
   * Turn off event listening.
   * LISTEN_STOP responds With: LISTEN_STOPPED
   */
  LISTEN_STOP = 43, 
  /**
   * Indicates that the event listening has started.
   */
  LISTEN_STARTED = 44, 
  /**
   * Indicates that the event listening has stopped.
   */
  LISTEN_STOPPED = 45, 
  /**
   * An event sent by the device.
   */
  EVENT = 46, 
  /**
   * Get logs from device in ZIP compressed format.
   * GET_LOGS responds With: RETURNED_LOGS,GET_LOGS_ERROR
   */
  GET_LOGS = 47, 
  /**
   * Returns the device logs.
   */
  RETURNED_LOGS = 48, 
  /**
   * Indicates an error happened while trying to get logs.
   */
  GET_LOGS_ERROR = 49, 
  /**
   * Starts a document capture on the device. Data ids of type ReaderDataType are returned in CAPTURE_DATA_CAPTURED:51 messages as document data is available on the reader.
The RETRIEVE_DATA:52 message is then used by the client to get the data values as needed. This method allows the client to request only the data values needed and only when desired.
   * CAPTURE_DATA responds With: CAPTURE_DOCFOUND,CAPTURE_DATA_CAPTURED,CAPTURE_ERROR,CAPTURED
   */
  CAPTURE_DATA = 50, 
  /**
   * This message is sent when CAPTURE_DATA:50 captures document data from the reader.
   */
  CAPTURE_DATA_CAPTURED = 51, 
  /**
   * Requests that the data item id captured from CAPTURE_DATA_CAPTURED:51) be returned.
   * RETRIEVE_DATA responds With: RETURNED_DATA
   */
  RETRIEVE_DATA = 52, 
  /**
   * Returns ReaderDataType data to the caller for the requested id.
   */
  RETURNED_DATA = 53, 
  /**
   * Turns on error listening.
   * LISTEN_ERROR_START responds With: LISTEN_ERROR_STARTED,ERROR
   */
  LISTEN_ERROR_START = 54, 
  /**
   * Turn off error listening.
   * LISTEN_ERROR_STOP responds With: LISTEN_ERROR_STOPPED
   */
  LISTEN_ERROR_STOP = 55, 
  /**
   * Indicates that the error listening has started.
   */
  LISTEN_ERROR_STARTED = 56, 
  /**
   * Indicates that the error listening state has stopped.
   */
  LISTEN_ERROR_STOPPED = 57, 
  /**
   * An error sent by the device.
   */
  ERROR = 58, 
  /**
   * An Internal error has occured.
   */
  INTERNAL_ERROR = 59, 
  /**
   * Response sent to indicate that the device is not yet provisioned.
   */
  UNPROVISIONED_DEVICE = 60, 
  /**
   * @deprecated this value should not be used.
   */
  ASSUREID_CREDENTIALS = 61, 
  /**
   * Set Acuant AssureID Credentials during a Connected Session with the Reader.
   * @deprecated this value should not be used.
   */
  ASSUREID_VERIFY_DOCUMENT = 62, 
  /**
   * Retrieve Results from Acuant AssureID for a specific Document Instance ID.
   * @deprecated this value should not be used.
   */
  ASSUREID_RETRIEVE_RESULTS = 63, 
  /**
   * Indicates an AssureID Instance ID of a document Processed by Acuant AssureID.
   * @deprecated this value should not be used.
   */
  ASSUREID_INSTANCE_ID = 64, 
  /**
   * Contains Acuant AssureID Results of a Document.
   * @deprecated this value should not be used.
   */
  ASSUREID_RESULTS = 65, 
  /**
   * An error sent by the device specifically regarding Acuant AssureID.
   * @deprecated this value should not be used.
   */
  ASSUREID_ERROR = 66, 
  /**
   * Directs the reader to perform a match between up to three images.
   * @deprecated this value should not be used.
   */
  FACE_MATCH = 67, 
  /**
   * Response from the face matching algorithm
   * @deprecated this value should not be used.
   */
  FACE_MATCH_RESPONSE = 68, 
  /**
   * Error from the face matching algorithm.
   * @deprecated this value should not be used.
   */
  FACE_MATCH_ERROR = 69, 
  /**
   * Triggers Device information requests.  Also indicates the returned device info object.
   * DEVICE_INFO responds With: DEVICE_INFO
   */
  DEVICE_INFO = 70, 
  /**
   * Request a firmware update.
   * FIRMWARE_UPDATE responds With: FIRMWARE_UPDATE_RESULT
   */
  FIRMWARE_UPDATE = 71, 
  /**
   * Results of a firmware update check.
   */
  FIRMWARE_UPDATE_RESULT = 72, 
  /**
   * Request status of firmware update.
   * @deprecated this value should not be used.
   */
  CHECK_FIRMWARE_UPDATE = 73, 
  /**
   * @deprecated this value should not be used.
   */
  CHECK_FIRMWARE_UPDATE_RESULT = 74, 
  /**
   * Request update messages.
   * LISTEN_UPDATE_START responds With: LISTEN_UPDATE_STARTED,UPDATE_STATUS
   */
  LISTEN_UPDATE_START = 75, 
  /**
   * Indicates LISTEN_UPDATE_START:75 messages was a success.
   */
  LISTEN_UPDATE_STARTED = 76, 
  /**
   * Indicates LISTEN_UPDATE_START:83 message was successfull.
   */
  LISTEN_UPDATE_STOPPED = 77, 
  /**
   * Sent on update status changed.
   */
  UPDATE_STATUS = 78, 
  /**
   * Send an upload file data.
   * UPLOAD responds With: UPLOAD_RECEIVED,ERROR
   */
  UPLOAD = 79, 
  /**
   * Upload part received.
   */
  UPLOAD_RECEIVED = 80, 
  /**
   * Reboots the reader.
   * REBOOT responds With: REBOOTING,ERROR
   */
  REBOOT = 81, 
  /**
   * The reader has accepted the reboot request.
   */
  REBOOTING = 82, 
  /**
   * Request update status stop being sent.
   * LISTEN_UPDATE_STOP responds With: LISTEN_UPDATE_STOPPED
   */
  LISTEN_UPDATE_STOP = 83, 
  /**
   * Manualy clear all data cached for the lifetime of the session.
   * CLEAR_DATA responds With: OK
   */
  CLEAR_DATA = 84, 
  /**
   * Provisions a reader.
   * PROVISION responds With: PROVISIONED,ERROR
   */
  PROVISION = 85, 
  /**
   * The reader is now provisioned.
   */
  PROVISIONED = 86, 
  /**
   * Removes device provisioning data.
   * UNPROVISION responds With: UNPROVISIONED
   */
  UNPROVISION = 87, 
  /**
   * The reader is now provisioned.
   */
  UNPROVISIONED = 88, 
  /**
   * Gets an JWT authentication token from the reader.
   * GET_TOKEN responds With: TOKEN,ERROR
   */
  GET_TOKEN = 89, 
  /**
   * This message contains a JWT authentication token, in response to a GET_TOKEN:89 message.
   */
  TOKEN = 90, 
  /**
   * Opens a connection to the reader.
   * AUTHENTICATE responds With: AUTHENTICATED,INVALID_TOKEN,ERROR
   */
  AUTHENTICATE = 91, 
  /**
   * Returned upon success of the AUTHENTICATE:91 message.
   */
  AUTHENTICATED = 92, 
  /**
   * Indicates that the token provided to AUTHENTICATE:91 was invalid.
   */
  INVALID_TOKEN = 93, 
  /**
   * Add a certificate to the devices certstore.
   * CERT_ADD responds With: CERT_ADDED,CERT_ERROR,ERROR
   */
  CERT_ADD = 94, 
  /**
   * Results of a certificate addition.
   */
  CERT_ADDED = 95, 
  /**
   * List the certificates in the readers certificate store.
   * CERT_LIST responds With: CERT_LIST_DATA,ERROR
   */
  CERT_LIST = 96, 
  /**
   * Returned from a call to CERT_LIST:96 with a listing of the contents of the readers cert store.
   */
  CERT_LIST_DATA = 97, 
  /**
   * Removes a certificate from the readers cert store.
   * CERT_DELETE responds With: CERT_DELETED,ERROR
   */
  CERT_DELETE = 98, 
  /**
   * Response indicating a successful deletion with CERT_DELETE:98.
   */
  CERT_DELETED = 99, 
  /**
   * Error returned from certificate operations.
   */
  CERT_ERROR = 100, 
  /**
   * Start listening to certificate requests.  This can be used to provide certificates to a reader during the capture operation, rather than pre-loading certificates into the readers cert store.
   * LISTEN_CERT_REQ_START responds With: LISTEN_CERT_REQ_STARTED,CERT_REQ,ERROR
   */
  LISTEN_CERT_REQ_START = 101, 
  /**
   * Listening for CERT_REQ:105 messages has started.
   */
  LISTEN_CERT_REQ_STARTED = 102, 
  /**
   * Stops the reader from sending CERT_REQ:105 messages.
   */
  LISTEN_CERT_REQ_STOP = 103, 
  /**
   * Certificate request listening has stopped.
   */
  LISTEN_CERT_REQ_STOPPED = 104, 
  /**
   * Requests that the client send a certificate with the provided identity.
   */
  CERT_REQ = 105, 
  /**
   * Provides a certificate to the reader during capture as requested by CERT_REQ:105.
   * CERT_REQ_RESPONSE responds With: OK
   */
  CERT_REQ_RESPONSE = 106, 
  /**
   * Turns on certificate request listening.
   * LISTEN_SIGN_REQ_START responds With: LISTEN_SIGN_REQ_STARTED,SIGN_REQ,ERROR
   */
  LISTEN_SIGN_REQ_START = 107, 
  /**
   * Indicates that a LISTEN_SIGN_REQ_START:107 has started.
   */
  LISTEN_SIGN_REQ_STARTED = 108, 
  /**
   * Request to stop the SIGN_REQ:111 messages from being sent.
   * LISTEN_SIGN_REQ_STOP responds With: LISTEN_SIGN_REQ_STOPPED,ERROR
   */
  LISTEN_SIGN_REQ_STOP = 109, 
  /**
   * Acknowledgment of LISTEN_SIGN_REQ_STOP:109.
   */
  LISTEN_SIGN_REQ_STOPPED = 110, 
  /**
   * Requests that a datablock be signed.
   */
  SIGN_REQ = 111, 
  /**
   * Returns signed data in response to a SIGN_REQ:111.
   * SIGN_REQ_RESPONSE responds With: OK
   */
  SIGN_REQ_RESPONSE = 112, 
  /**
   * List the certificate store categories available on the device.
   * CERT_LIST_CAT responds With: CERT_LIST_CAT_RES,ERROR
   */
  CERT_LIST_CAT = 113, 
  /**
   * Response to a CERT_LIST_CAT:113 message.
   */
  CERT_LIST_CAT_RES = 114, 
  /**
   * METRICS_REQ responds With: METRICS_RESPONSE,ERROR
   * @deprecated this value should not be used.
   */
  METRICS_REQ = 115, 
  /**
   * @deprecated this value should not be used.
   */
  METRICS_RESPONSE = 116, 
  /**
   * CLEAR_METRICS responds With: OK,ERROR
   * @deprecated this value should not be used.
   */
  CLEAR_METRICS = 117, 
  /**
   * Request a WiFi network scan.
   * WIFI_SCAN responds With: WIFI_SCAN_RESULT,ERROR
   */
  WIFI_SCAN = 118, 
  /**
   * Response to a request for a WiFi network scan.
   */
  WIFI_SCAN_RESULT = 119, 
  /**
   * Requests a list of Credentials.
   * CRED_LIST responds With: CRED_LIST_DATA,NOT_AUTHORIZED,ERROR
   */
  CRED_LIST = 120, 
  /**
   * Response to a request to list Credentials.
   */
  CRED_LIST_DATA = 121, 
  /**
   * Adds a Credential.
   * CRED_ADD responds With: OK,NOT_AUTHORIZED,ERROR
   */
  CRED_ADD = 122, 
  /**
   * Deletes a Credential.
   * CRED_DELETE responds With: OK,NOT_AUTHORIZED,ERROR
   */
  CRED_DELETE = 123, 
  /**
   * Sets the Extra Data Key-value store.
   * SET_EXTRADATA responds With: OK,ERROR
   */
  SET_EXTRADATA = 124, 
  /**
   * Requests a CSR.
   * CERT_GET_CSR responds With: CERT_CSR,ERROR
   */
  CERT_GET_CSR = 125, 
  /**
   * Contains a CSR response.
   */
  CERT_CSR = 126, 
  /**
   * Truncates log files
   * CLEAR_LOG responds With: OK,ERROR
   */
  CLEAR_LOG = 127, 
  // END ENUMS 
}
