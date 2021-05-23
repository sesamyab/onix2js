import {
  ContributorRoleCodeEnum,
  ContributorRoleCode,
} from "../codelists/ContributorRoleCode";
import { parseValue } from "../utils/parse";

export class Contributor {
  constructor(json: any) {
    this.personName = parseValue(json, "PersonName");
    this.personNameInverted = parseValue(json, "PersonNameInverted");
    this.namesBeforeKey = parseValue(json, "NamesBeforeKey");
    this.keyNames = parseValue(json, "KeyNames");
    this.contributorRole = ContributorRoleCode[json.ContributorRole[0]];
  }

  contributorRole: ContributorRoleCodeEnum;
  personName: string;
  personNameInverted: string;
  namesBeforeKey: string;
  keyNames: string;
}

// <Contributor>
//     <ContributorRole>B06</ContributorRole>
//     <PersonName>Per Erik Wahlund</PersonName>
//     <PersonNameInverted>Wahlund, Per Erik</PersonNameInverted>
// </Contributor>
