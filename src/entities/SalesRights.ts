import {
  SalesRightsTypeEnum,
  SalesRightsType,
} from "../codelists/SalesRightsType";
import { Territory } from "./Territory";

import { parseValue, parseType } from "../utils/parse";

export class SalesRights {
  constructor(json: any) {
    this.salesRightsType = parseType(json, "SalesRightsType", SalesRightsType);
    this.territory = new Territory(parseValue(json, "Territory"));
  }

  salesRightsType: SalesRightsTypeEnum;
  territory: Territory;
}

//   <SalesRights>
//     <SalesRightsType>02</SalesRightsType>
//     <Territory>
//       <RegionsIncluded>WORLD</RegionsIncluded>
//     </Territory>
//   </SalesRights>
