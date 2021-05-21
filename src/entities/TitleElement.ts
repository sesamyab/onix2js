import {
  TitleElementLevelEnum,
  TitleElementLevel,
} from "../codelists/TitleElementLevel";

export class TitleElement {
  constructor(titleElementJson) {
    this.titleElementLevel =
      TitleElementLevel[titleElementJson.TitleElementLevel[0]];
    this.titleText = titleElementJson.TitleText[0];
  }

  titleElementLevel: TitleElementLevelEnum;
  titleText: string;
}
