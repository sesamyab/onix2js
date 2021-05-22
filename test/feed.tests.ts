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
          collateralDetail: {
            textContent: {
              contentAudience: "Unrestricted",
              text: "Den stora valen Moby Dick är kapten Ahabs största fiende. I en tidigare strid med valen har Ahab förlorat sitt ben. Nu beger han sig ut på jakt efter det väldiga djuret. En ung man ombord, Ismael, blir vittne till kaptenens totala besatthet och märker att han är beredd att offra allting, sitt liv, sitt skepp och sin besättning. <br><br> Översättningen är gjord av Per Erik Wahlund som även har skrivit inledningen och de utförliga ord- och namnförklaringarna i slutet av boken.",
              textFormat: "Html",
              textType: "Description",
            },
            supportingResources: [
              {
                resourceContentType: "FrontCover",
                contentAudience: "Unrestricted",
                resourceMode: "Image",
                resourceVersion: {
                  resourceForm: "DownloadableFile",
                  resourceLink:
                    "https://images.xx.se/cover/1002443/1002443_202008061615.jpg",
                },
              },
              {
                resourceContentType: "SampleContent",
                contentAudience: "Unrestricted",
                resourceMode: "Text",
                resourceVersion: {
                  resourceForm: "DownloadableFile",
                  resourceLink:
                    "https://samplefiles.xx.se/epub/1002443/1002443_201512091111.epub",
                },
              },
            ],
          },
          publishingDetail: {
            publisher: {
              publishingRole: "Publisher",
            },
            publishingStatus: "Active",
            publishingDates: [
              {
                date: new Date(Date.UTC(2005, 7, 3)),
                publishingDateRole: "PublicationDate",
              },
              {
                date: new Date(Date.UTC(2005, 7, 3)),
                publishingDateRole: "SalesEmbargoDate",
              },
            ],
            salesRights: {
              salesRightsType:
                "ForSaleWithNonExclusiveRightsInTheSpecifiedCountriesOrTerritories",
              territory: {
                regionsIncluded: "World",
              },
            },
          },
          relatedMaterial: {},
          productSupply: {
            supplyDetail: {
              productAvailability: "Available",
              supplier: {
                supplierName: "xx Media AB",
                supplierRole: "PublisherSNonExclusiveDistributorToRetailers",
              },
              price: {
                priceType: "SupplierSNetPriceExcludingTax",
                currenctyCode: "SEK",
                currency: "SwedishKrona",
                priceAmount: 55,
              },
            },
          },
        },
      ],
    };

    expect(onix).to.deep.equal(expected);
  });

  it("2.xml", async () => {
    const xml = fs.readFileSync("./test/templates/2.xml", "utf8");

    const onix = await Onix.parse(xml);

    const expected = {
      header: {
        sender: {
          senderName: "xx",
        },
        sentDateTime: new Date(Date.UTC(2021, 4, 21)),
      },
      products: [
        {
          notificationType: "NotificationConfirmedOnPublication",
          recordReference: "04A48B76179A451C9C54CBE2CA8C646D",
          productIdentifiers: [
            {
              idValue: "9788763856553",
              productType: "Isbn_13",
            },
          ],
          descriptiveDetail: {
            productComposition: "SingleComponentRetailProduct",
            productForm: "DigitalDownload",
            productFormDetail: "Reflowable",
            primaryContentType: "TextEyeReadable",
            epubTechnicalProtection: "DigitalWatermarking",
            titleDetail: {
              titleType:
                "DistinctiveTitleBookCoverTitleSerialTitleOnItemSerialContentItemOrReviewedResource",
              titleElement: {
                titleElementLevel: "Product",
                titleText: "Gemmesteder",
              },
            },
            contributors: [
              {
                contributorRole: "ByAuthor",
                personName: null,
                personNameInverted: null,
              },
              {
                contributorRole: "TranslatedBy",
                personName: null,
                personNameInverted: null,
              },
            ],
            languages: [
              {
                languageCode: "dan",
                languageRole: "LanguageOfText",
              },
            ],
            subjects: [
              {
                subjectCode: "1DBK",
                subjectSchemeIdentifier: "BicSubjectCategory",
              },
              {
                subjectCode: "3JJ",
                subjectSchemeIdentifier: "BicSubjectCategory",
              },
              {
                subjectCode: "FFH",
                subjectSchemeIdentifier: "BicSubjectCategory",
              },
              {
                subjectCode: "FV",
                subjectSchemeIdentifier: "BicSubjectCategory",
              },
              {
                subjectCode: "1DDU",
                subjectSchemeIdentifier: "ThemaSubjectCategory",
              },
              {
                subjectCode: "3MPB",
                subjectSchemeIdentifier: "ThemaSubjectCategory",
              },
              {
                subjectCode: "FFH",
                subjectSchemeIdentifier: "ThemaSubjectCategory",
              },
              {
                subjectCode: "FV",
                subjectSchemeIdentifier: "ThemaSubjectCategory",
              },
            ],
          },
          collateralDetail: {
            textContent: {
              contentAudience: "Unrestricted",
              text: null,
              textFormat: null,
              textType: "Description",
            },
            supportingResources: [
              {
                resourceContentType: "FrontCover",
                contentAudience: "Unrestricted",
                resourceMode: "Image",
                resourceVersion: {
                  resourceForm: "LinkableResource",
                  resourceLink: "https://images.qa.xx.dk/01/yy.jpg",
                },
              },
            ],
          },
          publishingDetail: {
            publisher: {
              publishingRole: "Publisher",
            },
            publishingStatus: "Active",
            publishingDates: [
              {
                date: new Date(Date.UTC(2018, 5, 9)),
                publishingDateRole: "PublicationDate",
              },
            ],
            salesRights: {
              salesRightsType:
                "ForSaleWithNonExclusiveRightsInTheSpecifiedCountriesOrTerritories",
              territory: {
                regionsIncluded: "World",
              },
            },
          },
          relatedMaterial: {},
          productSupply: {
            supplyDetail: {
              productAvailability: "Available",
              supplier: {
                supplierName: "Gyldendal",
                supplierRole: "Unspecified",
              },
              price: {
                priceType: "SupplierSNetPriceExcludingTax",
                currenctyCode: "DKK",
                currency: "DanishKrone",
                priceAmount: 50,
              },
            },
          },
        },
      ],
    };

    expect(onix).to.deep.equal(expected);
  });
});
