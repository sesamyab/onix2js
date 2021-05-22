import { expect } from "chai";
import { Header } from "../../src/entities/Header";

describe("header", () => {
  it("create class", () => {
    const header = new Header({
      Sender: [
        {
          SenderName: ["name"],
        },
      ],
      SentDateTime: ["20010101"],
    });

    const expected = {
      sender: {
        senderName: "name",
      },
      sentDateTime: new Date(Date.UTC(2001, 0, 1)),
    };

    expect(header).to.deep.equal(expected);
  });
});
