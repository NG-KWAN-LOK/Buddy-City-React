import React, { useState } from "react";
import styles from "./style.module.scss";
import { Button } from "@mui/material";

import { useTranslation } from "react-i18next";

import railwayRouteMapData from "../../../../pageData/railwayRouteMapData";
import StationAutocompete from "./StationAutocompete";
import { railwayLines, walkLine } from "../../../../pageData/railwayRouteData";
import { RecommendRoute } from "../../../../interface/RecommendRoute";
import ShowRecommendRoute from "./ShowRecommendRoute";
import { findRoute } from "../../../../utils/findShortestRailwayRoute";

interface RailwayRouteMapContainerProps {}

const RailwayRouteMapContainer: React.FC<
  RailwayRouteMapContainerProps
> = () => {
  const { t } = useTranslation();

  const [startStation, setStartStation] = useState<string>("");
  const [endStation, setEndStation] = useState<string>("");
  const [recommendRoute, setRecommendRoute] = useState<RecommendRoute[]>([]);

  const handleSearchButtonClick = () => {
    const subwayLines = { ...railwayLines, ...walkLine };
    setRecommendRoute(findRoute(subwayLines, startStation, endStation));

    // // check all the stations and find the longest route
    // const subwayLinesKeys = Object.keys(railwayLines);
    // const allStations: string[] = [];
    // subwayLinesKeys.forEach((key) => {
    //   allStations.push(...railwayLines[key]);
    // });
    // let longestRouteLength = 0;
    // let longestRoute: RecommendRoute[] = [];
    // for (let i = 0; i < allStations.length; i++) {
    //   for (let j = 0; j < allStations.length; j++) {
    //     if (i === j) continue;
    //     const route = findRoute(subwayLines, allStations[i], allStations[j]);
    //     if (route.length > longestRouteLength) {
    //       longestRouteLength = route.length;
    //       longestRoute = route;
    //     }
    //   }
    // }
    // console.log("longestRoute", longestRoute);
  };

  return (
    <>
      <div className={styles.railwayHistroy__title__content}>
        <div
          className={styles.railwayHistroy__title}
          id='railway_route_map_title'
        >
          {t("railway_route_map_title")}
        </div>
        <div
          className={styles.railwayHistroy__subTitle}
          id='railway_route_map_subtitle'
        >
          {t("railway_route_map_subtitle")}
        </div>
        <div className={styles.railwayHistory__route_search}>
          <div className={styles.railwayHistory__route_search_title}>
            {t("railway_route_map_rotate_plan")}
          </div>
          <div className={styles.railwayHistory__route_search_autocomplete}>
            <div
              className={styles.railwayHistory__route_search_autocomplete_item}
            >
              <div
                className={
                  styles.railwayHistory__route_search_autocomplete_item_text
                }
              >
                {t("railway_route_map_start_station")}
              </div>
              <StationAutocompete
                handleValueChange={setStartStation}
                disabledValue={endStation}
                currentValue={startStation}
              />
            </div>
            <div
              className={styles.railwayHistory__route_search_autocomplete_item}
            >
              <div
                className={
                  styles.railwayHistory__route_search_autocomplete_item_text
                }
              >
                {t("railway_route_map_end_station")}
              </div>
              <StationAutocompete
                handleValueChange={setEndStation}
                disabledValue={startStation}
                currentValue={endStation}
              />
            </div>
          </div>
          <div className={styles.railwayHistory__route_search_button}>
            <Button
              variant='contained'
              size='large'
              color='primary'
              disabled={startStation.length === 0 || endStation.length === 0}
              onClick={handleSearchButtonClick}
              sx={{
                fontSize: "15px",
              }}
            >
              {t("railway_route_map_search")}
            </Button>
          </div>
          <ShowRecommendRoute recommendRoute={recommendRoute} />
        </div>
        <div className={styles.railwayHistroy__title__map_name}>
          {t(railwayRouteMapData.title)}
        </div>
        <a
          href={railwayRouteMapData.routeMap}
          target='_blank'
          className={styles.railwayHistroy__title__map}
        >
          <div className={styles.railwayHistroy__title__map__banner}>
            <div
              className={styles.railwayHistroy__title__map__banner_container}
            >
              <img
                className={
                  styles.railwayHistroy__title__map__banner_container_img
                }
                src={railwayRouteMapData.image}
              />
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export default RailwayRouteMapContainer;
