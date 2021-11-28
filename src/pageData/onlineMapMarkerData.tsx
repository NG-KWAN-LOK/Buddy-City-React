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
      position: [56.45884262171671, -70],
    },
  ],
};

export default onlineMapMarkerData;
