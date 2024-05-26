import { GeneralCategoryData } from "../interface/GeneralPage";
import majorEvents from "./majorEvents";

export const historyPageDataData: GeneralCategoryData = {
  chronicle: {
    pageTitle: "discover_content_atoppadding_chronicle",
    pageSubtitle: "discover_content_apadding_chronicle",
    contentName: "chronicle",
    contentData: [
      {
        contentType: "chronicle",
        chronicleData: majorEvents,
      },
    ],
  },
};
