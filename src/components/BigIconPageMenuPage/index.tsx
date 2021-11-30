import React from "react";
import styles from "./style.module.scss";

import { useTranslation } from "react-i18next";

import holidayData from "../../pageData/holidayData";
import majorEvents from "../../pageData/majorEvents";

interface BigIconPageMenuPageProps {
  // pageTitle: string;
  // pageText: string;
  children?: React.ReactNode;
}

const BigIconPageMenuPage: React.FC<BigIconPageMenuPageProps> = ({
  // pageTitle,
  // pageText,
  children,
}) => {
  const { t } = useTranslation();
  const localCurrentDate = new Date();
  const currentUTC =
    localCurrentDate.getTime() + localCurrentDate.getTimezoneOffset() * 60000;
  const todayDate = new Date(currentUTC + 3600000 * 8);

  const today = {
    year: todayDate.getFullYear(),
    month: todayDate.getMonth(),
    day: todayDate.getDate(),
  };

  const monthList = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className={styles.main}>
      <div className={styles.discover}>
        <div className={styles.discover__news}>
          {/* <div className={styles.discover__title} id={pageTitle}>
            {t(pageTitle)}
          </div>
          <div className={styles.discover__text} id={pageText}>
            {t(pageText)}
          </div> */}
          <div className={styles.discover__news_dayContainer}>
            <div className={styles.discover__news__dayHeader}>
              <ul className={styles.discover__news__dayHeader_day}>
                <li>{today.day}</li>
                <li>{today.year}</li>
                <li>{monthList[today.month]}</li>
              </ul>

              <div className={styles.discover__news__dayHeader_holiday}>
                <span
                  className={styles.discover__news__dayHeader_holiday_first}
                >
                  {t("holiday_today_is")}
                </span>
                {holidayData[`${today.month + 1}/${today.day}`] !==
                undefined ? (
                  <span
                    className={styles.discover__news__dayHeader_holiday_second}
                  >
                    {t(holidayData[`${today.month + 1}/${today.day}`].name)}
                  </span>
                ) : (
                  <span
                    className={styles.discover__news__dayHeader_holiday_first}
                  >
                    {t("holiday_today_official_calendar_name")}
                    {today.year - 2012}
                    {t("holiday_today_official_calendar_year")}
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className={styles.discover__news_display}>
            <table className={styles.discover__news_display_table}>
              <tbody>
                {majorEvents.data
                  .slice(-5)
                  .reverse()
                  .map((data, index) => {
                    console.log(data);
                    return (
                      <tr
                        key={index}
                        className={styles.discover__news_display_table_row}
                      >
                        <td
                          className={`${styles["discover__news_display_table_col"]} ${styles["discover__news_display_table_col-bullet"]}`}
                        >
                          &bull;
                        </td>
                        <td className={styles.discover__news_display_table_col}>
                          {`${data.year}/${data.month}/${data.day}`}
                        </td>
                        <td
                          className={`${styles["discover__news_display_table_col"]} ${styles["discover__news_display_table_col-second"]}`}
                        >
                          {data.zh_name}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
        <div className={styles.discover__content}>{children}</div>
      </div>
    </div>
  );
};

export default BigIconPageMenuPage;
