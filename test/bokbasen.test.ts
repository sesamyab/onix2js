import { expect } from "chai";
import fs from "fs";
import { parse } from "../src/index";

describe("Feeds", () => {
  it("bokbasen.xml", async () => {
    const xml = fs.readFileSync("./test/templates/bokbasen.xml", "utf8");

    const onix = await parse(xml);

    const expected = {
      header: {
        sender: {
          senderName: "Bokbasen AS",
        },
        sentDateTime: new Date(Date.UTC(2021, 8, 22)),
      },
      products: [
        {
          notificationType: "NotificationConfirmedOnPublication",
          recordReference: "no.bokbasen.150158641",
          productIdentifiers: [
            {
              idValue: "9788205463684",
              productType: "Gtin_13",
            },
            {
              idValue: "9788205463684",
              productType: "Isbn_13",
            },
            {
              idValue: "150158641",
              productType: "Proprietary",
            },
          ],
          descriptiveDetail: {
            productComposition: "SingleComponentRetailProduct",
            productForm: "DigitalDownload",
            productFormDetail: "Epub",
            primaryContentType: null,
            epubTechnicalProtection: "DigitalWatermarking",
            collections: [ ],
            titleDetails: [{
              titleType:
                "DistinctiveTitleBookCoverTitleSerialTitleOnItemSerialContentItemOrReviewedResource",
              titleElements: [
                {
                  partNumber: null,
                  titleElementLevel: "Product",
                  titlePrefix: null,
                  titleText: "Den 5. bølgen",
                  titleWithoutPrefix: null,
                },
              ],
            },
            {
              titleType:
                  "TitleInOriginalLanguage",
              titleElements: [
                {
                  partNumber: null,
                  titleElementLevel: "Product",
                  titlePrefix: null,
                  titleText: "The 5th wave",
                  titleWithoutPrefix: null,
                },
              ],
            }
            ],
            contributors: [
              {
                contributorRole: "ByAuthor",
                personName: null,
                personNameInverted: "Yancey, Rick",
                keyNames: null,
                namesBeforeKey: null,
              },
              {
                contributorRole: "TranslatedBy",
                personName: null,
                personNameInverted: "Sjøgren-Erichsen, Torleif",
                keyNames: null,
                namesBeforeKey: null,
              },
            ],
            languages: [
              {
                languageCode: "nob",
                languageRole: "LanguageOfText",
              },
            ],
            extents: [
              {
                extentType: "Filesize",
                extentUnit: "Bytes",
                extentValue: "2476160",
              },{
                extentType: "NumberOfPagesInPrintCounterpart",
                extentUnit: "Pages",
                extentValue: "484",
              },
            ],
            subjects: [
              {
                subjectCode: "858",
                subjectSchemeIdentifier: "Bokgrupper",
              },
              {
                subjectCode: "47011",
                subjectSchemeIdentifier: "Varegrupper",
              },
              {
                subjectHeadingText: "Skjønnlitteratur",
                subjectName: "Bokbasen_LitteraryType",
                subjectSchemeIdentifier: "ProprietarySubjectScheme",
              },
            ],
          },
          collateralDetail: {
            textContent: {
              contentAudience: "Unrestricted",
              text: "Enestående - denne må ingen gå glipp av under noen omstendigheter! Entertainment Weekly\n\nThe Passage møter Ender?s game i en episk ny sci-fi-trilogi fra prisvinnende forfatter Rick Yancey.\n\n\nEtter den 1. bølgen er det bare mørke igjen. Etter den 2., unnslipper bare de heldige. Og etter den 3. er det bare de uheldige som slipper unna. Etter den 4. bølgen er det bare én regel som gjelder: ikke stol på noen.\nNå er den 5. bølgen i emning, og på en øde motorvei flykter Cassie fra Dem. Vesenene som bare ser menneskelige ut, og som streifer omkring i utkanten av byene og dreper alle de ser. De som har spredt de siste overlevende på Jorden for alle vinder. For å holde seg i live, må man være alene, tenker Cassie, men det er før hun møter Evan Walker. Den forførende og mystiske Evan Walker er kanskje Cassies eneste håp om å redde broren - og kanskje til og med seg selv. Men Cassie blir nødt til å velge: mellom tillit og fortvilelse, mellom trass og tiltro, mellom liv og død. Mellom å gi opp og konfrontere.",
              textFormat: "DefaultTextFormat",
              textType: "Description",
            },
            supportingResources: [],
          },
          publishingDetail: {
            imprint: {
              imprintName: 'Gyldendal',
            },
            publisher: {
              publishingRole: "Publisher",
              publishingName: "Gyldendal Norsk Forlag AS",
            },
            publishingStatus: null,
            publishingDates: [
              {
                date: new Date(Date.UTC(2014, 0, 1)),
                publishingDateRole: "PublicationDate",
              },
              {
                date: new Date(Date.UTC(2014, 0, 1)),
                publishingDateRole: "LastReprintDate",
              },
              {
                date: new Date(Date.UTC(2014, 3, 1)),
                publishingDateRole: "DateOfFirstPublication",
              },
            ],
            salesRights: {
              salesRightsType: null,
              territory: {
                regionsIncluded: null,
              },
            },
          },
          relatedMaterial: {},
          productSupply: {
            supplyDetail: {
              productAvailability: "NotAvailableReasonUnspecified",
              supplier: {
                supplierName: "DDS",
                supplierRole: "PublisherSDistributorToRetailers",
                website: {
                  websiteLink: null,
                },
              },
              price: {
                priceType: "RrpIncludingTax",
                currencyCode: "NOK",
                currency: "NorwegianKrone",
                priceAmount: 99,
              },
            },
          },
        },
      ],
    };

    expect(onix).to.deep.equal(expected);
  });

});
