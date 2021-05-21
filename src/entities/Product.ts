import { NotificationOrUpdateTypeEnum } from "../codelists/NotificationOrUpdateType";
import { ProductIdentifier } from "./ProductIdentifier";
import { DescriptiveDetail } from "./DescriptiveDetail";

export class Product {
  constructor(productJson) {}

  notificationType: NotificationOrUpdateTypeEnum;
  recordReference: string;
  productIdentifiers: ProductIdentifier[];
  descriptiveDetail: DescriptiveDetail;
}
