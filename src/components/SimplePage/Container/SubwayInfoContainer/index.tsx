import React from "react";
import styles from "./style.module.scss";

import { useTranslation } from "react-i18next";

interface SubwayInfoContainerProps {
  subwayData: {
    title: string;
    logo: string;
    aboutTitle: string;
    aboutText: string;
    routeAboutTitle: string;
    routeAboutSubtitle: string;
    routeData: {
      routeLogo: string;
      routeTitle: string;
      routeText: string;
    }[];
  };
}

const SubwayInfoContainer: React.FC<SubwayInfoContainerProps> = ({
  subwayData,
}) => {
  const { t } = useTranslation();
  return (
    <>
      <div className={styles.BCCTB__title__content}>
        <div className={styles.BCCTB__title} id='BCCTB_title'>
          {t(subwayData.title)}
        </div>
        <div className={styles.BCCTB__title__banner}>
          <img
            className={styles.BCCTB__title__banner_img}
            src={subwayData.logo}
          />
        </div>
      </div>
      <div className={styles.BCCTB__content}>
        <div className={styles.BCCTB__content__subTitle}>
          {t(subwayData.aboutTitle)}
        </div>
        <div className={styles.BCCTB__content__text}>
          {t(subwayData.aboutText)}
        </div>
      </div>
      <div className={styles.line}>
        <hr />
      </div>
      <div className={styles.BCCTB__content}>
        <div className={styles.BCCTB__content__subTitle}>
          {t(subwayData.routeAboutTitle)}
        </div>
        <div className={styles.BCCTB__content__text}>
          {t(subwayData.routeAboutSubtitle)}
        </div>
        <div className={styles.BCCTB__content__route_container}>
          {subwayData.routeData.map((data) => {
            return (
              <>
                <div className={styles.BCCTB__content__route}>
                  <div className={styles.BCCTB__content__route_left}>
                    <img
                      src={data.routeLogo}
                      className={styles.BCCTB__content__route_left_logo}
                    />
                  </div>
                  <div className={styles.BCCTB__content__route_right}>
                    <div
                      className={styles.BCCTB__content__route_right_subTitle}
                    >
                      {t(data.routeTitle)}
                    </div>
                    <div className={styles.BCCTB__content__route_right_text}>
                      {t(data.routeText)}
                    </div>
                  </div>
                </div>
                <div className={styles.line}>
                  <hr />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SubwayInfoContainer;
