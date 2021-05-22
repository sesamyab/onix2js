import { Supplier } from "./Supplier";
import { Price } from "./Price";
import {
  ProductAvailabilityEnum,
  ProductAvailability,
} from "../codelists/ProductAvailability";
import { parseValue, parseType } from "../utils/parse";

export class SupplyDetail {
  constructor(json) {
    this.supplier = new Supplier(parseValue(json, "Supplier"));
    this.price = new Price(parseValue(json, "Price"));
    this.productAvailability = parseType(
      json,
      "ProductAvailability",
      ProductAvailability
    );
  }

  supplier: Supplier;
  productAvailability: ProductAvailabilityEnum;
  price: Price;
}

// <SupplyDetail>
//     <Supplier>
//         <SupplierRole>03</SupplierRole>
//         <SupplierName>xx Media AB</SupplierName>
//         <Website>
//            <WebsiteLink>ftp://ftp.qa.xx.dk/yy.epub</WebsiteLink>
//         </Website>
//     </Supplier>
//     <ProductAvailability>20</ProductAvailability>
//     <Price>
//         <PriceType>05</PriceType>
//         <PriceAmount>55.00</PriceAmount>
//         <CurrencyCode>SEK</CurrencyCode>
//     </Price>
// </SupplyDetail>
