import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
  const { t, i18n } = useTranslation();
  const language = i18n.language;
  const [todayDate, setTodayDate] = useState(new Date());

  useEffect(() => {
    const timer = setTimeout(() => {
      var localCurrentDate = new Date();
      var currentUTC =
        localCurrentDate.getTime() +
        localCurrentDate.getTimezoneOffset() * 60000;
      setTodayDate(new Date(currentUTC + 3600000 * 8));
    }, 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  const today = {
    year: todayDate.getFullYear(),
    month: todayDate.getMonth(),
    day: todayDate.getDate(),
    hour: todayDate.getHours(),
    minute: todayDate.getMinutes(),
    second: todayDate.getSeconds(),
  };

  // const gameToday = {
  //   minute: Math.floor((today.second * 72) / 60) % 60,
  //   hour: Math.floor(((today.minute * 60 + today.second) * 72) / 3600) % 24,
  //   day: Math.floor(
  //     (((today.hour * 3600 + today.minute * 60 + today.second) * 72) /
  //       3600 /
  //       24) %
  //       24
  //   ),
  // };
  const gameToday = {
    minute: Math.floor(
      (((((((((today.hour * 3600 + today.minute * 60 + today.second) * 72) /
        3600 /
        24) %
        24) %
        1) *
        24) %
        24) %
        1) *
        60) %
        60
    ),
    hour: Math.floor(
      ((((((today.hour * 3600 + today.minute * 60 + today.second) * 72) /
        3600 /
        24) %
        24) %
        1) *
        24) %
        24
    ),
    day: Math.floor(
      ((today.hour * 3600 + today.minute * 60 + today.second) * 72) / 3600 / 24
    ),
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
              <Link
                to="/page/basic/background"
                className={styles.discover__news__dayHeader_time}
                title={t("const_buddy_time_name")}
              >
                <li>
                  {`${
                    gameToday.hour < 10 ? `0${gameToday.hour}` : gameToday.hour
                  }`}
                  <sub>
                    {language === "en"
                      ? "BH"
                      : t("const_buddy_name") + t("const_hour")}
                  </sub>
                  {`${
                    gameToday.minute < 10
                      ? `0${gameToday.minute}`
                      : gameToday.minute
                  }`}
                  <sub>
                    {language === "en"
                      ? "BM"
                      : t("const_buddy_name") + t("const_mins")}
                  </sub>
                </li>
                <li>
                  {language === "en" ? "The " : "第 "}
                  {gameToday.day}
                  <sup>
                    {language === "en" &&
                      `${
                        gameToday.day % 10 == 1
                          ? "st"
                          : gameToday.day % 10 == 2
                          ? "nd"
                          : gameToday.day % 10 === 3
                          ? "rd"
                          : "th"
                      }`}
                  </sup>
                </li>
                <li>
                  {language === "en"
                    ? `BUDDY Day${gameToday.day != 1 && "s"}`
                    : "友日"}
                </li>
              </Link>
            </div>

            <div className={styles.discover__news__dayHeader_holiday}>
              <Link
                to={
                  holidayData[`${today.month + 1}/${today.day}`] !== undefined
                    ? "/page/basic/legal-holiday"
                    : "/page/basic/calendar-system"
                }
                title={t("const_era")}
              >
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
                    {t("const_buddy_era")}
                    {` ${today.year - 2012} `}
                    {language != "en" ? t("const_year") : ""}
                  </span>
                )}
              </Link>
            </div>
          </div>
          <div className={styles.discover__news_display}>
            <table className={styles.discover__news_display_table}>
              <tbody>
                {majorEvents.data
                  .slice(-5)
                  .reverse()
                  .map((data, index) => {
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
                          {`${t("const_buddy_era")} ${
                            parseInt(data.year) - 2012
                          } ${language != "en" ? t("const_year") : ""}\n${
                            data.year
                          }/${data.month}/${data.day}`}
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
