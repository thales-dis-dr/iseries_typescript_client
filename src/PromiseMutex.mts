import * as rx from "rxjs";
import { EventEmitter } from "events";
import { WebSocket } from "ws";
import { EmptyMessageWrapper, UnknownMessageWrapper } from "./Message.mjs";

let ws = new WebSocket("");
// ws.on("message", (data, isbinary) => {});

let i = 0;
let messages = rx
  .fromEvent(ws, "message", (data, isBinary) => {
    return JSON.parse(data.toString()) as UnknownMessageWrapper;
  })
  .pipe(rx.share());

let p = rx.firstValueFrom(
  messages.pipe(rx.filter((msg, _index) => msg.i == i)).pipe(
    rx.map((msg, _index) => {
      return msg as EmptyMessageWrapper;
    })
  )
);
