import { LatLngExpression } from "leaflet";
export interface IOnlineMapMarkerData {
  onlineMapMarkerData: {
    title: string;
    position: LatLngExpression;
  }[];
}

const onlineMapMarkerData: IOnlineMapMarkerData = {
  onlineMapMarkerData: [
    {
      title: "online_map_spwan_point",
      position: [56.58247765465308, -58.00131225585938],
    },
  ],
};

export default onlineMapMarkerData;
