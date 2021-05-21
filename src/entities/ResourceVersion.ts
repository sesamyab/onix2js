import { ResourceFormEnum, ResourceForm } from "../codelists/ResourceForm";

export class ResourceVersion {
  constructor(json) {
    this.resourceForm = ResourceForm[json.ResourceForm[0]];
    this.resourceLink = json.ResourceLink[0];
  }

  resourceForm: ResourceFormEnum;
  resourceLink: string;
}

// <ResourceVersion>
//     <ResourceForm>02</ResourceForm>
//     <ResourceLink>https://images.xx.se/cover/1002443/1002443_202008061615.jpg</ResourceLink>
// </ResourceVersion>
