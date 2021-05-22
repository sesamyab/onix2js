import { SupplierRoleEnum, SupplierRole } from "../codelists/SupplierRole";
import { Website } from "./Website";
import { parseValue, parseType } from "../utils/parse";

export class Supplier {
  constructor(json) {
    this.supplierRole = parseType(json, "SupplierRole", SupplierRole);
    this.supplierName = parseValue(json, "SupplierName");
    this.website = new Website(parseValue(json, "Website"));
  }

  supplierRole: SupplierRoleEnum;
  supplierName: string;
  website: Website;
}

//   <Supplier>
//     <SupplierRole>03</SupplierRole>
//     <SupplierName>xx Media AB</SupplierName>
//         <Website>
//            <WebsiteLink>ftp://ftp.qa.xx.dk/yy.epub</WebsiteLink>
//         </Website>
//   </Supplier>
