import {
  ContributorRoleCodeEnum,
  ContributorRoleCode,
} from "../codelists/ContributorRoleCode";

export class Contributor {
  constructor(json) {
    this.personName = json.PersonName[0];
    this.personNameInverted = json.PersonNameInverted[0];
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
