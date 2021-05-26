import { TitleTypeEnum, TitleType } from "../codelists/TitleType";

import { TitleElement } from "./TitleElement";

export class TitleDetail {
  constructor(json: any) {
    this.titleType = TitleType[json.TitleType[0]];
    this.titleElements = json.TitleElement.map((te) => new TitleElement(te));
  }

  titleType: TitleTypeEnum;
  titleElements: TitleElement[];
}
