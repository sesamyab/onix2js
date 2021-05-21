import {
  ProductCompositionEnum,
  ProductComposition,
} from "../codelists/ProductComposition";
import { ProductFormEnum, ProductForm } from "../codelists/ProductForm";
import {
  ProductFormDetailEnum,
  ProductFormDetail,
} from "../codelists/ProductFormDetail";
import {
  ProductContentTypeEnum,
  ProductContentType,
} from "../codelists/ProductContentType";
import {
  EPublicationTechnicalProtectionEnum,
  EPublicationTechnicalProtection,
} from "../codelists/EPublicationTechnicalProtection";

import { TitleDetail } from "./TitleDetail";
import { Contributor } from "./Contributor";
import { Language } from "./Language";
import { Subject } from "./Subject";

export class DescriptiveDetail {
  constructor(descriptiveDetailJson) {
    this.productComposition =
      ProductComposition[descriptiveDetailJson.ProductComposition[0]];
    this.productForm = ProductForm[descriptiveDetailJson.ProductForm[0]];
    this.productFormDetail =
      ProductFormDetail[descriptiveDetailJson.ProductFormDetail[0]];
    this.primaryContentType =
      ProductContentType[descriptiveDetailJson.PrimaryContentType[0]];
    this.epubTechnicalProtection =
      EPublicationTechnicalProtection[
        descriptiveDetailJson.EpubTechnicalProtection[0]
      ];

    this.titleDetail = new TitleDetail(descriptiveDetailJson.TitleDetail[0]);
    this.contributors = descriptiveDetailJson.Contributor.map(
      (c) => new Contributor(c)
    );
    this.languages = descriptiveDetailJson.Language.map((l) => new Language(l));
    this.subjects = descriptiveDetailJson.Subject.map((s) => new Subject(s));
  }

  productComposition: ProductCompositionEnum;
  productForm: ProductFormEnum;
  productFormDetail: ProductFormDetailEnum;
  primaryContentType: ProductContentTypeEnum;
  epubTechnicalProtection: EPublicationTechnicalProtectionEnum;
  titleDetail: TitleDetail;
  contributors: Contributor[];
  languages: Language[];
  subjects: Subject[];
}
