import React, { useState, useCallback } from "react";
import { useLocation } from "react-router-dom";

import styles from "./style.module.scss";

import MediumIcon from "../MediumIcon";

import { useTranslation } from "react-i18next";
import InfoPopUp from "../InfoPopUp";
import ImagePopUp from "../InfoPopUp/ImagePopUp";
import { useQuery } from "../../hook/useQuery";

interface IImgData {
  image1: string;
  image2: string;
  title: string;
  title2: string | null;
}

interface ProjectDisplayCornerProps {
  pageTitle: string;
  imgData: IImgData[];
}

const ProjectDisplayCorner: React.FC<ProjectDisplayCornerProps> = ({
  pageTitle,
  imgData,
}) => {
  const { t } = useTranslation();
  const [isPopUpOn, setPopUpOn] = useState(false);
  const PopUpToggleOn = useCallback(() => setPopUpOn(true), []);
  const PopUpToggleOff = useCallback(() => setPopUpOn(false), []);
  const queryString = useQuery();

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
                to={`/?reality-project-index=${index}`}
                setPopUpOn={PopUpToggleOn}
              />
            );
          })}
        </div>
      </div>
      {isPopUpOn && (
        <InfoPopUp title='' setPopUpOff={PopUpToggleOff} to='/'>
          {queryString && (
            <ImagePopUp
              src={
                imgData[queryString.get("reality-project-index") ?? 0].image2
              }
            />
          )}
        </InfoPopUp>
      )}
    </div>
  );
};

export default ProjectDisplayCorner;
