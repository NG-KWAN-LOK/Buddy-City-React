import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import { styled, List, ListItem, ListItemText } from "@mui/material";

import { useTranslation } from "react-i18next";
import {
  CONST_INTERCHANGE_LINE,
  CONST_INTERCHANGE_WALK,
  CONST_TRANSFER,
  RailwayLineBackGroundColors,
  RailwayLineImage,
  WALK_LINE,
} from "../../../../../pageData/railwayRouteData";
import { RecommendRoute } from "../../../../../interface/RecommendRoute";
import { getTextColor } from "../../../../../utils/getTextColor";

interface StyledStationListItemProps {
  background: string;
  isLast?: boolean;
}

const StyledList = styled(List)({
  listStyle: "none",
  margin: 0,
  padding: 0,
  position: "relative",
});

const StyledStationListItem = styled(ListItem, {
  shouldForwardProp: (prop) => prop !== "background" && prop !== "isLast",
})<StyledStationListItemProps>(({ background, isLast }) => ({
  position: "relative",
  paddingLeft: "30px",
  "&:before": {
    content: '""',
    display: "inline-block",
    width: 15,
    height: 15,
    background: "var(--primary-button-title-color)",
    border: "2px solid var(--main-between-line-color)",
    position: "absolute",
    left: 0,
    top: 14,
    borderRadius: "50%",
    zIndex: 3,
  },
  "&:after": {
    content: '""',
    display: "inline-block",
    width: 2,
    background,
    position: "absolute",
    left: 8,
    top: 30,
    height: "100%",
    maxHeight: isLast ? 0 : "100%",
  },
}));

const StyledInterchangeListItem = styled(ListItem, {
  shouldForwardProp: (prop) => prop !== "background",
})<StyledStationListItemProps>(({ background }) => ({
  position: "relative",
  paddingLeft: "30px",
  marginBottom: "15px",
  "&:before": {
    content: '""',
    display: "inline-block",
    width: 30,
    height: 15,
    background: "var(--primary-button-title-color)",
    border: "2px solid var(--main-between-line-color)",
    position: "absolute",
    left: -8,
    top: 14,
    borderRadius: "30px",
    zIndex: 3,
  },
  "&:after": {
    content: '""',
    display: "inline-block",
    width: 2,
    background,
    position: "absolute",
    left: 8,
    top: 32,
    height: "100%",
  },
}));

const StyledWalkListItem = styled(ListItem, {
  shouldForwardProp: (prop) => prop !== "background",
})<StyledStationListItemProps>(({ background }) => ({
  position: "relative",
  paddingLeft: "30px",
  marginBottom: "15px",
  // "&:before": {
  //   content: '""',
  //   display: "inline-block",
  //   width: 30,
  //   height: 15,
  //   background: "var(--primary-button-title-color)",
  //   border: "2px solid var(--main-between-line-color)",
  //   position: "absolute",
  //   left: -8,
  //   top: 14,
  //   borderRadius: "30px",
  //   zIndex: 3,
  // },
  "&:after": {
    content: '""',
    display: "inline-block",
    border: `2px solid ${background}`,
    borderLeftStyle: "dashed",
    borderRightStyle: "none",
    backgroundColor: "#fff",
    position: "absolute",
    left: 8,
    top: -28,
    height: "205%",
    zIndex: 2,
  },
}));

interface ShowRecommendRouteProps {
  recommendRoute: RecommendRoute[];
}

const Station: React.FC<{
  station: RecommendRoute;
  background: string;
  isLast: boolean;
}> = ({ station, background, isLast }) => {
  const { t } = useTranslation();
  return (
    <StyledStationListItem background={background} isLast={isLast}>
      <div>
        <div className={styles.show_recommend_route__station}>
          {t(station.station)}
        </div>
        {station.showLine && !station.line.includes(WALK_LINE) && (
          <div className={styles.show_recommend_route_line}>
            <img
              className={styles.show_recommend_route_line_logo}
              src={RailwayLineImage[station.line]}
            />
            <div
              className={styles.show_recommend_route_line_text}
              style={{
                background,
                color: getTextColor(background),
              }}
            >
              {t(station.line)}
            </div>
          </div>
        )}
      </div>
    </StyledStationListItem>
  );
};

