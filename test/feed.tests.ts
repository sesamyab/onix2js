import { expect } from "chai";
import fs from "fs";
import Onix from "../src/entities/Onix";

describe("Feeds", () => {
  it("1.xml", async () => {
    const xml = fs.readFileSync("./test/templates/1.xml", "utf8");

    const onix = await Onix.parse(xml);

    const expected = {
      header: {
        sender: {
          senderName: "xx Media AB",
        },
        sentDateTime: new Date(Date.UTC(2020, 9, 13)),
      },
      products: [{}],
    };

    expect(onix).to.deep.equal(expected);
  });
});
