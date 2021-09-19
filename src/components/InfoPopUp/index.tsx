import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import styles from "./style.module.scss";

import { useTranslation } from "react-i18next";

interface InfoPopUpProps {
  setPopUpOff: () => void;
  title: string;
  children?: React.ReactNode;
}

const InfoPopUp: React.FC<InfoPopUpProps> = ({
  title,
  setPopUpOff,
  children,
}) => {
  const { t } = useTranslation();
  const history = useHistory();
  const { pathname } = useLocation();
  const firstPathName = pathname.split("/");
  return (
    <div className={styles.residentPopUpLayer} id='residentPopUpLayer'>
      <div className={styles.residentPopUpLayer__container}>
        <div
          className={styles.residentPopUpLayer_closeLayer}
          onClick={() => {
            history.push("/" + firstPathName[1]);
            setPopUpOff();
          }}
        ></div>
        <div className={styles.data_username_title} id='data_username_title'>
          {title === "error" ? "" : title}
        </div>
        <div
          className={styles.residentPopUpLayer__container__main}
          id='residentPopUpLayer__container__main'
        >
          {title === "error" ? (
            <div className={styles.residentPopUpLayer__container__error}>
              <div
                className={styles.residentPopUpLayer__container__error__title}
              >
                <p id='residentPopUpLayer_container_error_title_top'>
                  {t("residentPopUpLayer_container_error_title_top")}
                </p>
                <p id='residentPopUpLayer_container_error_title_bottom'>
                  {t("residentPopUpLayer_container_error_title_bottom")}
                </p>
              </div>
            </div>
          ) : (
            children
          )}
        </div>
      </div>
    </div>
  );
};

export default InfoPopUp;
