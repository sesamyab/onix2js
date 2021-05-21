import { LanguageRoleEnum, LanguageRole } from "../codelists/LanguageRole";

export class Language {
  constructor(languageJson) {
    this.languageCode = languageJson.LanguageCode[0];
    this.languageRole = LanguageRole[languageJson.LanguageRole[0]];
  }

  languageRole: LanguageRoleEnum;
  languageCode: string;
}

// <Language>
//     <LanguageRole>01</LanguageRole>
//     <LanguageCode>swe</LanguageCode>
// </Language>
