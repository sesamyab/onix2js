import {
  NotificationOrUpdateTypeEnum,
  NotificationOrUpdateType,
} from "../codelists/NotificationOrUpdateType";
import { ProductIdentifier } from "./ProductIdentifier";
import { DescriptiveDetail } from "./DescriptiveDetail";
import { CollateralDetail } from "./CollateralDetail";
import { PublishingDetail } from "./PublishingDetail";
import { RelatedMaterial } from "./RelatedMaterial";
import { ProductSupply } from "./ProductSupply";
import { parseValue } from "../utils/parse";

export class Product {
  constructor(json: any) {
    this.notificationType = NotificationOrUpdateType[json.NotificationType[0]];
    this.recordReference = json.RecordReference[0];
    this.productIdentifiers = json.ProductIdentifier.map(
      (pi) => new ProductIdentifier(pi)
    );
    this.descriptiveDetail = new DescriptiveDetail(json.DescriptiveDetail[0]);
    this.collateralDetail = new CollateralDetail(json.CollateralDetail[0]);
    this.publishingDetail = new PublishingDetail(
      parseValue(json, "PublishingDetail")
    );
    this.relatedMaterial = new RelatedMaterial(
      parseValue(json, "RelatedMaterial")
    );
    this.productSupply = new ProductSupply(parseValue(json, "ProductSupply"));
  }

  notificationType: NotificationOrUpdateTypeEnum;
  recordReference: string;
  productIdentifiers: ProductIdentifier[];
  descriptiveDetail: DescriptiveDetail;
  collateralDetail: CollateralDetail;
  publishingDetail: PublishingDetail;
  relatedMaterial: RelatedMaterial;
  productSupply: ProductSupply;
}
