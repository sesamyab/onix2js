import { parseValue } from '../utils/parse';
import {
  SubjectSchemeIdentifierEnum,
  SubjectSchemeIdentifier,
} from "../codelists/SubjectSchemeIdentifier";

export class Subject {
  constructor(json: any) {
    this.subjectSchemeIdentifier = 
      SubjectSchemeIdentifier[json.SubjectSchemeIdentifier[0]];
    const code = parseValue(json, "SubjectCode");
    if (code) this.subjectCode = code;
    const name = parseValue(json, "SubjectSchemeName");
    if (name) this.subjectName = name;
    const heading = parseValue(json, "SubjectHeadingText");
    if (heading) this.subjectHeadingText = heading;
  }

  subjectSchemeIdentifier: SubjectSchemeIdentifierEnum;
  // This type of value depends on the subjectSchemeIdentifier
  subjectCode: string;
  subjectName?: string;
  subjectHeadingText?: string;
}

// <Subject>
//     <SubjectSchemeIdentifier>12</SubjectSchemeIdentifier>
//     <SubjectCode>FA</SubjectCode>
// </Subject>
