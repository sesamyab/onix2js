import { PriceTypeEnum, PriceType } from "../codelists/PriceType";
import {
  CurrencyCodeBasedOnIso_4217Enum,
  CurrencyCodeBasedOnIso_4217,
} from "../codelists/CurrencyCodeBasedOnIso_4217";

import { parseValue, parseType } from "../utils/parse";

export class Price {
  constructor(json: any) {
    this.priceType = parseType(json, "PriceType", PriceType);
    this.priceAmount = parseFloat(parseValue(json, "PriceAmount"));
    this.currencyCode = parseValue(json, "CurrencyCode");
    this.currency = parseType(
      json,
      "CurrencyCode",
      CurrencyCodeBasedOnIso_4217
    );
  }

  priceType: PriceTypeEnum;
  priceAmount: Number;
  currencyCode: string;
  currency: CurrencyCodeBasedOnIso_4217Enum;
}

// <Price>
//     <PriceType>05</PriceType>
//     <PriceAmount>55.00</PriceAmount>
//     <CurrencyCode>SEK</CurrencyCode>
// </Price>
