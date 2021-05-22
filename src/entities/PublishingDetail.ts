import { Publisher } from "./Publisher";
import { PublishingDate } from "./PublishingDate";
import { SalesRights } from "./SalesRights";
import { Imprint } from "./Imprint";

import {
  PublishingStatusEnum,
  PublishingStatus,
} from "../codelists/PublishingStatus";

import { parseValue, parseType } from "../utils/parse";

export class PublishingDetail {
  constructor(json) {
    this.publisher = new Publisher(parseValue(json, "Publisher"));
    this.publishingStatus = parseType(
      json,
      "PublishingStatus",
      PublishingStatus
    );
    this.publishingDates = json.PublishingDate.map(
      (pd) => new PublishingDate(pd)
    );
    this.salesRights = new SalesRights(parseValue(json, "SalesRights"));
    this.imprint = new Imprint(parseValue(json, "Imprint"));
  }

  publisher: Publisher;
  publishingStatus: PublishingStatusEnum;
  publishingDates: PublishingDate[];
  salesRights: SalesRights;
  imprint: Imprint;
}

// <PublishingDetail>
//   <Imprint>
//     <ImprintName>Cicero</ImprintName>
//   </Imprint>
//   <Publisher>
//     <PublishingRole>01</PublishingRole>
//     <PublisherName>xx Media</PublisherName>
//   </Publisher>
//   <PublishingStatus>04</PublishingStatus>
//   <PublishingDate>
//     <PublishingDateRole>01</PublishingDateRole>
//     <Date>20050803</Date>
//   </PublishingDate>
//   <PublishingDate>
//     <PublishingDateRole>02</PublishingDateRole>
//     <Date>20050803</Date>
//   </PublishingDate>
//   <SalesRights>
//     <SalesRightsType>02</SalesRightsType>
//     <Territory>
//       <RegionsIncluded>WORLD</RegionsIncluded>
//     </Territory>
//   </SalesRights>
// </PublishingDetail>;
