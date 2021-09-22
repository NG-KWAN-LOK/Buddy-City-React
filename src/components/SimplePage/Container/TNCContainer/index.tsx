import React from "react";
import styles from "./style.module.scss";
import { useTranslation } from "react-i18next";

const TNCContainer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className={styles.title__content}>
        <div className={styles.title} id='tnc_title'>
          {t("tnc_title")}
        </div>
        <div className={styles.subTitle} id='tnc_subTitle'>
          {t("tnc_subTitle")}
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.content_title} id='tnc_subTitle'>
          {t("tnc_topic1")}
        </div>
        <div className={styles.content_text} id='tnc_subTitle'>
          {t("tnc_topic1_text")}
        </div>
        <div className={styles.content_title} id='tnc_subTitle'>
          {t("tnc_topic2")}
        </div>
        <div className={styles.content_text} id='tnc_subTitle'>
          {t("tnc_topic2_text")}
        </div>
        <div className={styles.content_title} id='tnc_subTitle'>
          {t("tnc_topic3")}
        </div>
        <div className={styles.content_text} id='tnc_subTitle'>
          {t("tnc_topic3_text")}
        </div>
        <div className={styles.content_title} id='tnc_subTitle'>
          {t("tnc_topic4")}
        </div>
        <div className={styles["content_text-small"]} id='tnc_subTitle'>
          {t("tnc_topic4_text")}
        </div>
        <div className={styles.content_title} id='tnc_subTitle'>
          {t("tnc_topic5")}
        </div>
        <div className={styles.content_text} id='tnc_subTitle'>
          {t("tnc_topic5_text")}
        </div>
        <div className={styles.content_title} id='tnc_subTitle'>
          {t("tnc_topic6")}
        </div>
        <div className={styles.content_text} id='tnc_subTitle'>
          {t("tnc_topic6_text")}
        </div>
        <div className={styles.content_title} id='tnc_subTitle'>
          {t("tnc_topic7")}
        </div>
        <div className={styles.content_text} id='tnc_subTitle'>
          {t("tnc_topic7_text")}
        </div>
        <div className={styles.content_title} id='tnc_subTitle'>
          {t("tnc_topic8")}
        </div>
        <div className={styles.content_text} id='tnc_subTitle'>
          {t("tnc_topic8_text")}
        </div>
        <div className={styles.content_title} id='tnc_subTitle'>
          {t("tnc_topic9")}
        </div>
        <div className={styles.content_text} id='tnc_subTitle'>
          {t("tnc_topic9_text")}
        </div>
        <div className={styles.content_title} id='tnc_subTitle'>
          {t("tnc_topic10")}
        </div>
        <div className={styles.content_text} id='tnc_subTitle'>
          {t("tnc_topic10_text")}
        </div>
        <div className={styles.content_title} id='tnc_subTitle'>
          {t("tnc_topic11")}
        </div>
        <div className={styles.content_text} id='tnc_subTitle'>
          {t("tnc_topic11_text")}
        </div>
        <div className={styles.content_title} id='tnc_subTitle'>
          {t("tnc_topic12")}
        </div>
        <div className={styles.content_text} id='tnc_subTitle'>
          {t("tnc_topic12_text")}
        </div>
      </div>
    </>
  );
};

export default TNCContainer;
