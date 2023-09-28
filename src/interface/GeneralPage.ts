export interface GeneralPageData {
  pageTitle: string;
  pageSubtitle: string;
  contentName: string;
  contentData: {
    contentType: "title" | "text" | "image" | "table" | "musicPlayer";
    contentText?: string;
    tableTR?: {
      tableTD: {
        tableTDText: string;
      }[];
    }[];
    src?: string;
    style?: object;
    center?: boolean;
  }[];
}

export interface GeneralCategoryData {
  [index: string]: GeneralPageData;
}
