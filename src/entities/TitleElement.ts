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
    this.partNumber = parseValue(json, "PartNumber");
  }

  titleElementLevel: TitleElementLevelEnum;
  titleText: string;
  partNumber: string;
}
