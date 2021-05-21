import { Header } from "./Header";
import { Product } from "./Product";
import { parseStringPromise } from "xml2js";

export default class Onix {
  constructor(onixJson: any, { mode = "strict" }) {
    this.header = new Header(onixJson.header);
    this.product = new Product(onixJson.product);
  }

  static async parse(xmlText) {
    const onixJson = await parseStringPromise(xmlText);
    return new Onix(onixJson, {});
  }

  header: Header;
  product: Product;
}
