import {
  ResourceContentTypeEnum,
  ResourceContentType,
} from "../codelists/resourceContentType";
import {
  ContentAudienceEnum,
  ContentAudience,
} from "../codelists/ContentAudience";
import { ResourceModeEnum, ResourceMode } from "../codelists/ResourceMode";

import { ResourceVersion } from "./ResourceVersion";

export class SupportingResource {
  constructor(json) {
    this.resourceContentType = ResourceContentType[json.ResourceContentType[0]];
    this.contentAudience = ContentAudience[json.ContentAudience[0]];
    this.resourceMode = ResourceMode[json.ResourceMode[0]];
    this.resourceVersion = new ResourceVersion(json.ResourceVersion[0]);
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
