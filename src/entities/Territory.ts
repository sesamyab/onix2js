import {
  RegionBasedOnIso_3166_2Enum,
  RegionBasedOnIso_3166_2,
} from "../codelists/RegionBasedOnIso_3166_2";

export class Territory {
  constructor(json) {
    this.regionsIncluded = RegionBasedOnIso_3166_2[json.RegionsIncluded[0]];
  }

  regionsIncluded: RegionBasedOnIso_3166_2Enum;
}

//     <Territory>
//       <RegionsIncluded>WORLD</RegionsIncluded>
//     </Territory>
