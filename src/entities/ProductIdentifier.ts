import {
  ProductIdentifierTypeEnum,
  ProductIdentifierType,
} from "../codelists/ProductIdentifierType";

export class ProductIdentifier {
  constructor(productIndetifierJson) {
    this.productType =
      ProductIdentifierType[productIndetifierJson.ProductIDType[0]];
    this.idValue = productIndetifierJson.IDValue[0];
  }

  productType: ProductIdentifierTypeEnum;
  idValue: string;
}
