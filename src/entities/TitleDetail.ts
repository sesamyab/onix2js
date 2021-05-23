import { TitleTypeEnum, TitleType } from "../codelists/TitleType";

import { TitleElement } from "./TitleElement";

export class TitleDetail {
  constructor(json: any) {
    this.titleType = TitleType[json.TitleType[0]];
    this.titleElement = new TitleElement(json.TitleElement[0]);
  }

  titleType: TitleTypeEnum;
  titleElement: TitleElement;
}
