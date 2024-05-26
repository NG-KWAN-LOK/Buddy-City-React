import React, { JSX, memo, useCallback, useEffect, useState } from "react";
import styles from "./style.module.scss";
import {
  IMajorEventData,
  IMajorEvents,
} from "../../../../../pageData/majorEvents";
import { JsxElement, transform } from "typescript";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ListItem, styled } from "@mui/material";
import { getEraName } from "../../../../../utils/getEraName";

interface ChronicleProps {
  eventData: IMajorEvents;
}

const EventItem = (data: IMajorEventData, index: number) => {
  const { i18n } = useTranslation();
  const language = i18n.language;
  const rowData = () => (
    <React.Fragment key={`row-${index}`}>
      <div
        className={`${
          data.type !== "pointer" &&
          styles["discover__news_display_table_row_arrow"]
        }`}
      ></div>
      <li
        className={`${styles["discover__news_display_table_col"]} ${styles["discover__news_display_table_col-bullet"]}`}
      >
        &bull;
      </li>
      <li
        className={`${styles["discover__news_display_table_col"]} ${styles["discover__news_display_table_col-second"]}`}
      >
        {language === "zh" && data.zh_name}
        {language === "en" && data.eng_name}
        {language === "jp" && data.jp_name}
      </li>
    </React.Fragment>
  );

  if (data.type === "internal") {
    return (
      <Link
        to={data.url || ""}
        target='_blank'
        className={`${styles["discover__news_display_table_row"]} ${styles["discover__news_display_table_row-hover"]}`}
      >
        {rowData()}
      </Link>
    );
  }
  if (data.type === "external") {
    return (
      <a
        href={data.url || ""}
        className={`${styles["discover__news_display_table_row"]} ${styles["discover__news_display_table_row-hover"]}`}
      >
        {rowData()}
      </a>
    );
  }
  return (
    <ul className={`${styles["discover__news_display_table_row"]}`}>
      {rowData()}
    </ul>
  );
};

interface StyledYearListItemProps {
  year?: string;
  month?: string;
  isLast?: boolean;
}

const StyledYearListItem = styled(ListItem, {
  shouldForwardProp: (prop) => prop !== "isLast",
})<StyledYearListItemProps>(({ year, month, isLast }) => ({
  position: "relative",
  paddingLeft: "40px",
  "&:after": {
    content: '""',
    display: "inline-block",
    width: 40,
    borderTop: month ? "2px solid var(--subject-blue)" : "none",
    borderLeft: "2px solid var(--main-between-line-color)",
    position: "absolute",
    left: 8,
    top: 35,
    height: "100%",
    maxHeight: isLast ? 0 : "100%",
  },
  ...((year || month) && {
    "&:before": {
      content: `'${year || month}'`,
      fontWeight: 500,
      display: "inline-block",
      width: 40,
      height: 15,
      background: "var(--primary-button-title-color)",
      border: "2px solid var(--main-between-line-color)",
      position: "absolute",
      left: -14,
      top: year ? 30 : 22,
      borderRadius: "30px",
      zIndex: 3,
      textAlign: "center",
      paddingBottom: 7,
    },
  }),
}));

interface StyledMonthListItemProps {
  isLast?: boolean;
}

const StyledMonthListItem = styled(ListItem, {
  shouldForwardProp: (prop) => prop !== "isLast",
})<StyledMonthListItemProps>(({ isLast }) => ({
  position: "relative",
  paddingLeft: "30px",
  "&:before": {
    content: '""',
    display: "inline-block",
    width: 15,
    height: 15,
    background: "var(--primary-button-title-color)",
    border: "2px solid var(--subject-blue)",
    position: "absolute",
    left: 0,
    top: 17,
    borderRadius: "50%",
    zIndex: 3,
  },
  "&:after": {
    content: '""',
    display: "inline-block",
    width: 2,
    background: "var(--subject-blue)",
    position: "absolute",
    left: 8,
    top: 35,
    height: "100%",
    maxHeight: isLast ? 0 : "100%",
  },
}));

const Chronicle: React.FC<ChronicleProps> = (eventData) => {
  const { t, i18n } = useTranslation();
  const language = i18n.language;
  const monthName = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  const mapEventData = () => {
    let tempDate = {};
    return eventData.eventData.data.map((event, index) => {
      const tempComponent: JSX.Element[] = [];
      if (!tempDate[event.year]) {
        tempDate[event.year] = {};
        tempComponent.push(
          <StyledYearListItem
            year={event.year}
            isLast={index === eventData.eventData.data.length - 1}
          >
            <div className={styles.container_content_chronicle_year}>
              {getEraName(event.year, language)}
            </div>
          </StyledYearListItem>
        );
      }
      if (!tempDate[event.year][event.month]) {
        tempDate[event.year][event.month] = {};
      }
      if (!tempDate[event.year][event.month][event.day]) {
        tempDate[event.year][event.month][event.day] = [];
        tempComponent.push(
          <StyledYearListItem
            year={
              index === eventData.eventData.data.length - 1
                ? event.year
                : undefined
            }
            month={
              Object.keys(tempDate[event.year][event.month]).length === 1
                ? monthName[parseInt(event.month) - 1]
                : undefined
            }
            isLast={index === eventData.eventData.data.length - 1}
          >
            <StyledMonthListItem
              isLast={
                eventData.eventData.data[index + 1]?.year !== event.year ||
                eventData.eventData.data[index + 1]?.month !== event.month
              }
            >
              <div className={styles.container_content_chronicle_month}>
                <div className={styles.container_content_chronicle_day}>
                  {`${event.day}/${event.month}/${event.year}`}
                </div>
                {EventItem(event, index)}
              </div>
            </StyledMonthListItem>
          </StyledYearListItem>
        );
      } else {
        tempComponent.push(
          <StyledYearListItem
            year={
              index === eventData.eventData.data.length - 1
                ? event.year
                : undefined
            }
            isLast={index === eventData.eventData.data.length - 1}
          >
            <StyledMonthListItem
              isLast={
                eventData.eventData.data[index + 1]?.year !== event.year ||
                eventData.eventData.data[index + 1]?.month !== event.month
              }
            >
              <div className={styles.container_content_chronicle_day}>
                {EventItem(event, index)}
              </div>
            </StyledMonthListItem>
          </StyledYearListItem>
        );
      }
      return (
        <div
          key={event.eng_name}
          className={styles.container_content_chronicle}
        >
          {tempComponent}
        </div>
      );
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.container_content}>{mapEventData()}</div>
    </div>
  );
};

export default Chronicle;
