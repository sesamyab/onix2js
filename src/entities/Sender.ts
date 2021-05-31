import { parseValue } from "../utils/parse";

export class Sender {
  constructor(json: any) {
    this.senderName = parseValue(json, "SenderName");
  }

  senderName: string;
}
