import {
  RegionBasedOnIso_3166_2Enum,
  RegionBasedOnIso_3166_2,
} from "../codelists/RegionBasedOnIso_3166_2";

import { parseType } from "../utils/parse";

export class Territory {
  constructor(json: any) {
    this.regionsIncluded = parseType(
      json,
      "RegionsIncluded",
      RegionBasedOnIso_3166_2
    );
  }

  regionsIncluded: RegionBasedOnIso_3166_2Enum;
}

//     <Territory>
//       <RegionsIncluded>WORLD</RegionsIncluded>
//     </Territory>
