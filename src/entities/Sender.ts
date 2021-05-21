export class Sender {
  constructor(senderJson) {
    this.senderName = senderJson?.SenderName[0];
  }

  senderName: string;
}
