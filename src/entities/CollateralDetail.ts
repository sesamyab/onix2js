import { TextContent } from "./TextContent";
import { SupportingResource } from "./SupportingResource";

export class CollateralDetail {
  constructor(json: any) {
    this.textContent = new TextContent(json.TextContent[0]);
    this.supportingResources = json.SupportingResource.map(
      (sr) => new SupportingResource(sr)
    );
  }

  textContent: TextContent;
  supportingResources: SupportingResource[];
}
