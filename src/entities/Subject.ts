import {
  SubjectSchemeIdentifierEnum,
  SubjectSchemeIdentifier,
} from "../codelists/SubjectSchemeIdentifier";

export class Subject {
  constructor(subjectJson) {
    this.subjectSchemeIdentifier =
      SubjectSchemeIdentifier[subjectJson.SubjectSchemeIdentifier[0]];
    this.subjectCode = subjectJson.SubjectCode[0];
  }

  subjectSchemeIdentifier: SubjectSchemeIdentifierEnum;
  // This type of value depends on the subjectSchemeIdentifier
  subjectCode: string;
}

// <Subject>
//     <SubjectSchemeIdentifier>12</SubjectSchemeIdentifier>
//     <SubjectCode>FA</SubjectCode>
// </Subject>
