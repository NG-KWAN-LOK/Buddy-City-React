import React from "react";
import styles from "./style.module.scss";

import banner from "../../../../image/bbcctb-about-us/001.jpg";

import { useTranslation } from "react-i18next";

const BCCTBContainer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className={styles.BCCTB__title__content}>
        <div className={styles.BCCTB__title} id='BCCTB_title'>
          {t("BCCTB_title")}
        </div>
        <div className={styles.BCCTB__title__banner}>
          <img className={styles.BCCTB__title__banner_img} src={banner} />
        </div>
      </div>
      <div className={styles.BCCTB__content}>
        <div
          className={styles.BCCTB__content__subTitle}
          id='BCCTB__content__subTitle'
        >
          {t("BCCTB__content__subTitle")}
        </div>
        <div
          className={styles.BCCTB__content__text}
          id='BCCTB__content__text__1'
        >
          {t("BCCTB__content__text__1")}
        </div>
        <div
          className={styles.BCCTB__content__text}
          id='BCCTB__content__text__2'
        >
          {t("BCCTB__content__text__2")}
        </div>
        <div
          className={styles.BCCTB__content__text}
          id='BCCTB__content__text__3'
        >
          {t("BCCTB__content__text__3")}
        </div>
        <div
          className={styles.BCCTB__content__text}
          id='BCCTB__content__text__4'
        >
          {t("BCCTB__content__text__4")}
        </div>
        <div
          className={styles.BCCTB__content__text}
          id='BCCTB__content__text__5'
        >
          {t("BCCTB__content__text__5")}
        </div>
        <div
          className={styles.BCCTB__content__text}
          id='BCCTB__content__text__6'
        >
          {t("BCCTB__content__text__6")}
        </div>
      </div>
    </>
  );
};

export default BCCTBContainer;
