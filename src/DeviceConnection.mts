import { WebSocket } from "ws";
import * as rx from "rxjs";
import * as drmcl from "./drmcl/index.mts";
import {
  ConnectionEvents,
  type DeviceSettingsLike,
  isDataRequest,
  isDeviceSettings,
  isSettingsMessage,
  SettingsMessage,
  type SettingsMessageLike,
} from "./drmcl/index.mts";
import {
  type EmptyMessageWrapper,
  type MessageWrapper,
  type UnknownMessageWrapper,
} from "./Message.mts";
import { EventEmitter } from "events";
import { eachValueFrom } from "rxjs-for-await";

function map_empty(observable: rx.Observable<UnknownMessageWrapper>) {
  return observable.pipe(
    rx.map((msg, _index) => {
      return msg as EmptyMessageWrapper;
    })
  );
}

function map_unknown(
  observable: rx.Observable<UnknownMessageWrapper>,
  check: (msg: UnknownMessageWrapper) => boolean = () => true
) {
  return observable.pipe(rx.filter(check));
}

function map_result<T>(
  observable: rx.Observable<UnknownMessageWrapper>,
  check: (msg: UnknownMessageWrapper) => boolean = () => true
) {
  return observable.pipe(rx.filter(check)).pipe(
    rx.map((msg, _index) => {
      return msg as MessageWrapper<T>;
    })
  );
}

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

  // observer of the ws.on("message") events
  private messages: rx.Observable<UnknownMessageWrapper>;

  /**
   * Creates the Class
   */
  constructor(ws: WebSocket) {
    // super();
    this.messages = new rx.Observable<UnknownMessageWrapper>();
    this.ws = ws;

    // ws sets the this parameter in its callbacks to the WebSocket
    let that = this;

    this.ws.on("open", (...args: any[]) => {
      console.log(" > open:", ...args);
      that.heartbeat();

      // create an observer of ws.on("message")
      let messages = (that.messages = rx
        .fromEvent(ws, "message", (event) => {
          //console.log(" > message received: ", event.data);
          const { data, ...remainder } = event;
          const json = JSON.parse(data.toString()) as UnknownMessageWrapper;
          switch (json.t) {
            case ConnectionEvents.RETURNED_IMAGE:
            case ConnectionEvents.RETURNED_DATA:
              const { t, i, d } = json;
              // if("img" in d && "data")
              // if("data" in d)
              //   d.data = "<base64>";
              console.log(" > message received: ", { t, i, d });
              break;
            default:
              console.log(" > message received: ", event.data);
              break;
          }
          return json;
        })
        .pipe(rx.share()));

      messages
        .pipe(
          rx.filter(
            (msg) =>
              msg.t == ConnectionEvents.CONNECTED ||
              msg.t == ConnectionEvents.AUTHENTICATED
          )
        )
        .subscribe((msg) => (that.connected = true));
      messages
        .pipe(rx.filter((msg) => msg.t == ConnectionEvents.SESSION_OPEN))
        .subscribe((msg) => (that.session = true));
      messages
        .pipe(rx.filter((msg) => msg.t == ConnectionEvents.SESSION_CLOSED))
        .subscribe((msg) => (that.session = false));
    });
    this.ws.on("ping", () => that.heartbeat());
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

  /** Creates a new 'i' parameter for messages. */
  nextI() {
    this.unique_i++;
    return this.unique_i;
  }

  /** Creates a MessageWrapper, send it and returns an observable that looks for its returned results. */
  private sendTD<D>(t: ConnectionEvents, d: D) {
    let i = this.nextI();

    let message: MessageWrapper<D> = { t, i, d };

    return this.send(message);
  }
  /** Creates a MessageWrapper, send it and returns an observable that looks for its returned results. */
  private sendT(t: ConnectionEvents) {
    let i = this.nextI();

    let message: EmptyMessageWrapper = { t, i };

    return this.send(message);
  }

  /** sends a message and generates an observable that looks for the same i to be returned. */
  private send<T extends EmptyMessageWrapper>(message: T) {
    const i = message.i;
    const observable = this.messages.pipe(
      rx.filter((msg, index) => msg.i === i)
    );
    const data = JSON.stringify(message);
    console.log(" > sending message: ", data);
    this.ws.send(data);
    return observable;
  }

  open() {
    return rx.firstValueFrom(rx.fromEvent(this.ws, "open", () => {}));
  }

  /** sends the  CONNECT:1 message to the device */
  sendConnect(authKey: string, authKeyID: string) {
    return rx.firstValueFrom(
      map_result<drmcl.ConnectedMessageLike>(
        this.sendTD<drmcl.ConnectMessage>(ConnectionEvents.CONNECT, {
          authKey,
          authKeyID,
        })
      )
    );
  }

  /** sends the  AUTHENTICATE:91 message to the device */
  sendAuthenticate(token: string) {
    return rx.firstValueFrom(
      map_result<drmcl.ConnectedMessageLike>(
        this.sendTD<drmcl.Authenticate>(ConnectionEvents.AUTHENTICATE, {
          token,
        })
      )
    );
  }

  /** sends the SESSION_OPEN:9 message to the device */
  sendOpenSession() {
    return rx.firstValueFrom(
      map_empty(this.sendT(ConnectionEvents.SESSION_OPEN))
    );
  }

  /** sends the SESSION_CLOSE:11 message to the device */
  sendCloseSession() {
    return rx.firstValueFrom(
      map_empty(this.sendT(ConnectionEvents.SESSION_CLOSE))
    );
  }

  /** sends the CAPTURE_DATA:50 message to the device */
  sendCaptureData() {
    const end = new rx.Subject();
    let observable = map_unknown(this.sendT(ConnectionEvents.CAPTURE_DATA))
      .pipe(
        rx.tap((msg) => {
          if (msg.t == ConnectionEvents.CAPTURED) end.next(null);
        })
      )
      .pipe(rx.filter((msg) => msg.t == ConnectionEvents.CAPTURE_DATA_CAPTURED))
      .pipe(rx.takeUntil(end));

    return eachValueFrom(map_result<drmcl.DataCaptureResultLike>(observable));
  }

  /** sends the GET_TOKEN:89 message to the device */
  sendGetToken() {
    return rx.firstValueFrom(
      map_result<drmcl.TokenMessage>(this.sendT(ConnectionEvents.GET_TOKEN))
    );
  }

  /** sends the SET_SETTINGS:35 message to the device */
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

    return rx.firstValueFrom(
      map_empty(this.sendTD(ConnectionEvents.SET_SETTINGS, d))
    );
  }

  /** sends the GET_SETTINGS:32 message to the device */
  sendGetSettings() {
    return rx.firstValueFrom(
      map_result<drmcl.SettingsMessage>(
        this.sendT(ConnectionEvents.GET_SETTINGS)
      )
    );
  }

  /** sends the RETRIEVE_DATA:52 message to the device */
  sendRetrieveData(
    data: drmcl.DataRequestLike
  ): Promise<MessageWrapper<drmcl.DataResponse>> {
    if (!isDataRequest(data)) {
      throw new Error("type must a valid ReaderDataType");
    }
    let d = drmcl.DataRequest.copy(data);

    return rx.firstValueFrom(
      map_result<drmcl.DataResponse>(
        this.sendTD(ConnectionEvents.RETRIEVE_DATA, d)
      )
    );
  }
}
