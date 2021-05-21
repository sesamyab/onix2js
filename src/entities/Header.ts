import { Sender } from "./Sender";
import { parseOnixDate } from "../utils/date";

export class Header {
  constructor(json: any) {
    this.sender = new Sender(json?.Sender[0]);
    this.sentDateTime = parseOnixDate(json?.SentDateTime[0]);
  }

  sender: Sender;
  sentDateTime: Date;
}
