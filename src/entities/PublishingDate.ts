import {
  PublishingDateRoleEnum,
  PublishingDateRole,
} from "../codelists/PublishingDateRole";
import { parseOnixDate, parseRawOnixDate } from "../utils/date";

import { parseValue, parseType } from "../utils/parse";

function getDateType(date) {
  if (date && date.$) {
    return date.$.dateformat || '00'
  }
}
export class PublishingDate {
  constructor(json) {
    this.publishingDateRole = parseType(
      json,
      "PublishingDateRole",
      PublishingDateRole
    );
    const dateType =  (json.Date && json.Date.length) ? getDateType(json.Date[0]) : '00';
    this.date = parseRawOnixDate(parseValue(json, "Date"), dateType);
  }

  publishingDateRole: PublishingDateRoleEnum;
  date: Date;
}

//   <PublishingDate>
//     <PublishingDateRole>01</PublishingDateRole>
//     <Date>20050803</Date>
//   </PublishingDate>
