import React, { useState } from "react";
import styles from "./style.module.scss";
import {
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  styled,
  svgIconClasses,
  typographyClasses,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { useTranslation } from "react-i18next";

import railwayRouteMapData from "../../../../pageData/railwayRouteMapData";
import StationAutocompete from "./StationAutocompete";
import {
  SearchOption,
  getSubwayLine,
  railwayLines,
} from "../../../../pageData/railwayRouteData";
import { RecommendRoute } from "../../../../interface/RecommendRoute";
import ShowRecommendRoute from "./ShowRecommendRoute";
import { findRoute } from "../../../../utils/findShortestRailwayRoute";

const StyledFormControlLabel = styled(FormControlLabel)({
  [`& .${typographyClasses.root}`]: {
    fontSize: "18px",
    color: "var(--title-color)",
    fontFamily: "Noto Sans TC, Noto Sans JP, 微軟正黑體, sans-serif",
    fontWeight: 300,
  },
});

const StyledRadio = styled(Radio)({
  [`& .${svgIconClasses.root}`]: {
    width: 24,
    height: 24,
  },
});

interface RailwayRouteMapContainerProps {}

const RailwayRouteMapContainer: React.FC<
  RailwayRouteMapContainerProps
> = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [startStation, setStartStation] = useState<string>("");
  const [endStation, setEndStation] = useState<string>("");
  const [recommendRoute, setRecommendRoute] = useState<RecommendRoute[]>([]);
  const [searchFilterOption, setSearchFilterOption] = useState<SearchOption>(
    SearchOption.BEST_ROUTE
  );

  const handleSearchButtonClick = () => {
    setRecommendRoute(
      findRoute(getSubwayLine(searchFilterOption), startStation, endStation)
    );

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
    //     const route = findRoute(
    //       getSubwayLine(searchFilterOption),
    //       allStations[i],
    //       allStations[j]
    //     );
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
          <div className={styles.railwayHistory__route_search_function}>
            <div>
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
            <div>
              <FormControl component='fieldset'>
                <RadioGroup
                  row={!isMobile}
                  aria-labelledby='demo-form-control-label-placement'
                  defaultValue={searchFilterOption}
                  value={searchFilterOption}
                  onChange={(event) => {
                    setSearchFilterOption(event.target.value as SearchOption);
                  }}
                >
                  <StyledFormControlLabel
                    value={SearchOption.BEST_ROUTE}
                    control={<StyledRadio />}
                    label={t(SearchOption.BEST_ROUTE)}
                    labelPlacement={isMobile ? "start" : "top"}
                  ></StyledFormControlLabel>
                  <StyledFormControlLabel
                    value={SearchOption.DISCOUNT_INTERCHANGE}
                    control={<StyledRadio />}
                    label={t(SearchOption.DISCOUNT_INTERCHANGE)}
                    labelPlacement={isMobile ? "start" : "top"}
                  ></StyledFormControlLabel>
                  <StyledFormControlLabel
                    value={SearchOption.LESS_WALK}
                    control={<StyledRadio />}
                    label={t(SearchOption.LESS_WALK)}
                    labelPlacement={isMobile ? "start" : "top"}
                  ></StyledFormControlLabel>
                </RadioGroup>
              </FormControl>
            </div>
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
