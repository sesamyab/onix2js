import { Header } from "./Header";
import { Product } from "./Product";
import { parseStringPromise } from "xml2js";

export default class Onix {
  constructor(onixJson: any, { mode = "strict" }) {
    this.header = new Header(onixJson.Header[0]);
    this.products = onixJson.Product.map((product) => new Product(product));
  }

  static async parse(xmlText) {
    const onixJson = await parseStringPromise(xmlText);
    return new Onix(onixJson.ONIXMessage, {});
  }

  header: Header;
  products: Product[];
}
