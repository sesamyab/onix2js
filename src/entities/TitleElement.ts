import {
  TitleElementLevelEnum,
  TitleElementLevel,
} from "../codelists/TitleElementLevel";

import { parseValue, parseType } from "../utils/parse";

export class TitleElement {
  constructor(json: any) {
    this.titleElementLevel = parseType(
      json,
      "TitleElementLevel",
      TitleElementLevel
    );
    this.titleText = parseValue(json, "TitleText");
    this.titlePrefix = parseValue(json, "TitlePrefix");
    this.titleWithoutPrefix = parseValue(json, "TitleWithoutPrefix");
    this.partNumber = parseValue(json, "PartNumber");
  }

  titleElementLevel: TitleElementLevelEnum;
  titleText: string;
  titlePrefix: string;
  titleWithoutPrefix: string;
  partNumber: string;
}
