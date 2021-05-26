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
import { Extent } from "./Extent";
import { Collection } from "./Collection";

import { parseType } from "../utils/parse";

export class DescriptiveDetail {
  constructor(json: any) {
    this.productComposition = parseType(
      json,
      "ProductComposition",
      ProductComposition
    );
    this.productForm = parseType(json, "ProductForm", ProductForm);
    this.productFormDetail = parseType(
      json,
      "ProductFormDetail",
      ProductFormDetail
    );
    this.primaryContentType = parseType(
      json,
      "PrimaryContentType",
      ProductContentType
    );
    this.epubTechnicalProtection = parseType(
      json,
      "EpubTechnicalProtection",
      EPublicationTechnicalProtection
    );

    this.titleDetail = new TitleDetail(json.TitleDetail[0]);
    this.collections = json.Collection?.map((c) => new Collection(c)) || [];
    this.contributors = json.Contributor?.map((c) => new Contributor(c)) || [];
    this.languages = json.Language?.map((l) => new Language(l)) || [];
    this.subjects = json.Subject?.map((s) => new Subject(s)) || [];
    this.extents = json.Extent?.map((e) => new Extent(e)) || [];
  }

  productComposition: ProductCompositionEnum;
  productForm: ProductFormEnum;
  productFormDetail: ProductFormDetailEnum;
  primaryContentType: ProductContentTypeEnum;
  epubTechnicalProtection: EPublicationTechnicalProtectionEnum;
  titleDetail: TitleDetail;
  collections: Collection[];
  contributors: Contributor[];
  languages: Language[];
  subjects: Subject[];
  extents: Extent[];
}
