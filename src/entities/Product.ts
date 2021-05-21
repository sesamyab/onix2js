import {
  NotificationOrUpdateTypeEnum,
  NotificationOrUpdateType,
} from "../codelists/NotificationOrUpdateType";
import { ProductIdentifier } from "./ProductIdentifier";
import { DescriptiveDetail } from "./DescriptiveDetail";

export class Product {
  constructor(productJson) {
    this.notificationType =
      NotificationOrUpdateType[productJson.NotificationType[0]];
    this.recordReference = productJson.RecordReference[0];
    this.productIdentifiers = productJson.ProductIdentifier.map(
      (pi) => new ProductIdentifier(pi)
    );
    this.descriptiveDetail = new DescriptiveDetail(
      productJson.DescriptiveDetail[0]
    );
  }

  notificationType: NotificationOrUpdateTypeEnum;
  recordReference: string;
  productIdentifiers: ProductIdentifier[];
  descriptiveDetail: DescriptiveDetail;
}
