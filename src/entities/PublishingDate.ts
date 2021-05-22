import {
  PublishingDateRoleEnum,
  PublishingDateRole,
} from "../codelists/PublishingDateRole";
import { parseOnixDate } from "../utils/date";

export class PublishingDate {
  constructor(json) {
    this.publishingDateRole = PublishingDateRole[json.PublishingDateRole[0]];
    this.date = parseOnixDate(json.Date[0]);
  }

  publishingDateRole: PublishingDateRoleEnum;
  date: Date;
}

//   <PublishingDate>
//     <PublishingDateRole>01</PublishingDateRole>
//     <Date>20050803</Date>
//   </PublishingDate>
