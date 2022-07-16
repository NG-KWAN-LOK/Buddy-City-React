import image15 from "../image/merto-map/19.jpg";

import routeMap from "../image/merto-map/19Metro路面電車第七期市營地下鐵清源線雙京阪線20220703.pdf";

export interface IRailwayRouteMapData {
  image: string;
  routeMap: string;
  title: string;
}

const railwayRouteMapData: IRailwayRouteMapData = {
  image: image15,
  routeMap: routeMap,
  title: "railway_history_map15_name",
};

export default railwayRouteMapData;
