import {
  Project,
  Writers,
  VariableDeclarationKind,
  ObjectLiteralExpression,
  IndentationText,
} from "ts-morph";
import { uniq } from "lodash";

import { pascalCase } from "change-case";

import * as data from "../onix53.json";

const project = new Project({
  manipulationSettings: {
    indentationText: IndentationText.TwoSpaces,
    useTrailingCommas: true,
  },
});

const comment = `// -----------------------------------
// This file is generated. Do not edit
// -----------------------------------
  `;

async function generateCodelist(codelist): Promise<string> {
  const name = pascalCase(codelist.CodeListDescription);
  const sourceFile = project.createSourceFile(`src/codelists/${name}.ts`, {});

  sourceFile.insertText(0, comment);

  const prop = sourceFile
    .addVariableStatement({
      declarationKind: VariableDeclarationKind.Const,
      declarations: [{ name, initializer: Writers.object({}) }],
      isExported: true,
    })
    .getDeclarations()[0]
    .getInitializer() as ObjectLiteralExpression;

  codelist.Code.forEach((code) => {
    prop.addPropertyAssignment({
      name: `"${code.CodeValue}"`,
      initializer: `"${pascalCase(code.CodeDescription)}"`,
    });
  });

  const codes: string[] = uniq(
    codelist.Code.map((code) => pascalCase(code.CodeDescription))
  );

  sourceFile.addEnum({
    name: `${name}Enum`,
    members: codes.map((code) => ({ name: code })),
    isExported: true,
  });

  await project.save();

  return name;
}

async function generate(codelists) {
  const codelistsFile = project.createSourceFile(`src/codelists/index.ts`, {});
  codelistsFile.insertText(0, comment);
  for (let i = 0; i < codelists.length; i += 1) {
    try {
      const name = await generateCodelist(codelists[i]);

      codelistsFile.addExportDeclaration({
        namedExports: [`${name}Enum`],
        moduleSpecifier: `./${name}`,
      });
    } catch (err) {
      console.log(err.message);
    }
  }

  await codelistsFile.save();
}

console.log("start");
generate(data.ONIXCodeTable.CodeList)
  .then(() => {
    console.log("done");
  })
  .catch((err) => {
    console.log("Failed");
  });
