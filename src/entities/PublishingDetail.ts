import { Publisher } from "./Publisher";
import { PublishingDate } from "./PublishingDate";
import { SalesRights } from "./SalesRights";

import {
  PublishingStatusEnum,
  PublishingStatus,
} from "../codelists/PublishingStatus";

export class PublishingDetail {
  constructor(json) {
    this.publisher = new Publisher(json.Publisher[0]);
    this.publishingStatus = PublishingStatus[json.PublishingStatus[0]];
    this.publishingDates = json.PublishingDate.map(
      (pd) => new PublishingDate(pd)
    );
    this.salesRights = new SalesRights(json.SalesRights[0]);
  }

  publisher: Publisher;
  publishingStatus: PublishingStatusEnum;
  publishingDates: PublishingDate[];
  salesRights: SalesRights;
}

// <PublishingDetail>
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
