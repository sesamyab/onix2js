import { parseStringPromise } from "xml2js";

import Onix from "./entities/Onix";

async function parse(xmlText) {
  const onixJson = await parseStringPromise(xmlText);
  return new Onix(onixJson.ONIXMessage);
}

export { parse };
