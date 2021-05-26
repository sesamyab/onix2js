import { TitleDetail } from "./TitleDetail";
import {
  CollectionTypeEnum,
  CollectionType,
} from "../codelists/CollectionType";
import { parseValue, parseType } from "../utils/parse";

export class Collection {
  constructor(json: any) {
    this.collectionType = parseType(json, "CollectionType", CollectionType);
    this.titleDetail = new TitleDetail(parseValue(json, "TitleDetail"));
  }

  collectionType: CollectionTypeEnum;
  titleDetail: TitleDetail;
}

// <Collection>
//   <CollectionType>10</CollectionType>
//   <CollectionSequence xsi:nil=\"true\" />
//   <TitleDetail>
//     <TitleType>01</TitleType>
//     <TitleElement>
//       <TitleElementLevel>02</TitleElementLevel>
//       <TitleText>Kampen om Tusenvärld</TitleText>
//     </TitleElement>
//     <TitleElement>
//       <TitleElementLevel>01</TitleElementLevel>
//       <TitleText>2</TitleText>
//     </TitleElement>
//   </TitleDetail>
// </Collection>
