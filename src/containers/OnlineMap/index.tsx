import React, {
  useState,
  useCallback,
  useEffect,
  useLayoutEffect,
} from "react";
import styles from "./style.module.scss";
import { useParams, useHistory, useLocation } from "react-router-dom";
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
import historyIcon from "../../image/history.svg";
import copyIcon from "../../image/copy.svg";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;
interface IOnlineMapParams {
  year: string;
}

interface OnlineMapProps {}

const OnlineMap: React.FC<OnlineMapProps> = ({}) => {
  const { year } = useParams<IOnlineMapParams>();
  const history = useHistory();
  const search = useLocation().search;
  const searchParams = new URLSearchParams(search);
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  const { t } = useTranslation();
  const [displayPosition, setdisplayPosition] = useState<LatLngExpression>([
    lat ? Number(lat) : 56.08247765465308,
    lng ? Number(lng) : -125.20586013793947,
  ]);
  const initZoom = 4;
  const [map, setMap] = useState<L.Map | null>(null);
  const [sourceZoom, setSourceZoom] = useState<number>(1);
  const [zoom, setZoom] = useState<number>(initZoom);
  const [mousePoint, setMousePoint] = useState<L.LatLng | null>(null);
  const [mapYear, setMapYear] = useState<string>("2023");
  const [reloadMap, setReloadMap] = useState(false);
  const [position, setPosition] = useState(map?.getCenter());
  const [isCopyPosition, setIsCopyPosition] = useState(false);

  useLayoutEffect(() => {
    if (year) {
      setMapYear(year);
    }
    if (lat && lng) {
      setdisplayPosition([Number(lat), Number(lng)]);
    }
  }, []);

  useEffect(() => {
    if (reloadMap) {
      if (lat && lng) {
        history.push(`/online-map/${mapYear}?lat=${lat}&lng=${lng}`);
        setdisplayPosition([Number(lat), Number(lng)]);
      }
      setReloadMap(false);
    }
  }, [reloadMap]);

  const DisplayPosition = ({ map }) => {
    const onMove = useCallback(() => {
      if (isCopyPosition) {
        setIsCopyPosition(false);
      }
      setZoom(map.getZoom());
      setPosition(map.getCenter());
      history.push(
        `/online-map/${mapYear}?lat=${position?.lat}&lng=${position?.lng}`
      );
    }, [map]);
    useEffect(() => {
      map.on("move", onMove);
      return () => {
        map.off("move", onMove);
      };
    }, [map, onMove]);
    // console.log("zoom: " + zoom + " " + sourceZoom, map.getBounds(), position);
    return null;
  };

  const handleClickCopy = () => {
    navigator.clipboard.writeText(
      `${window.location.origin}/online-map/${mapYear}?lat=${
        position?.lat || displayPosition[0]
      }&lng=${position?.lng || displayPosition[1]}`
    );
    setIsCopyPosition(true);
  };

  const handleClickYearButton = (year: string) => {
    if (year === mapYear) return;
    setMapYear(year);
    setReloadMap(true);
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
      {map ? <DisplayPosition map={map} /> : null}
      <div className={styles.onlineMap_nav}>
        <div className={styles.Top__nav} id="nav">
          <ul className={styles.Top__nav__list}>
            <li className={styles.Top__nav_col__right}>
              <div className={styles.Top__nav__right_title}>
                <img
                  src={historyIcon}
                  className={styles.Top__nav__right_title_icon}
                />
                <span className={styles.Top__nav__right_title_content}>
                  {mapYear}
                </span>
              </div>
              <div className={styles.Top__nav__right_title_under}>
                <div className={styles.Top__nav__right_subtitle}>
                  <div
                    className={styles.Top__nav__right_subtitle__text}
                    onClick={() => handleClickYearButton("2023")}
                  >
                    2023
                  </div>
                </div>
                <div className={styles.Top__nav__right_subtitle}>
                  <div
                    className={styles.Top__nav__right_subtitle__text}
                    onClick={() => handleClickYearButton("2021")}
                  >
                    2021
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div
          className={`${styles["onlineMap_copy"]} ${
            isCopyPosition && styles["onlineMap_copy-active"]
          }`}
          onClick={handleClickCopy}
        >
          <img src={copyIcon} className={styles.onlineMap_copy_icon} />
        </div>
      </div>

      {!reloadMap && (
        <MapContainer
          center={displayPosition}
          zoom={zoom}
          whenCreated={setMap}
          scrollWheelZoom={false}
          minZoom={5}
          maxZoom={5}
          className={styles.onlineMap_main}
        >
          <TileLayer
            attribution={`${t(
              "online_map_footer_image_rendering"
            )}${mapYear} <a href="${
              process.env.REACT_APP_DYNMAP_URL
            }" target="blank_">Dynmap</a>, ${t(
              "online_map_footer_imagery_other"
            )}${mapYear}${t("online_map_footer_imagery_satellite")}${t(
              "online_map_footer_imagery_map_data"
            )}${mapYear}${t("online_map_footer_imagery_map_data_buddy")}`}
            url={
              process.env.REACT_APP_ONLINE_LOCAL_MAP_SOURCE === "true"
                ? `http://localhost:3000/map-tiles/${mapYear}/${sourceZoom}/{x}_-{y}.png`
                : `https://firebasestorage.googleapis.com/v0/b/${process.env.REACT_APP_STORAGE_BUCKET}/o/map-tiles%2F${mapYear}%2F${sourceZoom}%2F{x}_-{y}.png?alt=media`
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
      )}
    </>
  );
};

export default OnlineMap;