const Walk: React.FC<{ station: RecommendRoute; background: string }> = ({
  station,
  background,
}) => {
  const { t } = useTranslation();

  console.log("station", station);

  return (
    <StyledWalkListItem background={background}>
      <div className={styles.show_recommend_route_line}>
        <img
          className={styles.show_recommend_route_line_logo}
          src={RailwayLineImage[station.line]}
        />
        <div
          className={styles.show_recommend_route_line_text}
          style={{
            background,
            color: getTextColor(background),
          }}
        >
          {station.station.includes(WALK_LINE) &&
          !station.station.includes("station") &&
          station.station.length > WALK_LINE.length
            ? t(CONST_TRANSFER)
            : station.station.includes(WALK_LINE) &&
              !station.station.includes("station")
            ? t(CONST_INTERCHANGE_WALK)
            : t(CONST_INTERCHANGE_LINE)}
        </div>
        {station.station.includes("discounted") && (
          <div
            className={styles.show_recommend_route_line_text}
            style={{
              background: "#c0f5e4",
              color: getTextColor("#c0f5e4"),
            }}
          >
            {t("const_interchange_discount")}
          </div>
        )}
      </div>
    </StyledWalkListItem>
  );
};

const Interchange: React.FC<{
  station: RecommendRoute;
  background: string;
}> = ({ station, background }) => {
  const { t } = useTranslation();

  return (
    <StyledInterchangeListItem background={background}>
      <div>
        <div className={styles.show_recommend_route__station}>
          {t(station.station)}
        </div>
        <div className={styles.show_recommend_route_line}>
          {station.showLine && (
            <>
              <img
                className={styles.show_recommend_route_line_logo}
                src={RailwayLineImage[station.line]}
              />
              <div
                className={styles.show_recommend_route_line_text}
                style={{
                  background,
                  color: getTextColor(background),
                }}
              >
                {t(station.line)}
              </div>
            </>
          )}
        </div>
      </div>
    </StyledInterchangeListItem>
  );
};

const ShowRecommendRoute: React.FC<ShowRecommendRouteProps> = ({
  recommendRoute,
}) => {
  const { t } = useTranslation();
  const [routeDescription, setRouteDescription] = useState<string>("");

  useEffect(() => {
    if (!recommendRoute.length) {
      return;
    }

    const { stationCount, interchangeCount, walkCount } = recommendRoute.reduce(
      (acc, cur, index) => {
        if (cur.line !== CONST_INTERCHANGE_LINE) {
          acc.stationCount += 1;
        }

        if (cur.line === CONST_INTERCHANGE_LINE && cur.station !== WALK_LINE) {
          acc.interchangeCount += 1;
        }

        if (cur.station === WALK_LINE) {
          acc.walkCount += 1;
        }

        if (
          index < recommendRoute.length - 2 &&
          cur.station.includes(WALK_LINE) &&
          cur.station.length > WALK_LINE.length
        ) {
          acc.walkCount += 1;
          acc.stationCount += 1;
        }

        if (
          (index === recommendRoute.length - 2 &&
            cur.station.includes(WALK_LINE)) ||
          cur.station.includes("station")
        ) {
          acc.stationCount -= 1;
        }

        return acc;
      },
      { stationCount: -1, interchangeCount: 0, walkCount: 0 }
    );

    const stationStopNumber = stationCount - interchangeCount;

    setRouteDescription(
      `${
        stationStopNumber
          ? `${stationStopNumber} ${t("const_station_stop")}`
          : ""
      }${
        interchangeCount
          ? `\u00A0\u00A0\u00A0${interchangeCount} ${t("const_transfer_count")}`
          : ""
      }${
        walkCount
          ? `\u00A0\u00A0\u00A0${walkCount} ${t("const_walk_count")}`
          : ""
      }`
    );
  }, [recommendRoute]);

  console.log("recommendRoute", recommendRoute);

  if (!recommendRoute.length) {
    return null;
  }

  return (
    <div className={styles.show_recommend_route}>
      <div className={styles.show_recommend_route_description}>
        {routeDescription}
      </div>
      <div className={styles.show_recommend_route_content}>
        <StyledList>
          {recommendRoute.map((station, index) => {
            const background = station.station.includes(WALK_LINE)
              ? RailwayLineBackGroundColors[CONST_INTERCHANGE_LINE]
              : RailwayLineBackGroundColors[station.line];

            if (station.line === CONST_INTERCHANGE_LINE) {
              return <Walk station={station} background={background} />;
            }

            if (station.interchange) {
              return <Interchange station={station} background={background} />;
            }
            return (
              <Station
                station={station}
                background={background}
                isLast={index === recommendRoute.length - 1}
              />
            );
          })}
        </StyledList>
      </div>
    </div>
  );
};

export default ShowRecommendRoute;
