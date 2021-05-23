import { ExtentTypeEnum, ExtentType } from "../codelists/ExtentType";
import { ExtentUnitEnum, ExtentUnit } from "../codelists/ExtentUnit";
import { parseValue, parseType } from "../utils/parse";

export class Extent {
  constructor(json: any) {
    this.extentType = parseType(json, "ExtentType", ExtentType);
    this.extentUnit = parseType(json, "ExtentUnit", ExtentUnit);
    this.extentValue = parseValue(json, "ExtentValue");
  }

  extentType: ExtentTypeEnum;
  extentUnit: ExtentUnitEnum;
  extentValue: Number;
}

// <Extent>
//     <ExtentType>22</ExtentType>
//     <ExtentValue>962</ExtentValue>
//     <ExtentUnit>18</ExtentUnit>
// </Extent>
