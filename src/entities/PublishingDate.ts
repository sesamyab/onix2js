import {
  PublishingDateRoleEnum,
  PublishingDateRole,
} from "../codelists/PublishingDateRole";
import { parseOnixDate } from "../utils/date";

import { parseValue, parseType } from "../utils/parse";

export class PublishingDate {
  constructor(json) {
    this.publishingDateRole = parseType(
      json,
      "PublishingDateRole",
      PublishingDateRole
    );
    this.date = parseOnixDate(parseValue(json, "Date"));
  }

  publishingDateRole: PublishingDateRoleEnum;
  date: Date;
}

//   <PublishingDate>
//     <PublishingDateRole>01</PublishingDateRole>
//     <Date>20050803</Date>
//   </PublishingDate>
