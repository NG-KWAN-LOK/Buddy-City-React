import { GeneralCategoryData } from "../interface/GeneralPage";
import AIRPORT from "../image/photo/generalpage/how-to-visit/airport.jpg";
import DOCK from "../image/photo/generalpage/how-to-visit/dock.jpg";
import LAND from "../image/photo/generalpage/how-to-visit/land.jpg";

export const howToVisitPageData: GeneralCategoryData = {
  airport: {
    pageTitle: "discover_content_atoppadding_airport",
    pageSubtitle: "",
    contentName: "airport",
    contentData: [
      {
        contentType: "title",
        contentText: "how_to_visit_airport",
      },
      {
        contentType: "image",
        src: AIRPORT,
        style: {
          "max-width": 600,
          "max-height": 300,
        },
      },
      {
        contentType: "text",
        contentText: "how_to_visit_airport_content",
      },
    ],
  },
  dock: {
    pageTitle: "discover_content_atoppadding_dock",
    pageSubtitle: "",
    contentName: "dock",
    contentData: [
      {
        contentType: "title",
        contentText: "how_to_visit_dock",
      },
      {
        contentType: "image",
        src: DOCK,
        style: {
          "max-width": 600,
          "max-height": 300,
        },
      },
      {
        contentType: "text",
        contentText: "how_to_visit_dock_content",
      },
    ],
  },
  land: {
    pageTitle: "discover_content_atoppadding_land",
    pageSubtitle: "",
    contentName: "land",
    contentData: [
      {
        contentType: "title",
        contentText: "how_to_visit_land",
      },
      {
        contentType: "image",
        src: LAND,
        style: {
          "max-width": 600,
          "max-height": 300,
        },
      },
      {
        contentType: "text",
        contentText: "how_to_visit_land_content",
      },
    ],
  },
  portal: {
    pageTitle: "discover_content_atoppadding_portal",
    pageSubtitle: "",
    contentName: "portal",
    contentData: [
      {
        contentType: "title",
        contentText: "how_to_visit_spawn_point",
      },
      {
        contentType: "text",
        contentText: "how_to_visit_spawn_point_content",
      },
      {
        contentType: "title",
        contentText: "how_to_visit_nether_portal",
      },
      {
        contentType: "text",
        contentText: "how_to_visit_nether_portal_content",
      },
      {
        contentType: "title",
        contentText: "how_to_visit_end_portal",
      },
      {
        contentType: "text",
        contentText: "how_to_visit_end_portal_content",
      },
    ],
  },
};
