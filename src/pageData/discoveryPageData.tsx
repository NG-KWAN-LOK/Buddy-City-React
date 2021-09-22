import discoveryIconData from "./discoveryIconData";
import discoveryRowData from "./discoveryRowData";

const discoveryPageData = {
  discover: {
    banner: discoveryIconData.rowData[0].src,
    pageTitle: discoveryIconData.rowData[0].rowTitleAtoppadding,
    pageText: discoveryIconData.rowData[0].rowTitleApadding,
    rowIconData: [
      discoveryRowData["discover"],
      discoveryRowData["pubilc-transportation"],
    ],
  },
  basic: {
    banner: discoveryIconData.rowData[1].src,
    pageTitle: discoveryIconData.rowData[1].rowTitleAtoppadding,
    pageText: discoveryIconData.rowData[1].rowTitleApadding,
    rowIconData: [
      discoveryRowData["basic"],
      discoveryRowData["how-to-visit"],
      discoveryRowData["pubilc-transportation"],
    ],
  },
  "to-do": {
    banner: discoveryIconData.rowData[2].src,
    pageTitle: discoveryIconData.rowData[2].rowTitleAtoppadding,
    pageText: discoveryIconData.rowData[2].rowTitleApadding,
    rowIconData: [discoveryRowData["to-do"], discoveryRowData["activity"]],
  },
  activity: {
    banner: discoveryIconData.rowData[3].src,
    pageTitle: discoveryIconData.rowData[3].rowTitleAtoppadding,
    pageText: discoveryIconData.rowData[3].rowTitleApadding,
    rowIconData: [discoveryRowData["activity"]],
  },
  "how-to-visit": {
    banner: discoveryIconData.rowData[4].src,
    pageTitle: discoveryIconData.rowData[4].rowTitleAtoppadding,
    pageText: discoveryIconData.rowData[4].rowTitleApadding,
    rowIconData: [discoveryRowData["how-to-visit"]],
  },
  "pubilc-transportation": {
    banner: discoveryIconData.rowData[5].src,
    pageTitle: discoveryIconData.rowData[5].rowTitleAtoppadding,
    pageText: discoveryIconData.rowData[5].rowTitleApadding,
    rowIconData: [discoveryRowData["pubilc-transportation"]],
  },
};

export default discoveryPageData;
