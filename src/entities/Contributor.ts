import {
  ContributorRoleCodeEnum,
  ContributorRoleCode,
} from "../codelists/ContributorRoleCode";

export class Contributor {
  constructor(contributorJson) {
    this.personName = contributorJson.PersonName[0];
    this.personNameInverted = contributorJson.PersonNameInverted[0];
    this.contributorRole =
      ContributorRoleCode[contributorJson.ContributorRole[0]];
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
