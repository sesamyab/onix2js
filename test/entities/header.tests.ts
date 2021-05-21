import { expect } from "chai";
import { Header } from "../../src/entities/Header";

describe("header", () => {
  it("should work", () => {
    const header = new Header({
      sender: {
        senderName: "name",
      },
    });

    const expected = {
      sender: {
        senderName: "name",
      },
    };

    expect(header).to.deep.equal(expected);
  });
});
