import {
  PublishingRoleEnum,
  PublishingRole,
} from "../codelists/PublishingRole";

export class Publisher {
  constructor(json) {
    this.publishingRole = PublishingRole[json.PublishingRole[0]];
  }

  publishingRole: PublishingRoleEnum;
}

//   <Publisher>
//     <PublishingRole>01</PublishingRole>
//     <PublisherName>xx Media</PublisherName>
//   </Publisher>
