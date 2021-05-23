export class Sender {
  constructor(json: any) {
    this.senderName = json?.SenderName[0];
  }

  senderName: string;
}
