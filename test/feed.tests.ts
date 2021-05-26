import { expect } from "chai";
import fs from "fs";
import { parse } from "../src/index";

describe("Feeds", () => {
  it("1.xml", async () => {
    const xml = fs.readFileSync("./test/templates/1.xml", "utf8");

    const onix = await parse(xml);

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
              titleElements: [
                {
                  titleElementLevel: "Product",
                  titleText: "Moby Dick – Valen",
                },
                {
                  titleElementLevel: "CollectionLevel",
                  titleText: "Series",
                },
              ],
            },
            contributors: [
              {
                contributorRole: "ByAuthor",
                personName: "Herman Melville",
                personNameInverted: "Melville, Herman",
                keyNames: null,
                namesBeforeKey: null,
              },
              {
                contributorRole: "TranslatedBy",
                personName: "Per Erik Wahlund",
                personNameInverted: "Wahlund, Per Erik",
                keyNames: null,
                namesBeforeKey: null,
              },
            ],
            languages: [
              {
                languageCode: "swe",
                languageRole: "LanguageOfText",
              },
            ],
            extents: [],
            subjects: [
              {
                subjectCode: "FA",
                subjectSchemeIdentifier: "BicSubjectCategory",
              },
              {
                subjectCode: "FB",
                subjectSchemeIdentifier: "ThemaSubjectCategory",
              },
              {
                subjectCode: "5AK",
                subjectSchemeIdentifier:
                  "ThemaInterestAgeSpecialInterestQualifier",
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
            imprint: {
              imprintName: null,
            },
            publisher: {
              publishingRole: "Publisher",
              publishingName: "xx Media",
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
                website: {
                  websiteLink: null,
                },
              },
              price: {
                priceType: "SupplierSNetPriceExcludingTax",
                currencyCode: "SEK",
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

    const onix = await parse(xml);

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
              titleElements: [
                {
                  titleElementLevel: "Product",
                  titleText: "Gemmesteder",
                },
              ],
            },
            contributors: [
              {
                contributorRole: "ByAuthor",
                keyNames: "Webb",
                namesBeforeKey: "Katherine",
                personName: null,
                personNameInverted: null,
              },
              {
                contributorRole: "TranslatedBy",
                keyNames: "Oxvig",
                namesBeforeKey: "Ulla",
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
            extents: [
              {
                extentType: "MainContentPageCount",
                extentUnit: "Pages",
                extentValue: "384",
              },
              {
                extentType: "Filesize",
                extentUnit: "Kbytes",
                extentValue: "962",
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
              text: "<p>England 1922. Da en grusom forbrydelse finder sted i den idylliske landsby Slaughterford, sender det rystelser gennem det lille samfund, som forandrer byen og menneskene i den for altid.</p><p>Hos den velhavende Hadleigh-familie på Manor Farm arbejder den 15-årige landsbypige Pudding Cartwright i hestestalden. Som alle andre i den lille by holder Pudding af sin altid venlige og elskværdige arbejdsgiver, Alistair, og hun er på nærmeste hold vidne til det ulykkelige ægteskab mellem Alistair og storbypigen Irene. Irene har nemlig i al hast forladt London og den mand, hun virkelig elsker, for at undgå at gøre skandale, og hun kæmper nu med at vænne sig til sit nye liv i den lille, søvnige by.</p><p>Da et mord bliver begået, sender det chokbølger gennem den lille by, og Puddings bror, Donny, der ikke har været sig selv, siden han kom tilbage fra krigen, mistænkes for at stå bag forbrydelsen. Med hjælp fra Irene må Pudding nu gå i gang med at afdække, hvad der virkelig skete, og med det afsløres sandheder, som ingen af dem kunne have forudset.</p>",
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
            imprint: {
              imprintName: "Cicero",
            },
            publisher: {
              publishingRole: "Publisher",
              publishingName: "Gyldendal",
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
                website: {
                  websiteLink: "ftp://ftp.qa.xx.dk/yy.epub",
                },
              },
              price: {
                priceType: "SupplierSNetPriceExcludingTax",
                currencyCode: "DKK",
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
