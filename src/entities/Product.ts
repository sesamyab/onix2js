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

export class Product {
  constructor(json) {
    this.notificationType = NotificationOrUpdateType[json.NotificationType[0]];
    this.recordReference = json.RecordReference[0];
    this.productIdentifiers = json.ProductIdentifier.map(
      (pi) => new ProductIdentifier(pi)
    );
    this.descriptiveDetail = new DescriptiveDetail(json.DescriptiveDetail[0]);
    this.collateralDetail = new CollateralDetail(json.CollateralDetail[0]);
    this.publishingDetail = new PublishingDetail(json.PublishingDetail[0]);
    this.relatedMaterial = new RelatedMaterial(json.RelatedMaterial[0]);
    this.productSupply = new ProductSupply(json.ProductSupply[0]);
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
