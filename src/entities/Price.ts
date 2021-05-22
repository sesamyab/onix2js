import { PriceTypeEnum, PriceType } from "../codelists/PriceType";
import {
  CurrencyCodeBasedOnIso_4217Enum,
  CurrencyCodeBasedOnIso_4217,
} from "../codelists/CurrencyCodeBasedOnIso_4217";

export class Price {
  constructor(json) {
    this.priceType = PriceType[json.PriceType[0]];
    this.priceAmount = parseFloat(json.PriceAmount[0]);
    this.currenctyCode = json.CurrencyCode[0];
    this.currency = CurrencyCodeBasedOnIso_4217[json.CurrencyCode[0]];
  }

  priceType: PriceTypeEnum;
  priceAmount: Number;
  currenctyCode: string;
  currency: CurrencyCodeBasedOnIso_4217Enum;
}

// <Price>
//     <PriceType>05</PriceType>
//     <PriceAmount>55.00</PriceAmount>
//     <CurrencyCode>SEK</CurrencyCode>
// </Price>
