import * as drmcl from "./drmcl/index.mjs";

/** Message wrapper that had no data payload */
export interface EmptyMessageWrapper {
  t: drmcl.ConnectionEvents;
  i: number | undefined;
}

/** MEssage wrapper with a type `T` data Payload */
export interface MessageWrapper<T> extends EmptyMessageWrapper {
  d: T;
}

/** MEssage wrapper with any data payload */
export interface UnknownMessageWrapper extends MessageWrapper<any> {}

export interface ConnectMessageWrapper
  extends MessageWrapper<drmcl.ConnectMessage> {}
export interface AuthenticateMessageWrapper
  extends MessageWrapper<drmcl.Authenticate> {}
export interface RetrieveDataMessageWrapper
  extends MessageWrapper<drmcl.DataRequest> {}
export interface SetSettingsMessageWrapper
  extends MessageWrapper<drmcl.SettingsMessage> {}
