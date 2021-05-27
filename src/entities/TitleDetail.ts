import { TitleTypeEnum, TitleType } from "../codelists/TitleType";

import { TitleElement } from "./TitleElement";

import { parseType } from "../utils/parse";

export class TitleDetail {
  constructor(json: any) {
    this.titleType = parseType(json, "TitleType", TitleType);
    this.titleElements = (json.TitleElement || []).map(
      (te) => new TitleElement(te)
    );
  }

  titleType: TitleTypeEnum;
  titleElements: TitleElement[];
}
