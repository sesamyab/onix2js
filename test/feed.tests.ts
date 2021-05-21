import { expect } from "chai";
import fs from "fs";
import Onix from "../src/entities/Onix";

describe("Feeds", () => {
  it("1.xml", async () => {
    const xml = fs.readFileSync("./test/templates/1.xml", "utf8");

    const onix = await Onix.parse(xml);

    const expected = {
      header: {
        sender: {
          senderName: "xx Media AB",
        },
        sentDateTime: new Date(Date.UTC(2020, 9, 13)),
      },
      products: [
        {
          notificationType: "EarlyNotification",
          recordReference: "com.xxmedia.onix.1002443",
          productIdentifiers: [
            {
              idValue: "1002443",
              productType: "Proprietary",
            },
            {
              idValue: "9789185201259",
              productType: "Isbn_13",
            },
          ],
          descriptiveDetail: {
            productComposition: "SingleComponentRetailProduct",
            productForm: "DigitalDeliveredElectronically",
            productFormDetail: "Epub",
            primaryContentType: "TextEyeReadable",
            epubTechnicalProtection: "DigitalWatermarking",
            titleDetail: {
              titleType:
                "DistinctiveTitleBookCoverTitleSerialTitleOnItemSerialContentItemOrReviewedResource",
              titleElement: {
                titleElementLevel: "Product",
                titleText: "Moby Dick – Valen",
              },
            },
            contributors: [
              {
                contributorRole: "ByAuthor",
                personName: "Herman Melville",
                personNameInverted: "Melville, Herman",
              },
              {
                contributorRole: "TranslatedBy",
                personName: "Per Erik Wahlund",
                personNameInverted: "Wahlund, Per Erik",
              },
            ],
            languages: [
              {
                languageCode: "swe",
                languageRole: "LanguageOfText",
              },
            ],
            subjects: [
              {
                subjectCode: "FA",
                subjectSchemeIdentifier: "BicSubjectCategory",
              },
              {
                subjectCode: "FB",
                subjectSchemeIdentifier: "ThemaSubjectCategory",
              },
            ],
          },
        },
      ],
    };

    expect(onix).to.deep.equal(expected);
  });
});
