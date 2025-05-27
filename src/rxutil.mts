import {
  type EmptyMessageWrapper,
  type MessageWrapper,
  type UnknownMessageWrapper,
} from "./Message.mts";
import * as rx from "rxjs";
import * as drmcl from "./drmcl/index.mts";

export function to_be<T>(check: (msg: UnknownMessageWrapper) => boolean = () => true) {
  return function (
    source: rx.Observable<UnknownMessageWrapper>
  ): rx.Observable<MessageWrapper<T>> {
    return new rx.Observable((subscriber) => {
      return source.subscribe({
        next(value) {
          if (!check(value)) {
            subscriber.error(`Unexpected value: ${value}:`);
          } else {
            subscriber.next(value as MessageWrapper<T>);
          }
        },
        error(error) {
          subscriber.error(error);
        },
        complete() {
          subscriber.complete();
        },
      });
    });
  };
}

export function to_be_empty() {
  return function (
    source: rx.Observable<UnknownMessageWrapper>
  ): rx.Observable<EmptyMessageWrapper> {
    return new rx.Observable((subscriber) => {
      return source.subscribe({
        next(value) {
          subscriber.next(value as EmptyMessageWrapper);
        },
        error(error) {
          subscriber.error(error);
        },
        complete() {
          subscriber.complete();
        },
      });
    });
  };
}

export function to_be_unknown(
  check: (msg: UnknownMessageWrapper) => boolean = () => true
) {
  return function (
    source: rx.Observable<UnknownMessageWrapper>
  ): rx.Observable<UnknownMessageWrapper> {
    return new rx.Observable((subscriber) => {
      return source.subscribe({
        next(value) {
          if (!check(value)) {
            subscriber.error(`Unexpected value: ${value}:`);
          } else {
            subscriber.next(value as UnknownMessageWrapper);
          }
        },
        error(error) {
          subscriber.error(error);
        },
        complete() {
          subscriber.complete();
        },
      });
    });
  };
}

export function expect_only(...valid: drmcl.ConnectionEvents[]) {
  return function (
    source: rx.Observable<UnknownMessageWrapper>
  ): rx.Observable<UnknownMessageWrapper> {
    return new rx.Observable((subscriber) => {
      return source.subscribe({
        next(value) {
          if (!valid.includes(value.t)) {
            subscriber.error(
              `Unexpected Response: ${drmcl.ConnectionEvents[value.t]}:${
                value.t
              }`
            );
          } else {
            subscriber.next(value);
          }
        },
        error(error) {
          subscriber.error(error);
        },
        complete() {
          subscriber.complete();
        },
      });
    });
  };
}

export function error_on(...invalid: drmcl.ConnectionEvents[]) {
  return function (
    source: rx.Observable<UnknownMessageWrapper>
  ): rx.Observable<UnknownMessageWrapper> {
    return new rx.Observable((subscriber) => {
      return source.subscribe({
        next(value) {
          if (invalid.includes(value.t)) {
            subscriber.error(
              `Invalid Response: ${drmcl.ConnectionEvents[value.t]}:${value.t}`
            );
          } else {
            subscriber.next(value);
          }
        },
        error(error) {
          subscriber.error(error);
        },
        complete() {
          subscriber.complete();
        },
      });
    });
  };
}
