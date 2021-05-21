import {
  Project,
  Writers,
  VariableDeclarationKind,
  ObjectLiteralExpression,
} from "ts-morph";

async function generate(codelist) {
  // initialize
  const project = new Project({
    // Optionally specify compiler options, tsconfig.json, in-memory file system, and more here.
    // If you initialize with a tsconfig.json, then it will automatically populate the project
    // with the associated source files.
    // Read more: https://ts-morph.com/setup/
  });

  const sourceFile = project.createSourceFile(
    "src/codelists/MyCodelist.ts",
    {}
  );

  const prop = sourceFile
    .addVariableStatement({
      declarationKind: VariableDeclarationKind.Const,
      declarations: [{ name: "ViewStore", initializer: Writers.object({}) }],
      isExported: true,
    })
    // .setIsDefaultExport(true)
    .getDeclarations()[0]
    .getInitializer() as ObjectLiteralExpression;

  prop.addPropertyAssignment({
    name: "someProp",
    initializer: "'ur mum'",
  });

  // asynchronously save all the changes above
  await project.save();
}

console.log("start");
generate()
  .then(() => {
    console.log("done");
  })
  .catch((err) => {
    console.log("Failed");
  });
