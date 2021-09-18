import React from "react";
import styles from "./style.module.scss";

import ProjectImgBox from "./projectImgBox";

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
              <ProjectImgBox
                key={index}
                title={t(data.title)}
                title2={data.title2 == null ? null : t(data.title2)}
                image1={data.image1}
                image2={data.image2}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectDisplayCorner;
