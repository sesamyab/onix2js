import { LanguageRoleEnum, LanguageRole } from "../codelists/LanguageRole";

export class Language {
  constructor(json) {
    this.languageCode = json.LanguageCode[0];
    this.languageRole = LanguageRole[json.LanguageRole[0]];
  }

  languageRole: LanguageRoleEnum;
  languageCode: string;
}

// <Language>
//     <LanguageRole>01</LanguageRole>
//     <LanguageCode>swe</LanguageCode>
// </Language>
