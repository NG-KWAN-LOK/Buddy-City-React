import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";

import { useTranslation } from "react-i18next";

import railwayRouteMapData from "../../../../pageData/railwayRouteMapData";

interface RailwayRouteMapContainerProps {}

const RailwayRouteMapContainer: React.FC<RailwayRouteMapContainerProps> =
  () => {
    const { t } = useTranslation();
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
