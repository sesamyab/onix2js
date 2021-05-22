import { SupplierRoleEnum, SupplierRole } from "../codelists/SupplierRole";

export class Supplier {
  constructor(json) {
    this.supplierRole = SupplierRole[json.SupplierRole[0]];
    this.supplierName = json.SupplierName[0];
  }

  supplierRole: SupplierRoleEnum;
  supplierName: string;
}

//   <Supplier>
//     <SupplierRole>03</SupplierRole>
//     <SupplierName>xx Media AB</SupplierName>
//   </Supplier>
