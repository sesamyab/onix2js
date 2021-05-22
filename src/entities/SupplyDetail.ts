import { Supplier } from "./Supplier";
import { Price } from "./Price";
import {
  ProductAvailabilityEnum,
  ProductAvailability,
} from "../codelists/ProductAvailability";

export class SupplyDetail {
  constructor(json) {
    this.supplier = new Supplier(json.Supplier[0]);
    this.price = new Price(json.Price[0]);
    this.productAvailability = ProductAvailability[json.ProductAvailability[0]];
  }

  supplier: Supplier;
  productAvailability: ProductAvailabilityEnum;
  price: Price;
}

// <SupplyDetail>
//     <Supplier>
//         <SupplierRole>03</SupplierRole>
//         <SupplierName>xx Media AB</SupplierName>
//     </Supplier>
//     <ProductAvailability>20</ProductAvailability>
//     <Price>
//         <PriceType>05</PriceType>
//         <PriceAmount>55.00</PriceAmount>
//         <CurrencyCode>SEK</CurrencyCode>
//     </Price>
// </SupplyDetail>
