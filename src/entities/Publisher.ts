import {
  PublishingRoleEnum,
  PublishingRole,
} from "../codelists/PublishingRole";

import { parseValue, parseType } from "../utils/parse";

export class Publisher {
  constructor(json: any) {
    this.publishingRole = parseType(json, "PublishingRole", PublishingRole);
    this.publishingName = parseValue(json, "PublisherName");
  }

  publishingRole: PublishingRoleEnum;
  publishingName: string;
}

//   <Publisher>
//     <PublishingRole>01</PublishingRole>
//     <PublisherName>xx Media</PublisherName>
//   </Publisher>
