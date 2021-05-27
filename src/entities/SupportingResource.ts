import {
  ResourceContentTypeEnum,
  ResourceContentType,
} from "../codelists/ResourceContentType";
import {
  ContentAudienceEnum,
  ContentAudience,
} from "../codelists/ContentAudience";
import { ResourceModeEnum, ResourceMode } from "../codelists/ResourceMode";

import { ResourceVersion } from "./ResourceVersion";

import { parseValue, parseType } from "../utils/parse";

export class SupportingResource {
  constructor(json: any) {
    this.resourceContentType = parseType(
      json,
      "ResourceContentType",
      ResourceContentType
    );
    this.contentAudience = parseType(json, "ContentAudience", ContentAudience);
    this.resourceMode = parseType(json, "ResourceMode", ResourceMode);
    this.resourceVersion = new ResourceVersion(
      parseValue(json, "ResourceVersion")
    );
  }

  resourceContentType: ResourceContentTypeEnum;
  contentAudience: ContentAudienceEnum;
  resourceMode: ResourceModeEnum;
  resourceVersion: ResourceVersion;
}

// <SupportingResource>
//     <ResourceContentType>01</ResourceContentType>
//     <ContentAudience>00</ContentAudience>
//     <ResourceMode>03</ResourceMode>
//     <ResourceVersion>
//      <ResourceForm>02</ResourceForm>
//       <ResourceLink>https://images.xx.se/cover/1002443/1002443_202008061615.jpg</ResourceLink>
//     </ResourceVersion>
// </SupportingResource>
