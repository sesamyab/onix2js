import { Sender } from "./Sender";
import { parseOnixDate } from "../utils/date";

export class Header {
  constructor(headerJson: any) {
    this.sender = new Sender(headerJson?.Sender[0]);
    this.sentDateTime = parseOnixDate(headerJson?.SentDateTime[0]);
  }

  sender: Sender;
  sentDateTime: Date;
}
