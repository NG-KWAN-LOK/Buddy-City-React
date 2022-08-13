import aetLogo from "../image/subway/aet.jpg";
import aetRouteLogo from "../image/subway/air.jpg";
import bctLogo from "../image/subway/bct.png";
import bctRouteLogo from "../image/subway/tram.jpg";
import ertLogo from "../image/subway/ert.jpg";
import ertLine1Logo from "../image/subway/high1.jpg";
import ertLine2Logo from "../image/subway/high2.jpg";
import mstLogo from "../image/subway/mst.png";
import mstCentralLineLogo from "../image/subway/central_line.jpg";
import mstHangenLineLogo from "../image/subway/hangen_line.jpg";
import mstKoyoMizuShaTinLogo from "../image/subway/koyo_mizu_sha_Tin_Line.jpg";
import mstMidoSujiLogo from "../image/subway/mido_suji_line.jpg";

interface ISubwayPageData {
  [index: string]: {
    title: string;
    logo: string;
    aboutTitle: string;
    aboutText: string;
    routeAboutTitle: string;
    routeAboutSubtitle: string;
    routeData: {
      routeLogo: string;
      routeTitle: string;
      routeText: string;
    }[];
  };
}

const subwayPageData: ISubwayPageData = {
  "airport-express": {
    title: "aet_title",
    logo: aetLogo,
    aboutTitle: "aet_about_title",
    aboutText: "aet_about_text",
    routeAboutTitle: "aet_route_about_title",
    routeAboutSubtitle: "aet_route_about_subtitle",
    routeData: [
      {
        routeLogo: aetRouteLogo,
        routeTitle: "aet_route_local_service_title",
        routeText: "aet_route_local_service_text",
      },
      {
        routeLogo: aetRouteLogo,
        routeTitle: "aet_route_express_service_title",
        routeText: "aet_route_express_service_text",
      },
    ],
  },
  tramways: {
    title: "bct_title",
    logo: bctLogo,
    aboutTitle: "bct_about_title",
    aboutText: "bct_about_text",
    routeAboutTitle: "bct_route_about_title",
    routeAboutSubtitle: "bct_route_about_subtitle",
    routeData: [
      {
        routeLogo: bctRouteLogo,
        routeTitle: "bct_route_tramways_title",
        routeText: "bct_route_tramways_text",
      },
    ],
  },
  "elevated-railway": {
    title: "ert_title",
    logo: ertLogo,
    aboutTitle: "ert_about_title",
    aboutText: "ert_about_text",
    routeAboutTitle: "ert_route_about_title",
    routeAboutSubtitle: "ert_route_about_subtitle",
    routeData: [
      {
        routeLogo: ertLine1Logo,
        routeTitle: "ert_route_line1_title",
        routeText: "ert_route_line1_text",
      },
      {
        routeLogo: ertLine2Logo,
        routeTitle: "ert_route_line2_title",
        routeText: "ert_route_line2_text",
      },
    ],
  },
  "municipal-subway": {
    title: "mst_title",
    logo: mstLogo,
    aboutTitle: "mst_about_title",
    aboutText: "mst_about_text",
    routeAboutTitle: "mst_route_about_title",
    routeAboutSubtitle: "mst_route_about_subtitle",
    routeData: [
      {
        routeLogo: mstCentralLineLogo,
        routeTitle: "mst_route_central_line_title",
        routeText: "mst_route_central_line_text",
      },
      {
        routeLogo: mstHangenLineLogo,
        routeTitle: "mst_route_hangen_ryokuchi_line_title",
        routeText: "mst_route_hangen_ryokuchi_line_text",
      },
      {
        routeLogo: mstKoyoMizuShaTinLogo,
        routeTitle: "mst_route_futa_keihan_Line_title",
        routeText: "mst_route_futa_keihan_Line_text",
      },
      {
        routeLogo: mstMidoSujiLogo,
        routeTitle: "mst_route_mido_suji_Line_title",
        routeText: "mst_route_mido_suji_Line_text",
      },
    ],
  },
};

export default subwayPageData;
