import image11 from "../image/pword1_1.jpg";
import image12 from "../image/pword1_2.jpg";
import image14 from "../image/pword1_4.jpg";
import image21 from "../image/pword2_1.jpg";
import image22 from "../image/pword2_6.jpg";
import image23 from "../image/pword2_5.jpg";
import image24 from "../image/pword2_4.jpg";
import image31 from "../image/pword3_1.jpg";
import image32 from "../image/pword3_2.jpg";
import image33 from "../image/pword3_3.jpg";
import image34 from "../image/pword3_4.jpg";
import image41 from "../image/pword4_1.jpg";
import image42 from "../image/pword4_2.jpg";
import image43 from "../image/pword4_3.jpg";
import image44 from "../image/pword4_4.jpg";
import image51 from "../image/pword5_1.jpg";
import image52 from "../image/pword5_2.jpg";
import image53 from "../image/pword5_3.jpg";
import image54 from "../image/pword5_4.jpg";
import image61 from "../image/pword6_5.jpg";
import image62 from "../image/pword6_2.jpg";
import image63 from "../image/pword6_3.jpg";
import image64 from "../image/pword6_4.jpg";
import image71 from "../image/pword7_1.jpg";
import image72 from "../image/pword7_2.jpg";

interface IDiscoveryRowData {
  [index: string]: {
    rowTitle: string;
    rowIconData: IRowIconData[];
  };
}

export interface IRowIconData {
  type: "internal" | "external" | "pointer";
  to: string;
  src: string;
  atoppadding: string;
  apadding: string;
}

