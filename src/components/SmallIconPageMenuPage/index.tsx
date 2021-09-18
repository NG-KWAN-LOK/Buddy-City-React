import React from "react";
import styles from "./style.module.scss";

import { useTranslation } from "react-i18next";

import SmallIconRow from "./SmallIconRow";

interface SmallIconPageMenuPageProps {
  pageTitle: string;
  pageText: string;
  rowData: any;
}

const SmallIconPageMenuPage: React.FC<SmallIconPageMenuPageProps> = ({
  pageTitle,
  pageText,
  rowData,
}) => {
  const { t } = useTranslation();
  return (
    <div className={styles.main}>
      <div className={styles.discover}>
        <div className={styles.discover__title__content}>
          <div className={styles.discover__title} id='discover_title_discover'>
            {t(pageTitle)}
          </div>
          <div className={styles.discover__text} id='discover_text_discover'>
            {t(pageText)}
          </div>
        </div>
        {rowData.map((data, index) => {
          return (
            <SmallIconRow
              key={index}
              rowTitle={data.rowTitle}
              rowIconData={data.rowIconData}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SmallIconPageMenuPage;
