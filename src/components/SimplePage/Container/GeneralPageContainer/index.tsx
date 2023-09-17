import React from "react";
import styles from "./style.module.scss";
import buddyCitySong from "../../../../media/BuddyCitySong.m4a";
import VideoPlayer from "../../../VideoPlayer";

import { useTranslation } from "react-i18next";
import { GeneralPageData } from "../../../../interface/GeneralPage";

interface GeneralPageContainerProps {
  generalPageData: GeneralPageData;
}

const GeneralPageContainer: React.FC<GeneralPageContainerProps> = ({
  generalPageData,
}) => {
  const { t, i18n } = useTranslation();
  const language = i18n.language;
  const convertDate = (day, month) => {
    if (language === "en") return `${day}/${month}`;
    else return `${month}月${day}日`;
  };
  const renderLegalHolidayTable = (data, index) => {
    return (
      <table key={index} className={styles.discover__news_display_table}>
        <tbody>
          {Object(data.tableTR).map((data, index) => {
            return (
              <tr
                key={index}
                className={styles.discover__news_display_table_row}
              >
                <td
                  className={`${styles["discover__news_display_table_col"]} ${styles["discover__news_display_table_col-first"]}`}
                >
                  {convertDate(
                    data.tableTD[1].tableTDText,
                    data.tableTD[0].tableTDText
                  )}
                </td>
                <td
                  className={`${styles["discover__news_display_table_col"]} ${styles["discover__news_display_table_col-second"]}`}
                >
                  {t(data.tableTD[2].tableTDText)}
                </td>
                <td
                  className={`${styles["discover__news_display_table_col"]} ${styles["discover__news_display_table_col-third"]}`}
                >
                  {t(data.tableTD[3].tableTDText)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };
  const renderTimeSystemTable = (data, index) => {
    return (
      <table key={index} className={styles.discover__news_display_table}>
        <tbody>
          {Object(data.tableTR).map((data, index) => {
            return (
              <tr
                key={index}
                className={styles.discover__news_display_table_row}
              >
                <td
                  className={`${styles["discover__news_display_table_col"]} ${styles["discover__news_display_table_col-first"]}`}
                >
                  {data.tableTD[0].tableTDText +
                    t(data.tableTD[1].tableTDText) +
                    t(data.tableTD[2].tableTDText)}
                </td>
                <td
                  className={`${styles["discover__news_display_table_col"]} ${styles["discover__news_display_table_col-second"]}`}
                >
                  {data.tableTD[3].tableTDText +
                    t(data.tableTD[4].tableTDText) +
                    t(data.tableTD[5].tableTDText)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };
  return (
    <>
      <div className={styles.GeneralPageContainer__title__content}>
        <div className={styles.GeneralPageContainer__title} id='title'>
          {t(generalPageData.pageTitle)}
        </div>
        <div
          className={styles.GeneralPageContainer__content__subTitle}
          id='subtitle'
        >
          {t(generalPageData.pageSubtitle)}
        </div>
        <div className={styles.GeneralPageContainer__title__banner}>
          <img
            className={styles.GeneralPageContainer__title__banner_img}
            src={""}
          />
        </div>
      </div>
      <div className={styles.GeneralPageContainer__content}>
        {generalPageData.contentData.map((data, index) => {
          if (data.contentType === "title") {
            return (
              <div
                key={index}
                className={styles.GeneralPageContainer__content__subTitle}
              >
                {t(String(data.contentText))}
              </div>
            );
          }
          if (data.contentType === "text") {
            return (
              <div
                key={index}
                className={styles.GeneralPageContainer__content__text}
              >
                {t(String(data.contentText))}
              </div>
            );
          }
          if (data.contentType === "musicPlayer") {
            return <VideoPlayer src={buddyCitySong} />;
          }
          if (generalPageData.contentName === "legal-holiday")
            return renderLegalHolidayTable(data, index);
          if (generalPageData.contentName === "background")
            return renderTimeSystemTable(data, index);
          return null;
        })}
      </div>
    </>
  );
};

export default GeneralPageContainer;
