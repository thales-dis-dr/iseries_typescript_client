import { WebSocket } from "ws";
import {
  ConnectionEvents,
  DataCaptureResultLike,
  DataRequest,
  DataRequestLike,
  DataResponseLike,
  DeviceSettingsLike,
  isDataCaptureResult,
  isDataRequest,
  isDataResponse,
  isDeviceSettings,
  isErrorMessage,
  isSettingsMessage,
  isTokenMessage,
  ReaderDataType,
  SettingsMessage,
  SettingsMessageLike,
} from "./drmcl/index.mjs";
import {
  AuthenticateMessageWrapper,
  ConnectMessageWrapper,
  EmptyMessageWrapper,
  RetrieveDataMessageWrapper,
  SetSettingsMessageWrapper,
  UnknownMessageWrapper,
} from "./Message.mjs";
import { EventEmitter } from "events";

type SomeI = number | undefined;

export class DeviceConnection {
  // the socket
  private ws: WebSocket;

  // event emitter helper
  private emitter: EventEmitter = new EventEmitter();

  /// helper to keep a unique 'i' value
  private unique_i = 0;

  // connection state
  private connected = false;

  // session state
  private session = false;

  private pingTimeout: NodeJS.Timeout | undefined;

  /**
   * Creates the Class
   */
  constructor(ws: WebSocket) {
    // super();
    this.ws = ws;

    // ws sets the this parameter in its callbacks to the WebSocket
    let that = this;
    this.ws.on("open", () => that.heartbeat());
    this.ws.on("ping", () => that.heartbeat());
    this.ws.on("message", (data, isBinary) => that.onMessage(data.toString()));
    this.ws.on("close", (code, reason) => {
      console.log(`Connection Closed ${code}: ${reason.toString()}`);
      that.connected = false;
      that.session = false;
      clearTimeout(that.pingTimeout);
    });
  }

  heartbeat() {
    clearTimeout(this.pingTimeout);

    // Use `WebSocket#terminate()`, which immediately destroys the connection,
    // instead of `WebSocket#close()`, which waits for the close timer.
    // Delay should be equal to the interval at which your server
    // sends out pings plus a conservative assumption of the latency.
    this.pingTimeout = setTimeout(() => {
      this.ws.terminate();
    }, 30000 + 1000);
  }

  on(
    eventNam: "token",
    listener: (i: SomeI, token: string) => void
  ): DeviceConnection;
  on(
    eventName: "authenticated",
    listener: (i: SomeI) => void
  ): DeviceConnection;
  on(
    eventName: "session_closed",
    listener: (i: SomeI) => void
  ): DeviceConnection;
  on(
    eventName: "data",
    listener: (i: SomeI, d: DataResponseLike) => void
  ): DeviceConnection;
  on(eventName: "doc_found", listener: (i: SomeI) => void): DeviceConnection;
  on(
    eventName: "capture_completed",
    listener: (i: SomeI) => void
  ): DeviceConnection;
  on(
    eventName: "session_opened",
    listener: (i: SomeI) => void
  ): DeviceConnection;
  on(
    eventName: "data_captured",
    listener: (i: SomeI, result: DataCaptureResultLike) => void
  ): DeviceConnection;
  on(eventName: string, listener: (...args: any[]) => void): DeviceConnection {
    this.emitter.on(eventName, listener);
    return this;
  }

  private emit(eventName: "authenticated", i: SomeI): boolean;
  private emit(eventName: "session_closed", i: SomeI): boolean;
  private emit(eventName: "doc_found", i: SomeI): boolean;
  private emit(eventName: "capture_completed", i: SomeI): boolean;
  private emit(eventName: "session_opened", i: SomeI): boolean;
  private emit(eventName: "token", i: SomeI, token: string): boolean;
  private emit(eventName: "data", i: SomeI, d: DataResponseLike): boolean;
  private emit(
    eventName: "data_captured",
    i: SomeI,
    result: DataCaptureResultLike
  ): boolean;
  private emit(eventName: string, ...args: any[]): boolean {
    return this.emitter.emit(eventName, args);
  }

  /** Creates a new 'i' parameter for messages. */
  nextI() {
    this.unique_i++;
    return this.unique_i;
  }

  /** sends the  CONNECT:1 message to the device */
  sendConnect(authKey: string, authKeyID: string) {
    let message: ConnectMessageWrapper = {
      t: ConnectionEvents.CONNECT, // 1,
      i: this.nextI(),
      d: {
        authKey,
        authKeyID,
      },
    };

    this.ws.send(JSON.stringify(message));
  }

  /** sends the  AUTHENTICATE:91 message to the device */
  sendAuthenticate(token: string) {
    let message: AuthenticateMessageWrapper = {
      t: ConnectionEvents.AUTHENTICATE, // 91,
      i: this.nextI(),
      d: {
        token,
      },
    };

    this.ws.send(JSON.stringify(message));
  }

  /** sends the SESSION_OPEN:9 message to the device */
  sendOpenSession() {
    let message: EmptyMessageWrapper = {
      t: ConnectionEvents.SESSION_OPEN, // 9,
      i: this.nextI(),
    };

    this.ws.send(JSON.stringify(message));
  }

