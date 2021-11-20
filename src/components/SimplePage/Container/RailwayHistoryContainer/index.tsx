import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";

import { useTranslation } from "react-i18next";

import image01 from "../../../../image/merto-map/01.jpg";
import image02 from "../../../../image/merto-map/02.jpg";
import image03 from "../../../../image/merto-map/03.jpg";
import image04 from "../../../../image/merto-map/04.jpg";
import image05 from "../../../../image/merto-map/05.jpg";
import image06 from "../../../../image/merto-map/06.jpg";
import image07 from "../../../../image/merto-map/07.jpg";
import image08 from "../../../../image/merto-map/08.jpg";
import image09 from "../../../../image/merto-map/09.jpg";
import image10 from "../../../../image/merto-map/10.jpg";
import image11 from "../../../../image/merto-map/11.jpg";
import image12 from "../../../../image/merto-map/16.jpg";
import image13 from "../../../../image/merto-map/17.jpg";
import image14 from "../../../../image/merto-map/18.jpg";

interface RailwayHistoryContainerProps {}

const RailwayHistoryContainer: React.FC<RailwayHistoryContainerProps> = () => {
  const { t } = useTranslation();
  const metroMap = [
    {
      image: image01,
      title: "railway_history_map1_name",
      projectName: "railway_history_map1_project_name",
    },
    {
      image: image02,
      title: "railway_history_map2_name",
      projectName: "railway_history_map2_project_name",
    },
    {
      image: image03,
      title: "railway_history_map3_name",
      projectName: "railway_history_map3_project_name",
    },
    {
      image: image04,
      title: "railway_history_map4_name",
      projectName: "railway_history_map4_project_name",
    },
    {
      image: image05,
      title: "railway_history_map5_name",
      projectName: "railway_history_map5_project_name",
    },
    {
      image: image06,
      title: "railway_history_map6_name",
      projectName: "railway_history_map6_project_name",
    },
    {
      image: image07,
      title: "railway_history_map7_name",
      projectName: "railway_history_map7_project_name",
    },
    {
      image: image08,
      title: "railway_history_map8_name",
      projectName: "railway_history_map8_project_name",
    },
    {
      image: image09,
      title: "railway_history_map9_name",
      projectName: "railway_history_map9_project_name",
    },
    {
      image: image10,
      title: "railway_history_map10_name",
      projectName: "railway_history_map10_project_name",
    },
    {
      image: image11,
      title: "railway_history_map11_name",
      projectName: "railway_history_map11_project_name",
    },
    {
      image: image12,
      title: "railway_history_map12_name",
      projectName: "railway_history_map12_project_name",
    },
    {
      image: image13,
      title: "railway_history_map13_name",
      projectName: "railway_history_map13_project_name",
    },
    {
      image: image14,
      title: "railway_history_map14_name",
      projectName: "railway_history_map14_project_name",
    },
  ];
  const [timeValue, setTimeValue] = useState<number>(metroMap.length - 1);
  const handleTimeValueChange = (e) => {
    setTimeValue(e.target.value);
  };

  const handleAddTimeValueChange = () => {
    if (timeValue === metroMap.length - 1) return;
    setTimeValue(timeValue + 1);
  };

  const handleMinusTimeValueChange = () => {
    if (timeValue === 0) return;
    setTimeValue(timeValue - 1);
  };

  return (
    <>
      <div className={styles.railwayHistroy__title__content}>
        <div className={styles.railwayHistroy__title} id='railwayHistroy_title'>
          {t("railway_history_title")}
        </div>
        <div
          className={styles.railwayHistroy__subTitle}
          id='railway_history_subtitle'
        >
          {t("railway_history_subtitle")}
        </div>
        <div className={styles.railwayHistroy__title__map_name}>
          {t(metroMap[timeValue].title)}
        </div>
        <div className={styles.railwayHistroy__title__map}>
          <div className={styles.railwayHistroy__title__map__banner}>
            <div
              className={styles.railwayHistroy__title__map__banner_container}
            >
              <img
                className={
                  styles.railwayHistroy__title__map__banner_container_img
                }
                src={metroMap[timeValue].image}
              />
            </div>
          </div>
        </div>
        <div className={styles.railwayHistroy__timeLine}>
          <div
            className={styles.railwayHistroy__timeLine__leftArrow}
            onClick={handleMinusTimeValueChange}
          ></div>
          <div className={styles.range}>
            <input
              type='range'
              min='0'
              max='13'
              step='1'
              value={timeValue}
              onChange={handleTimeValueChange}
            />
          </div>
          <div
            className={styles.railwayHistroy__timeLine__rightArrow}
            onClick={handleAddTimeValueChange}
          ></div>
        </div>
      </div>
      <div className={styles.railwayHistroy__content}>
        <div className={styles.railwayHistroy__content__subTitle}>
          {t("railway_history_project_name")}
        </div>
        <div className={styles.railwayHistroy__content__text}>
          {t(metroMap[timeValue].projectName)}
        </div>
      </div>
      <div className={styles.line}>
        <hr />
      </div>
    </>
  );
};

export default RailwayHistoryContainer;
