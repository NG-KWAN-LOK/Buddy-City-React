export interface GeneralPageData {
  pageTitle: string;
  pageSubtitle: string;
  contentName: string;
  contentData: {
    contentType: "title" | "text" | "table" | "musicPlayer";
    contentText?: string;
    tableTR?: {
      tableTD: {
        tableTDText: string;
      }[];
    }[];
  }[];
}

export interface GeneralCategoryData {
  [index: string]: {
    pageTitle: string;
    pageSubtitle: string;
    contentName: string;
    contentData: {
      contentType: "title" | "text" | "table" | "musicPlayer";
      contentText?: string;
      tableTR?: {
        tableTD: {
          tableTDText: string;
        }[];
      }[];
    }[];
  };
}
