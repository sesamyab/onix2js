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
  constructor(json) {
    this.productComposition = ProductComposition[json.ProductComposition[0]];
    this.productForm = ProductForm[json.ProductForm[0]];
    this.productFormDetail = ProductFormDetail[json.ProductFormDetail[0]];
    this.primaryContentType = ProductContentType[json.PrimaryContentType[0]];
    this.epubTechnicalProtection =
      EPublicationTechnicalProtection[json.EpubTechnicalProtection[0]];

    this.titleDetail = new TitleDetail(json.TitleDetail[0]);
    this.contributors = json.Contributor.map((c) => new Contributor(c));
    this.languages = json.Language.map((l) => new Language(l));
    this.subjects = json.Subject.map((s) => new Subject(s));
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
