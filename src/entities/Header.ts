import { Sender } from "./Sender";

export class Header {
  constructor(headerJson) {
    this.sender = new Sender(headerJson.sender);
  }

  sender: Sender;
  senderDateTime: Date;
}
