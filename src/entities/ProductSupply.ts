import { SupplyDetail } from "./SupplyDetail";

export class ProductSupply {
  constructor(json: any) {
    this.supplyDetail = new SupplyDetail(json.SupplyDetail[0]);
  }

  supplyDetail: SupplyDetail;
}

// <ProductSupply>
//     <SupplyDetail>
//         <Supplier>
//             <SupplierRole>03</SupplierRole>
//             <SupplierName>xx Media AB</SupplierName>
//         </Supplier>
//         <ProductAvailability>20</ProductAvailability>
//         <Price>
//             <PriceType>05</PriceType>
//             <PriceAmount>55.00</PriceAmount>
//             <CurrencyCode>SEK</CurrencyCode>
//         </Price>
//     </SupplyDetail>
// </ProductSupply>
