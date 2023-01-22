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
  const paramLat = searchParams.get("lat");
  const paramLng = searchParams.get("lng");
  const { t } = useTranslation();
  const [displayPosition, setdisplayPosition] = useState<LatLngExpression>([
    paramLat
      ? Number(paramLat)
      : onlineMapMarkerData.onlineMapMarkerData[0].position[0],
    paramLng
      ? Number(paramLng)
      : onlineMapMarkerData.onlineMapMarkerData[0].position[1],
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

    if (paramLat && paramLng) {
      setdisplayPosition([Number(paramLat), Number(paramLng)]);
    }
  }, []);

  useEffect(() => {
    if (reloadMap) {
      if (position) {
        history.push(
          `/online-map/${mapYear}?lat=${position.lat}&lng=${position.lng}`
        );
        setdisplayPosition([Number(position.lat), Number(position.lng)]);
      }

      setReloadMap(false);
    }
  }, [reloadMap]);

  const DisplayPosition = ({ map }) => {
    const onMove = useCallback(() => {
      if (isCopyPosition) {
        setIsCopyPosition(false);
      }
    }, [map]);
    const onMoveendUpdatePosition = useCallback(() => {
      // setZoom(map.getZoom());
      setPosition(map.getCenter());
      const lat = position?.lat || displayPosition[0];
      const lng = position?.lng || displayPosition[1];
      history.push(`/online-map/${mapYear}?lat=${lat}&lng=${lng}`);
    }, [map]);

    useEffect(() => {
      map.on("move", onMove);
      map.on("moveend", onMoveendUpdatePosition);
      return () => {
        map.off("move", onMove);
        map.off("moveend", onMoveendUpdatePosition);
      };
    }, [map, onMove, onMoveendUpdatePosition]);

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
      {map && <DisplayPosition map={map} />}
      <div className={styles.onlineMap_nav}>
        <div className={styles.Top__nav} id="nav">
          <ul className={styles.Top__nav__list}>
            <li className={styles.Top__nav_col__right}>
              <div className={styles.Top__nav__right_title}>
                <svg
                  className={styles.Top__nav__right_title_icon}
                  height="21px"
                  version="1.1"
                  viewBox="0 0 20 21"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    fill="none"
                    fillRule="evenodd"
                    id="Page-1"
                    stroke="none"
                    strokeWidth="1"
                  >
                    <g
                      className={styles.Top__nav__right_title_icon}
                      id="Core"
                      opacity="0.9"
                      transform="translate(-464.000000, -254.000000)"
                    >
                      <g
                        id="history"
                        transform="translate(464.000000, 254.500000)"
                      >
                        <path
                          d="M10.5,0 C7,0 3.9,1.9 2.3,4.8 L0,2.5 L0,9 L6.5,9 L3.7,6.2 C5,3.7 7.5,2 10.5,2 C14.6,2 18,5.4 18,9.5 C18,13.6 14.6,17 10.5,17 C7.2,17 4.5,14.9 3.4,12 L1.3,12 C2.4,16 6.1,19 10.5,19 C15.8,19 20,14.7 20,9.5 C20,4.3 15.7,0 10.5,0 L10.5,0 Z M9,5 L9,10.1 L13.7,12.9 L14.5,11.6 L10.5,9.2 L10.5,5 L9,5 L9,5 Z"
                          id="Shape"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
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
          <svg
            className={styles.onlineMap_copy_icon}
            xmlns="http://www.w3.org/2000/svg"
            shapeRendering="geometricPrecision"
            textRendering="geometricPrecision"
            imageRendering="optimizeQuality"
            fillRule="evenodd"
            clipRule="evenodd"
            viewBox="0 0 469 511.53"
          >
            <path
              fillRule="nonzero"
              d="M143.57 91.42h273.27c28.7 0 52.16 23.46 52.16 52.16v315.79c0 28.57-23.58 52.16-52.16 52.16H143.57c-28.69 0-52.15-23.47-52.15-52.16V143.58c0-28.72 23.44-52.16 52.15-52.16zm122.42 169.95c-9.85 13.65-30.59-1.26-20.8-14.94l18.33-25.47a59.675 59.675 0 0 1 17.1-15.96 60.646 60.646 0 0 1 22.02-8.22c16.4-2.67 32.32 1.53 44.79 10.49 12.47 8.98 21.51 22.72 24.19 39.12a60.594 60.594 0 0 1-.79 23.49 59.474 59.474 0 0 1-9.68 21.29l-18.32 25.47c-9.83 13.67-30.61-1.28-20.77-14.95l18.3-25.46c2.71-3.76 4.55-7.92 5.55-12.2 1.04-4.45 1.17-9.06.45-13.51-1.55-9.47-6.73-17.37-13.86-22.5-7.14-5.14-16.28-7.53-25.73-5.98-4.45.73-8.77 2.32-12.67 4.72a34.15 34.15 0 0 0-9.8 9.14l-18.31 25.47zm21.12 6.53c9.9-13.61 30.51 1.27 20.71 14.95l-34.04 51.43c-9.84 13.58-30.49-1.29-20.72-14.94l34.05-51.44zm6.99 74.15c9.85-13.67 30.61 1.28 20.78 14.95l-17.97 24.98c-4.74 6.58-10.59 11.94-17.11 15.96a60.398 60.398 0 0 1-22.02 8.22c-16.4 2.67-32.31-1.53-44.78-10.49-12.47-8.97-21.51-22.72-24.19-39.12a60.45 60.45 0 0 1 .78-23.46 59.833 59.833 0 0 1 9.69-21.27l18.01-25.09c9.87-13.59 30.54 1.35 20.75 14.99l-17.98 24.99a33.93 33.93 0 0 0-5.56 12.19 34.893 34.893 0 0 0-.43 13.5l.01.07c1.54 9.43 6.71 17.32 13.84 22.44 7.13 5.13 16.24 7.53 25.69 6l.07-.02c4.44-.73 8.76-2.32 12.63-4.71 3.74-2.3 7.1-5.37 9.81-9.14l17.98-24.99zm-257.52 8.77c0 10.1-8.19 18.29-18.29 18.29S0 360.92 0 350.82V52.16C0 23.44 23.44 0 52.16 0h273.26c10.1 0 18.29 8.19 18.29 18.29s-8.19 18.29-18.29 18.29H52.16c-8.54 0-15.58 7.04-15.58 15.58v298.66zM416.84 128H143.57c-8.53 0-15.57 7.04-15.57 15.58v315.79c0 8.52 7.06 15.58 15.57 15.58h273.27c8.59 0 15.58-6.99 15.58-15.58V143.58c0-8.52-7.06-15.58-15.58-15.58z"
            />
          </svg>
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
