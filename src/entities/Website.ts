import { parseValue } from "../utils/parse";

export class Website {
  constructor(json: object) {
    this.websiteLink = parseValue(json, "WebsiteLink");
  }

  websiteLink: string;
}

// <Website>
//     <WebsiteLink>ftp://ftp.qa.xx.dk/yy.epub</WebsiteLink>
// </Website>
