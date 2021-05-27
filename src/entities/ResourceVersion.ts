import { ResourceFormEnum, ResourceForm } from "../codelists/ResourceForm";

import { parseValue, parseType } from "../utils/parse";

export class ResourceVersion {
  constructor(json: any) {
    this.resourceForm = parseType(json, "ResourceForm", ResourceForm);
    this.resourceLink = parseValue(json, "ResourceLink");
  }

  resourceForm: ResourceFormEnum;
  resourceLink: string;
}

// <ResourceVersion>
//     <ResourceForm>02</ResourceForm>
//     <ResourceLink>https://images.xx.se/cover/1002443/1002443_202008061615.jpg</ResourceLink>
// </ResourceVersion>
