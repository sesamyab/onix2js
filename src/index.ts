import { parseStringPromise } from "xml2js";

import Onix from "./entities/Onix";
import * as codelists from "./codelists/index";
import * as entities from "./entities/index";

async function parse(xmlText) {
  const onixJson = await parseStringPromise(xmlText);
  return new Onix(onixJson.ONIXMessage);
}

export { parse, codelists, entities };
