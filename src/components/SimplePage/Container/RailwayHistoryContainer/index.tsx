import React, { useState } from "react";
import styles from "./style.module.scss";
import Loading from "../../../Loading";

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
import image11 from "../../../../image/merto-map/13.jpg";
import image12 from "../../../../image/merto-map/16.jpg";
import image13 from "../../../../image/merto-map/17.jpg";
import image14 from "../../../../image/merto-map/18.jpg";

interface RailwayHistoryContainerProps {}

const RailwayHistoryContainer: React.FC<RailwayHistoryContainerProps> = () => {
  const { t } = useTranslation();
  const [isImageLoading, setIsImageLoading] = useState(true);
  const metroMap = [
    {
      image: image01,
      title: "railway_history_map1_name",
      projectName: "railway_history_map1_project_name",
      opened: "2012-04-01",
      serviceArea: "railway_history_map1_service_area",
    },
    {
      image: image02,
      title: "railway_history_map2_name",
      projectName: "railway_history_map2_project_name",
      opened: "2012-05-02",
      serviceArea: "railway_history_map2_service_area",
    },
    {
      image: image03,
      title: "railway_history_map3_name",
      projectName: "railway_history_map3_project_name",
      opened: "2012-05-03",
      serviceArea: "railway_history_map3_service_area",
    },
    {
      image: image04,
      title: "railway_history_map4_name",
      projectName: "railway_history_map4_project_name",
      opened: "2012-05-04",
      serviceArea: "railway_history_map4_service_area",
    },
    {
      image: image05,
      title: "railway_history_map5_name",
      projectName: "railway_history_map5_project_name",
      opened: "2017-05-15",
      serviceArea: "railway_history_map5_service_area",
    },
    {
      image: image06,
      title: "railway_history_map6_name",
      projectName: "railway_history_map6_project_name",
      opened: "2017-06-01",
      serviceArea: "railway_history_map6_service_area",
    },
    {
      image: image07,
      title: "railway_history_map7_name",
      projectName: "railway_history_map7_project_name",
      opened: "2017-06-10",
      serviceArea: "railway_history_map7_service_area",
    },
    {
      image: image08,
      title: "railway_history_map8_name",
      projectName: "railway_history_map8_project_name",
      opened: "2017-06-20",
      serviceArea: "railway_history_map8_service_area",
    },
    {
      image: image09,
      title: "railway_history_map9_name",
      projectName: "railway_history_map9_project_name",
      opened: "2017-07-12",
      serviceArea: "railway_history_map9_service_area",
    },
    {
      image: image10,
      title: "railway_history_map10_name",
      projectName: "railway_history_map10_project_name",
      opened: "2018-03-03",
      serviceArea: "railway_history_map10_service_area",
    },
    {
      image: image11,
      title: "railway_history_map11_name",
      projectName: "railway_history_map11_project_name",
      opened: "2018-05-03",
      serviceArea: "railway_history_map11_service_area",
    },
    {
      image: image12,
      title: "railway_history_map12_name",
      projectName: "railway_history_map12_project_name",
      opened: "2018-07-05",
      serviceArea: "railway_history_map12_service_area",
    },
    {
      image: image13,
      title: "railway_history_map13_name",
      projectName: "railway_history_map13_project_name",
      opened: "2018-10-28",
      serviceArea: "railway_history_map13_service_area",
    },
    {
      image: image14,
      title: "railway_history_map14_name",
      projectName: "railway_history_map14_project_name",
      opened: "2021-10-31",
      serviceArea: "railway_history_map14_service_area",
    },
  ];
  const [timeValue, setTimeValue] = useState<number>(metroMap.length - 1);
  const handleTimeValueChange = (e) => {
    setTimeValue(e.target.value);
    setIsImageLoading(true);
  };

  const handleAddTimeValueChange = () => {
    if (timeValue === metroMap.length - 1) return;
    setTimeValue(timeValue + 1);
    setIsImageLoading(true);
  };

  const handleMinusTimeValueChange = () => {
    if (timeValue === 0) return;
    setTimeValue(timeValue - 1);
    setIsImageLoading(true);
  };

  const handleImageOnLoad = () => {
    setIsImageLoading(false);
  };

  console.log(isImageLoading);

  return (
    <>
      <div className={styles.railwayHistroy__title__content}>
        <div className={styles.railwayHistroy__title} id="railwayHistroy_title">
          {t("railway_history_title")}
        </div>
        <div
          className={styles.railwayHistroy__subTitle}
          id="railway_history_subtitle"
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
              {isImageLoading && <Loading containersClassName={true}></Loading>}
              <img
                className={
                  styles.railwayHistroy__title__map__banner_container_img
                }
                src={metroMap[timeValue].image}
                onLoad={handleImageOnLoad}
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
              type="range"
              min="0"
              max="13"
              step="1"
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
      {/* <div className={styles.line}>
        <hr />
      </div> */}
      <div className={styles.railwayHistroy__content}>
        <div className={styles.railwayHistroy__content__subTitle}>
          {t("railway_history_project_opened")}
        </div>
        <div className={styles.railwayHistroy__content__text}>
          {t(metroMap[timeValue].opened)}
        </div>
      </div>
      <div className={styles.railwayHistroy__content}>
        <div className={styles.railwayHistroy__content__subTitle}>
          {t("railway_history_project_service_area")}
        </div>
        <div className={styles.railwayHistroy__content__text}>
          {t(metroMap[timeValue].serviceArea)}
        </div>
      </div>
    </>
  );
};

export default RailwayHistoryContainer;
