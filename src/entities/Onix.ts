import { Header } from "./Header";
import { Product } from "./Product";

export default class Onix {
  constructor(onixJson, { mode = "strict" }) {}

  static parse(xmlText) {
    const onixJson = {}; // Parse the xml
    return new Onix(onixJson, {});
  }

  header: Header;
  product: Product;
}
