import {
  Project,
  Writers,
  VariableDeclarationKind,
  ObjectLiteralExpression,
  IndentationText,
} from "ts-morph";

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

  // asynchronously save all the changes above
  await project.save();
}

async function generate(codelists) {
  for (let i = 1; i < codelists.length; i += 1) {
    await generateCodelist(codelists[i]);
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
