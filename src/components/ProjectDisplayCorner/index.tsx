import React from "react";
import styles from "./style.module.scss";

import MediumIcon from "../MediumIcon";

import { useTranslation } from "react-i18next";

interface ProjectDisplayCornerProps {
  pageTitle: string;
  imgData: any;
}

const ProjectDisplayCorner: React.FC<ProjectDisplayCornerProps> = ({
  pageTitle,
  imgData,
}) => {
  const { t } = useTranslation();
  return (
    <div className={styles.reality_project}>
      <div className={styles.reality_project__box}>
        <div
          className={styles.reality_project__title}
          id='reality_project_title'
        >
          {t(pageTitle)}
        </div>
        <div className={styles.reality_project__image}>
          {imgData.map((data, index) => {
            return (
              <MediumIcon
                key={index}
                title={`${t(data.title)}${
                  data.title2 != null ? "\n" + t(data.title2) : ""
                }`}
                imgSrc={data.image1}
                topText={t("reality_project_zoom_in")}
                to='/'
                setPopUpOn={() => {}}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectDisplayCorner;
