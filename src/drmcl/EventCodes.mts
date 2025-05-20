/*
 * DO NOT EDIT.  Generated Enum from WebApi.EventCodes.json
 * Copyright © Thales, 2023
 */

/** 
 * Enumeration of the device events
 */
export enum EventCodes {
  // START ENUMS 
  /**
   * This event is triggered when a new document has been detected on the window of a pagereader.
   */
  DOC_ON_WINDOW = 0, 
  /**
   * This event is triggered when a document that has been detected has been removed from the window of a pagereader.
   */
  DOC_REMOVED = 1, 
  /**
   * This event is triggered immediately before the first data item is read from a document.
   */
  START_OF_DOCUMENT_DATA = 2, 
  /**
   * This event is triggered immediately after the last data item is read from a document.
   */
  END_OF_DOCUMENT_DATA = 3, 
  AUTOMATIC_STATE_CHANGE = 4, 
  /**
   * This event is triggered when an RF chip in a document has been successfully opened for further reading. This indicates that there is a chip present. If the chip is a recognised type, then this will be followed by an RF_APPLICATION_OPENED_SUCCESSFULLY event.
   */
  RF_CHIP_OPENED_SUCCESSFULLY = 5, 
  /**
   * This event is triggered when an RF chip in a document has been successfully opened as a known chip type. If a chip that does not use the 'MRTD' application is detected, or there is another problem selecting the application, this event will not be raised, although #RF_CHIP_OPENED_SUCCESSFULLY will be.
   */
  RF_APPLICATION_OPENED_SUCCESSFULLY = 6, 
  /**
   * This event is triggered when an RF chip in a document failed to open.
   */
  RF_CHIP_OPEN_FAILED = 7, 
  /**
   * This event is triggered when an internal error was encountered and has automatically been resolved.
   */
  READER_ERROR_RESOLVED = 8, 
  /**
   * This event is triggered during the MMMReader_Initialise() call immediately after the sdk configuration settings have been loaded but prior to any other initialisation. This is provided so that any settings may be updated by the host application via MMMReader_UpdateSettings() prior to the initialisation of the hlapi so that any changes may be applied before any document already on the pagereader is processed.
   */
  SETTINGS_INITIALISED = 9, 
  /**
   * This event is triggered during the MMMReader_Initialise() call immediately after the plugins have been loaded and initialised. This is provided so that applications may enumerate and enable/disable plugins as required prior to the initialisation of the hlapi.
   */
  PLUGINS_INITIALISED = 10, 
  /**
   * This event is triggered immediately before decoding images using the plugins.
   */
  START_OF_PLUGINS_DECODE = 11, 
  /**
   * This event is triggered when waiting for an RF chip in a document to be placed on the pagereader takes too long and the operation is aborted.
   */
  RF_CHIP_OPEN_TIMEOUT = 12, 
  /**
   * ifnot SWIPESDK This event is triggered when an RF chip in a document has been removed from the a pagereader.
   */
  RF_CHIP_REMOVAL_SUCCESS = 13, 
  /**
   * ifnot SWIPESDK This event is triggered when waiting for an RF chip in a document to be removed from the pagereader takes too long and the operation is aborted.
   */
  RF_CHIP_REMOVAL_TIMEOUT = 14, 
  /**
   * ifnot SWIPESDK This event is triggered immediately before waiting for the RF chip in a document to be opened.
   */
  READY_FOR_SMARTCARD = 15, 
  /**
   * This event is triggered when an internal error was encountered and the sdk is about to automatically resolve it. If the error could be resolved, a #READER_ERROR_RESOLVED event will then be triggered.
   */
  BEGIN_RESOLVING_ERROR = 16, 
  COM_PORT_OPEN = 17, 
  COM_PORT_CLOSED = 18, 
  READING_DATA = 19, 
  DATA_READ = 20, 
  /**
   * This event is triggered immediately before the first data item is read from a swiped document.
   */
  START_OF_SWIPE_DATA = 21, 
  /**
   * This event is triggered immediately after the last data item is read from a swiped document.
   */
  END_OF_SWIPE_DATA = 22, 
  DEVICE_CONNECTED = 23, 
  DEVICE_DISCONNECTED = 24, 
  /**
   * This event is triggered immediately after the sdk successfully connects to a swipereader.
   */
  SWIPE_READER_CONNECTED = 25, 
  /**
   * This event is triggered immediately after the sdk successfully disconnects from a swipereader.
   */
  SWIPE_READER_DISCONNECTED = 26, 
  /**
   * This event is triggered when the state of the pagereader has changed.
   */
  READER_STATE_CHANGED = 27, 
  /**
   * This event is triggered when a UHF command takes too long and the opperation is aborted.
   */
  UHF_READ_TIMEOUT = 28, 
  /**
   * This event is triggered when a UHF command has completed
   */
  UHF_READ_COMPLETE = 29, 
  /**
   * ifnot SWIPESDK This event is triggered when a motor feed of a document is complete
   */
  DOC_FEED_COMPLETE = 30, 
  /**
   * ifnot SWIPESDK This event is triggered when a motor feed of a document has failed due to the feeder hopper being empty.
   */
  DOC_FEED_FAILED = 31, 
  /**
   * This event is triggered if dirt is found on the scanner window
   */
  DIRT_DETECTED_ON_SCANNER_WINDOW = 32, 
  /**
   * This event is triggered to request the reader operator to swipe the document on the magnetic strip reader .
   */
  SWIPE_REQUESTED = 33, 
  /**
   * This event is triggered to request the reader operator to position the document over/close by the uhf antenna .
   */
  UHF_REQUESTED = 34, 
  /**
   * ifnot SWIPESDK This event is triggered when an RF chip hes been detected
   */
  RF_CHIP_DETECTED = 35, 
  /**
   * This event is triggered to request the reader operator to flip the document over for further processing.
   */
  FLIP_DOCUMENT_OVER = 36, 
  /**
   * This event is triggered immediately after the sdk successfully connects to a reader.
   */
  READER_CONNECTED = 37, 
  /**
   * This event is triggered immediately after the sdk successfully disconnects from a reader.
   */
  READER_DISCONNECTED = 38, 
  NUM_EVENT_CODES = 39, 
  // END ENUMS 
}