const discoveryRowData: IDiscoveryRowData = {
  discover: {
    rowTitle: "discover_subtitle_discover",
    rowIconData: [
      {
        type: "external",
        to: "/online-map",
        src: image14,
        atoppadding: "discover_content_atoppadding_webMap",
        apadding: "discover_content_apadding_webMap",
      },
      {
        type: "external",
        to: `${process.env.REACT_APP_DYNMAP_URL}`,
        src: image11,
        atoppadding: "discover_content_atoppadding_gps",
        apadding: "discover_content_apadding_gps",
      },
      {
        type: "internal",
        to: "/building_list",
        src: image12,
        atoppadding: "discover_content_atoppadding_buildingList",
        apadding: "discover_content_apadding_buildingList",
      },
      {
        type: "internal",
        to: "/railway-route-map",
        src: image71,
        atoppadding: "discover_content_atoppadding_routeMap",
        apadding: "discover_content_apadding_routeMap",
      },
    ],
  },
  helpToPlan: {
    rowTitle: "discover_subtitle_help_to_plan",
    rowIconData: [
      {
        type: "external",
        to: "/online-map",
        src: image14,
        atoppadding: "discover_content_atoppadding_webMap",
        apadding: "discover_content_apadding_webMap",
      },
      {
        type: "external",
        to: `${process.env.REACT_APP_DYNMAP_URL}`,
        src: image11,
        atoppadding: "discover_content_atoppadding_gps",
        apadding: "discover_content_apadding_gps",
      },
      {
        type: "internal",
        to: "/building_list",
        src: image12,
        atoppadding: "discover_content_atoppadding_buildingList",
        apadding: "discover_content_apadding_buildingList",
      },
      {
        type: "internal",
        to: "/railway-route-map",
        src: image71,
        atoppadding: "discover_content_atoppadding_routeMap",
        apadding: "discover_content_apadding_routeMap",
      },
    ],
  },
  basic: {
    rowTitle: "discover_subtitle_basic",
    rowIconData: [
      {
        type: "pointer",
        to: "",
        src: image31,
        atoppadding: "discover_content_atoppadding_place",
        apadding: "discover_content_apadding_place",
      },
      {
        type: "internal",
        to: "/page/basic/background",
        src: image32,
        atoppadding: "discover_content_atoppadding_background",
        apadding: "discover_content_apadding_background",
      },
      {
        type: "internal",
        to: "/page/basic/calendar-system-and-city-song",
        src: image33,
        atoppadding: "discover_content_atoppadding_calendar_system_city_song",
        apadding: "discover_content_apadding_calendar_system_city_song",
      },
      {
        type: "internal",
        to: "/page/basic/legal-holiday",
        src: image34,
        atoppadding: "discover_content_atoppadding_legal_holiday",
        apadding: "discover_content_apadding_legal_holiday",
      },
    ],
  },
  "to-do": {
    rowTitle: "discover_subtitle_do",
    rowIconData: [
      {
        type: "internal",
        to: "/resident",
        src: image21,
        atoppadding: "discover_content_atoppadding_dream",
        apadding: "discover_content_apadding_dream",
      },
      {
        type: "internal",
        to: "/page/to-do/enjoy",
        src: image22,
        atoppadding: "discover_content_atoppadding_enjoy",
        apadding: "discover_content_apadding_enjoy",
      },
      {
        type: "internal",
        to: "/page/to-do/play-country",
        src: image23,
        atoppadding: "discover_content_atoppadding_playCountry",
        apadding: "discover_content_apadding_playCountry",
      },
      {
        type: "external",
        to: `${process.env.REACT_APP_DYNMAP_URL}`,
        src: image24,
        atoppadding: "discover_content_atoppadding_creatWorld",
        apadding: "discover_content_apadding_creatWorld",
      },
    ],
  },
  activity: {
    rowTitle: "discover_subtitle_activity",
    rowIconData: [
      {
        type: "internal",
        to: "/page/activity/sport",
        src: image61,
        atoppadding: "discover_content_atoppadding_sport",
        apadding: "discover_content_apadding_sport",
      },
      {
        type: "internal",
        to: "/page/activity/flower",
        src: image62,
        atoppadding: "discover_content_atoppadding_flower",
        apadding: "discover_content_apadding_flower",
      },
      {
        type: "internal",
        to: "/page/activity/music",
        src: image63,
        atoppadding: "discover_content_atoppadding_music",
        apadding: "discover_content_apadding_music",
      },
      {
        type: "internal",
        to: "/page/activity/monument",
        src: image64,
        atoppadding: "discover_content_atoppadding_monument",
        apadding: "discover_content_apadding_monument",
      },
    ],
  },
  "how-to-visit": {
    rowTitle: "discover_subtitle_method",
    rowIconData: [
      {
        type: "pointer",
        to: "",
        src: image41,
        atoppadding: "discover_content_atoppadding_airport",
        apadding: "",
      },
      {
        type: "pointer",
        to: "",
        src: image42,
        atoppadding: "discover_content_atoppadding_dock",
        apadding: "",
      },
      {
        type: "pointer",
        to: "",
        src: image43,
        atoppadding: "discover_content_atoppadding_land",
        apadding: "",
      },
      {
        type: "pointer",
        to: "",
        src: image44,
        atoppadding: "discover_content_atoppadding_portal",
        apadding: "",
      },
    ],
  },
  "pubilc-transportation": {
    rowTitle: "discover_subtitle_traffic",
    rowIconData: [
      {
        type: "internal",
        to: "/page/subway-info/elevated-railway",
        src: image51,
        atoppadding: "discover_content_atoppadding_highway",
        apadding: "discover_content_apadding_highway",
      },
      {
        type: "internal",
        to: "/page/subway-info/airport-express",
        src: image52,
        atoppadding: "discover_content_atoppadding_airportWay",
        apadding: "discover_content_apadding_airportWay",
      },
      {
        type: "internal",
        to: "/page/subway-info/tramways",
        src: image53,
        atoppadding: "discover_content_atoppadding_mrt",
        apadding: "discover_content_apadding_mrt",
      },
      {
        type: "internal",
        to: "/page/subway-info/municipal-subway",
        src: image54,
        atoppadding: "discover_content_atoppadding_downMrt",
        apadding: "discover_content_apadding_downMrt",
      },
    ],
  },
  history: {
    rowTitle: "discover_row_title_history",
    rowIconData: [
      {
        type: "pointer",
        to: "",
        src: image72,
        atoppadding: "discover_content_atoppadding_history",
        apadding: "discover_content_apadding_history",
      },
      {
        type: "internal",
        to: "/history/railway-history",
        src: image71,
        atoppadding: "discover_content_atoppadding_railway_history",
        apadding: "discover_content_apadding_railway_history",
      },
    ],
  },
  "railway-history": {
    rowTitle: "discover_row_title_railway_history",
    rowIconData: [
      {
        type: "internal",
        to: "/history/railway-history",
        src: image71,
        atoppadding: "discover_content_atoppadding_railway_history",
        apadding: "discover_content_apadding_railway_history",
      },
    ],
  },
};

export default discoveryRowData;
