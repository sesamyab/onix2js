import { Sender } from "./Sender";
import { parseOnixDate } from "../utils/date";
import { parseValue } from "../utils/parse";

export class Header {
  constructor(json: any) {
    this.sender = new Sender(parseValue(json, "Sender"));
    this.sentDateTime = parseOnixDate(parseValue(json, "SentDateTime"));
  }

  sender: Sender;
  sentDateTime: Date;
}
