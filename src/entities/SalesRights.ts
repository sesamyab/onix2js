import {
  SalesRightsTypeEnum,
  SalesRightsType,
} from "../codelists/SalesRightsType";
import { Territory } from "./Territory";

export class SalesRights {
  constructor(json) {
    this.salesRightsType = SalesRightsType[json.SalesRightsType[0]];
    this.territory = new Territory(json.Territory[0]);
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
