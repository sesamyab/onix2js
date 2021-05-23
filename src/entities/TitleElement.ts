import {
  TitleElementLevelEnum,
  TitleElementLevel,
} from "../codelists/TitleElementLevel";

export class TitleElement {
  constructor(json: any) {
    this.titleElementLevel = TitleElementLevel[json.TitleElementLevel[0]];
    this.titleText = json.TitleText[0];
  }

  titleElementLevel: TitleElementLevelEnum;
  titleText: string;
}
