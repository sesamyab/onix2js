import { Header } from "./Header";
import { Product } from "./Product";
import { parseStringPromise } from "xml2js";

export default class Onix {
  constructor(json: any) {
    this.header = new Header(json.Header[0]);
    this.products = json.Product.map((product) => new Product(product));
  }

  header: Header;
  products: Product[];
}
