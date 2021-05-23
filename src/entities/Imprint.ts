import { parseValue } from "../utils/parse";

export class Imprint {
  constructor(json: any) {
    this.imprintName = parseValue(json, "ImprintName");
  }

  imprintName: string;
}

// <Imprint>
//   <ImprintName>Cicero</ImprintName>
// </Imprint>;