  /** sends the SESSION_CLOSE:11 message to the device */
  sendCloseSession() {
    let message: EmptyMessageWrapper = {
      t: ConnectionEvents.SESSION_CLOSE, // 11,
      i: this.nextI(),
    };

    this.ws.send(JSON.stringify(message));
  }

  /** sends the CAPTURE_DATA:50 message to the device */
  sendCaptureData() {
    let message: EmptyMessageWrapper = {
      t: ConnectionEvents.CAPTURE_DATA, // 50,
      i: this.nextI(),
    };

    this.ws.send(JSON.stringify(message));
  }

  sendGetToken() {
    let message: EmptyMessageWrapper = {
      t: ConnectionEvents.GET_TOKEN, // 89,
      i: this.nextI(),
    };

    this.ws.send(JSON.stringify(message));
  }

  sendSettings(settings: DeviceSettingsLike): void;
  sendSettings(settings: SettingsMessageLike): void;
  sendSettings(settings: DeviceSettingsLike | SettingsMessageLike) {
    let d: SettingsMessage;
    if (isSettingsMessage(settings)) {
      d = settings;
    } else if (isDeviceSettings(settings)) {
      d = SettingsMessage.copy({ settings });
    } else {
      throw new Error("settings must look like a valid ");
    }

    let message: SetSettingsMessageWrapper = {
      t: ConnectionEvents.SET_SETTINGS, // 35,
      i: this.nextI(),
      d,
    };
    this.ws.send(JSON.stringify(message));
  }
  sendRetrieveData(data: DataRequestLike): void;
  sendRetrieveData(
    id: number,
    type: ReaderDataType,
    image_format?: "jpg" | "png" | "bmp",
    image_compression?: number
  ): void;
  sendRetrieveData(
    id_or_data: number | DataRequestLike,
    type?: ReaderDataType,
    image_format?: "jpg" | "png" | "bmp",
    image_compression?: number
  ): void {
    let data: DataRequest;
    if (isDataRequest(id_or_data)) {
      data = DataRequest.copy(id_or_data);
    } else {
      if (typeof id_or_data !== "number")
        throw new Error("id must be a number");
      if (type == undefined)
        throw new Error("type must a valid ReaderDataType");

      data = DataRequest.copy({
        id: id_or_data,
        type: type,
        image_compression: image_compression,
        image_format: image_format,
      });
    }

    let message: RetrieveDataMessageWrapper = {
      t: ConnectionEvents.CAPTURE_DATA, // 50,
      i: this.nextI(),
      d: data,
    };

    this.ws.send(JSON.stringify(message));
  }

  onMessage(data: string) {
    let message: UnknownMessageWrapper = JSON.parse(data);
    console.log(`Received t=${message.t}, i=${message.i} `);

    switch (message.t) {
      case ConnectionEvents.CONNECTED:
      case ConnectionEvents.AUTHENTICATED:
        this.connected = true;
        this.emit("authenticated", message.i);
        break;
      case ConnectionEvents.INVALID_KEY:
        console.error("Invalid Key");
        break;
      case ConnectionEvents.UNPROVISIONED_DEVICE:
        console.error("The device is not provisioned");
        break;
      case ConnectionEvents.SESSION_OPENED:
        this.session = true;
        this.emit("session_opened", message.i);
        break;
      case ConnectionEvents.SESSION_CLOSED:
        this.session = false;
        this.emit("session_closed", message.i);
      case ConnectionEvents.SESSION_IN_USE:
        console.error("Session In Use");
        break;
      case ConnectionEvents.ERROR:
        if (isErrorMessage(message.d)) {
          console.error(`Error with ID ${message.d.errorId}`);
        } else {
          console.error(`Error ${JSON.stringify(message.d)}`);
        }
        break;
      case ConnectionEvents.CAPTURE_DOCFOUND:
        console.log("Document found");
        this.emit("doc_found", message.i);
        break;
      case ConnectionEvents.CAPTURE_DATA_CAPTURED:
        if (isDataCaptureResult(message.d)) {
          console.log(`Data scanned ${message.d.id} of type ${message.d.type}`);
          this.emit("data_captured", message.i, message.d);
        } else console.error("Unexpected error with CAPTURE_DATA_CAPTURED");
        break;
      case ConnectionEvents.CAPTURED:
        console.log("Capture Completed");
        this.emit("capture_completed", message.i);
        break;
      case ConnectionEvents.RETURNED_DATA:
        if (isDataResponse(message.d)) {
          console.log(
            `Data returned ${message.d.id} of type ${message.d.type}`
          );
          this.emit("data", message.i, message.d);
        } else console.error("Unexpected error with RETURNED_DATA");

        break;
      case ConnectionEvents.TOKEN:
        if (isTokenMessage(message.d)) {
          console.log(
            `Data returned ${message.d.id} of type ${message.d.type}`
          );
          this.emit("token", message.i, message.d.token);
        } else console.error("Unexpected error with TOKEN");
        break;
    }
  }
}
