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

async function generateCodelist(codelist) {
  const project = new Project({
    manipulationSettings: {
      indentationText: IndentationText.TwoSpaces,
      useTrailingCommas: true,
    },
  });

  const name = pascalCase(codelist.CodeListDescription);
  const sourceFile = project.createSourceFile(`src/codelists/${name}.ts`, {});

  sourceFile.insertText(
    0,
    `// -----------------------------------
// This file is generated. Do not edit
// -----------------------------------
  `
  );

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

  const codes = codelist.Code.map((code) => pascalCase(code.CodeDescription));

  sourceFile.addEnum({
    name: `${name}Enum`,
    members: uniq(codes).map((code) => ({ name: code })),
    isExported: true,
  });

  await project.save();
}

async function generate(codelists) {
  for (let i = 0; i < codelists.length; i += 1) {
    try {
      await generateCodelist(codelists[i]);
    } catch (err) {
      console.log(err.message);
    }
  }
}

console.log("start");
generate(data.ONIXCodeTable.CodeList)
  .then(() => {
    console.log("done");
  })
  .catch((err) => {
    console.log("Failed");
  });
