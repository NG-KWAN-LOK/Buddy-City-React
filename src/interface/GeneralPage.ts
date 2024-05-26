import { IMajorEvents } from "../pageData/majorEvents";

export interface GeneralPageData {
  pageTitle: string;
  pageSubtitle: string;
  contentName: string;
  contentData: {
    contentType:
      | "title"
      | "text"
      | "image"
      | "table"
      | "musicPlayer"
      | "chronicle";
    contentText?: string;
    tableTR?: {
      tableTD: {
        tableTDText: string;
      }[];
    }[];
    src?: string;
    style?: object;
    center?: boolean;
    chronicleData?: IMajorEvents;
  }[];
}

export interface GeneralCategoryData {
  [index: string]: GeneralPageData;
}
