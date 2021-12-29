import React, { useState, useCallback, useEffect } from "react";
import styles from "./style.module.scss";
import { useParams, useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import L, { LatLngExpression } from "leaflet";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

import onlineMapMarkerData from "../../pageData/onlineMapMarkerData";

import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

interface OnlineMapProps {}

const OnlineMap: React.FC<OnlineMapProps> = ({}) => {
  const { t } = useTranslation();
  const history = useHistory();
  const initPosition: LatLngExpression = [56.45884262171671, -70];
  const initZoom = 4;
  const [map, setMap] = useState<L.Map | null>(null);
  const [sourceZoom, setSourceZoom] = useState<number>(1);
  const [zoom, setZoom] = useState<number>(initZoom);
  const [mousePoint, setMousePoint] = useState<L.LatLng | null>(null);

  const DisplayPosition = ({ map }) => {
    const [position, setPosition] = useState(map.getCenter());
    const onMove = useCallback(() => {
      setSourceZoom(Math.abs(map.getZoom() - 5));
      setZoom(map.getZoom());
      setPosition(map.getCenter());
    }, [map]);
    useEffect(() => {
      map.on("move", onMove);
      return () => {
        map.off("move", onMove);
      };
    }, [map, onMove]);
    console.log("zoom: " + zoom + " " + sourceZoom, map.getBounds(), position);
    return null;
  };

  // useMapEvents({
  //   mousemove(event) {
  //     setMousePoint(event.latlng);
  //   },
  //   mouseout() {
  //     setMousePoint(null);
  //   },
  // });

  // console.log(mousePoint);

  return (
    <>
      {/* {map ? <DisplayPosition map={map} /> : null} */}
      <MapContainer
        center={initPosition}
        zoom={zoom}
        whenCreated={setMap}
        scrollWheelZoom={false}
        minZoom={4}
        maxZoom={4}
        className={styles.onlineMap_main}
      >
        <TileLayer
          attribution={`${t("online_map_footer_image_rendering")} <a href="${
            process.env.REACT_APP_DYNMAP_URL
          }" target="blank_">Dynmap</a>, ${t(
            "online_map_footer_imagery_other"
          )}`}
          url={
            process.env.REACT_APP_ONLINE_LOCAL_MAP_SOURCE === "true"
              ? `./map-tiles/${sourceZoom}/{x}_-{y}.png`
              : `https://firebasestorage.googleapis.com/v0/b/${process.env.REACT_APP_STORAGE_BUCKET}/o/map-tiles%2F${sourceZoom}%2F{x}_-{y}.png?alt=media`
          }
          // url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        {onlineMapMarkerData.onlineMapMarkerData.map((data, index) => {
          return (
            <Marker key={index} position={data.position}>
              <Popup>{t(data.title)}</Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </>
  );
};

export default OnlineMap;
