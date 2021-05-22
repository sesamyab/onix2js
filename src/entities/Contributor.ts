import {
  ContributorRoleCodeEnum,
  ContributorRoleCode,
} from "../codelists/ContributorRoleCode";
import { parseValue } from "../utils/parse";

export class Contributor {
  constructor(json) {
    this.personName = parseValue(json, "PersonName");
    this.personNameInverted = parseValue(json, "PersonNameInverted");
    this.contributorRole = ContributorRoleCode[json.ContributorRole[0]];
  }

  contributorRole: ContributorRoleCodeEnum;
  personName: string;
  personNameInverted: string;
}

// <Contributor>
//     <ContributorRole>B06</ContributorRole>
//     <PersonName>Per Erik Wahlund</PersonName>
//     <PersonNameInverted>Wahlund, Per Erik</PersonNameInverted>
// </Contributor>
