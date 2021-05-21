import { TitleTypeEnum, TitleType } from "../codelists/TitleType";

import { TitleElement } from "./TitleElement";

export class TitleDetail {
  constructor(titleDetailJson) {
    this.titleType = TitleType[titleDetailJson.TitleType[0]];
    this.titleElement = new TitleElement(titleDetailJson.TitleElement[0]);
  }

  titleType: TitleTypeEnum;
  titleElement: TitleElement;
}
