import image14 from "../image/merto-map/18.jpg";

import routeMap from "../image/merto-map/18Metro路面電車第六期20211031.pdf";

export interface IRailwayRouteMapData {
  image: string;
  routeMap: string;
  title: string;
}

const railwayRouteMapData: IRailwayRouteMapData = {
  image: image14,
  routeMap: routeMap,
  title: "railway_history_map14_name",
};

export default railwayRouteMapData;
