import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import { styled, List, ListItem, ListItemText } from "@mui/material";

import { useTranslation } from "react-i18next";
import {
  INTERCHANGE_STATION,
  RailwayLineBackGroundColors,
  RailwayLineImage,
  RailwayLineOption,
  WALK_LINE,
  railwayLines,
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
    top: 30,
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
    top: -30,
    height: "230%",
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
        <div className={styles.show_recommend_route_line}>
          {station.showLine && !station.line.includes(WALK_LINE) && (
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
    </StyledStationListItem>
  );
};

const Walk: React.FC<{ station: RecommendRoute; background: string }> = ({
  station,
  background,
}) => {
  const { t } = useTranslation();
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
          {t(station.station)}
        </div>
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

  return (
    <div className={styles.show_recommend_route}>
      <StyledList>
        {recommendRoute.map((station, index) => {
          const background = station.line.includes(WALK_LINE)
            ? RailwayLineBackGroundColors[INTERCHANGE_STATION]
            : RailwayLineBackGroundColors[station.line];

          if (station.station === INTERCHANGE_STATION) {
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
  );
};

export default ShowRecommendRoute;
