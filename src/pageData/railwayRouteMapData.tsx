import image from "../image/merto-map/21.png";

import routeMap from "../image/merto-map/21Metro路面電車第九期市營地下鐵雙京坂線第三期御堂筋線第一期20220807.pdf";

export interface IRailwayRouteMapData {
  image: string;
  routeMap: string;
  title: string;
}

const railwayRouteMapData: IRailwayRouteMapData = {
  image: image,
  routeMap: routeMap,
  title: "railway_history_map17_name",
};

export default railwayRouteMapData;
