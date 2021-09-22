import image11 from "../image/pword1_1.jpg";
import image21 from "../image/pword2_1.jpg";
import image31 from "../image/pword3_1.jpg";
import image41 from "../image/pword4_1.jpg";
import image51 from "../image/pword5_1.jpg";
import image61 from "../image/pword6_1.jpg";

interface IDiscoveryDataRowData {
  pageTitle: string;
  pageText: string;
  rowData: {
    type: "internal" | "external" | "pointer";
    to: string;
    src: string;
    topText: string;
    rowTitleAtoppadding: string;
    rowTitleApadding: string;
  }[];
}

const discoveryIconData: IDiscoveryDataRowData = {
  pageTitle: "discover_title_discover",
  pageText: "discover_text_discover",
  rowData: [
    {
      type: "internal",
      to: "/page/discover",
      src: image11,
      topText: "discover_content_toptext",
      rowTitleAtoppadding: "discover_row_title_discover",
      rowTitleApadding: "discover_row_subtitle_discover",
    },
    {
      type: "internal",
      to: "/page/basic",
      src: image31,
      topText: "discover_content_toptext",
      rowTitleAtoppadding: "discover_row_title_basic",
      rowTitleApadding: "discover_row_subtitle_basic",
    },
    {
      type: "internal",
      to: "/page/to-do",
      src: image21,
      topText: "discover_content_toptext",
      rowTitleAtoppadding: "discover_row_title_do",
      rowTitleApadding: "discover_row_subtitle_do",
    },
    {
      type: "internal",
      to: "/page/activity",
      src: image61,
      topText: "discover_content_toptext",
      rowTitleAtoppadding: "discover_row_title_activity",
      rowTitleApadding: "discover_row_subtitle_activity",
    },
    {
      type: "internal",
      to: "/page/how-to-visit",
      src: image41,
      topText: "discover_content_toptext",
      rowTitleAtoppadding: "discover_row_title_method",
      rowTitleApadding: "discover_row_subtitle_method",
    },
    {
      type: "internal",
      to: "/page/pubilc-transportation",
      src: image51,
      topText: "discover_content_toptext",
      rowTitleAtoppadding: "discover_row_title_traffic",
      rowTitleApadding: "discover_row_subtitle_traffic",
    },
  ],
};

export default discoveryIconData;
