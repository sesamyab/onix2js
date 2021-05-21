export const BarcodeIndicator = {
  "00": "NotBarcoded",
  "01": "BarcodedSchemeUnspecified",
  "02": "Gtin_13",
  "03": "Gtin_13_5UsDollarPriceEncoded",
  "04": "Gtin_13_5CanDollarPriceEncoded",
  "05": "Gtin_13_5NoPriceEncoded",
  "06": "Upc_12ItemSpecific",
  "07": "Upc_12_5ItemSpecific",
  "08": "Upc_12PricePoint",
  "09": "Upc_12_5PricePoint",
};

export enum BarcodeIndicatorEnum {
  NotBarcoded,
  BarcodedSchemeUnspecified,
  Gtin_13,
  Gtin_13_5UsDollarPriceEncoded,
  Gtin_13_5CanDollarPriceEncoded,
  Gtin_13_5NoPriceEncoded,
  Upc_12ItemSpecific,
  Upc_12_5ItemSpecific,
  Upc_12PricePoint,
  Upc_12_5PricePoint
}
