import {
  ProductIdentifierTypeEnum,
  ProductIdentifierType,
} from "../codelists/ProductIdentifierType";

export class ProductIdentifier {
  constructor(json: any) {
    this.productType = ProductIdentifierType[json.ProductIDType[0]];
    this.idValue = json.IDValue[0];
  }

  productType: ProductIdentifierTypeEnum;
  idValue: string;
}
