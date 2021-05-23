import {
  SubjectSchemeIdentifierEnum,
  SubjectSchemeIdentifier,
} from "../codelists/SubjectSchemeIdentifier";

export class Subject {
  constructor(json: any) {
    this.subjectSchemeIdentifier =
      SubjectSchemeIdentifier[json.SubjectSchemeIdentifier[0]];
    this.subjectCode = json.SubjectCode[0];
  }

  subjectSchemeIdentifier: SubjectSchemeIdentifierEnum;
  // This type of value depends on the subjectSchemeIdentifier
  subjectCode: string;
}

// <Subject>
//     <SubjectSchemeIdentifier>12</SubjectSchemeIdentifier>
//     <SubjectCode>FA</SubjectCode>
// </Subject>
