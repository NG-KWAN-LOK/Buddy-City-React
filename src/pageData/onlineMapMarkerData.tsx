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
      position: [56.08247765465308, -125.20586013793947],
    },
  ],
};

export default onlineMapMarkerData;
