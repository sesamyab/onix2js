import { TextTypeEnum, TextType } from "../codelists/TextType";
import { TextFormatEnum, TextFormat } from "../codelists/TextFormat";
import {
  ContentAudienceEnum,
  ContentAudience,
} from "../codelists/ContentAudience";
import { parseValue, parseType } from "../utils/parse";

export class TextContent {
  constructor(json: any) {
    this.textType = TextType[json.TextType[0]];
    this.contentAudience = ContentAudience[json.ContentAudience[0]];

    this.text = parseValue(json, "Text");
    this.textFormat = parseType(json, "Text.0.$.textformat", TextFormat);
  }

  textType: TextTypeEnum;
  contentAudience: ContentAudienceEnum;
  text: string;
  textFormat: TextFormatEnum;
}

// <TextContent>
//     <TextType>03</TextType>
//     <ContentAudience>00</ContentAudience>
//     <Text textformat="02">Den stora valen Moby Dick är kapten Ahabs största fiende. I en tidigare strid med valen har Ahab förlorat sitt ben. Nu beger han sig ut på jakt efter det väldiga djuret. En ung man ombord, Ismael, blir vittne till kaptenens totala besatthet och märker att han är beredd att offra allting, sitt liv, sitt skepp och sin besättning. &lt;br&gt;&lt;br&gt; Översättningen är gjord av Per Erik Wahlund som även har skrivit inledningen och de utförliga ord- och namnförklaringarna i slutet av boken.</Text>
// </TextContent>
