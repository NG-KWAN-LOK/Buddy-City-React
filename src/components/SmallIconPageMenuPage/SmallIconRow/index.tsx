import React from "react";
import styles from "./style.module.scss";

import { useTranslation } from "react-i18next";

import { IRowIconData } from "../../../pageData/discoveryRowData";

import HyperContentCard from "../HyperContentCard";
interface SmallIconRowProps {
  rowTitle: string;
  rowIconData: IRowIconData[];
}

const SmallIconRow: React.FC<SmallIconRowProps> = ({
  rowTitle,
  rowIconData,
}) => {
  const { t } = useTranslation();
  return (
    <div className={styles.discover__box}>
      <div className={styles.discover__row}>
        <div
          className={styles.discover__subtitle}
          id='discover_subtitle_discover'
        >
          {t(rowTitle)}
        </div>
      </div>
      <div className={styles.discover__content}>
        {rowIconData.map((data, index) => {
          return (
            <HyperContentCard
              key={index}
              type={data.type}
              to={data.to}
              src={data.src}
              atoppadding={t(data.atoppadding)}
              apadding={t(data.apadding)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SmallIconRow;
