import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./style.module.scss";

import { useTranslation } from "react-i18next";

interface InfoPopUpProps {
  setPopUpOff: () => void;
  title?: string;
  children?: React.ReactNode;
  to: string;
}

const InfoPopUp: React.FC<InfoPopUpProps> = ({
  title,
  setPopUpOff,
  children,
  to,
}) => {
  const { t } = useTranslation();
  const history = useHistory();
  return (
    <div
      className={styles.residentPopUpLayer}
      id='residentPopUpLayer'
      onClick={setPopUpOff}
    >
      <div
        className={styles.residentPopUpLayer__container}
        onClick={(e: React.MouseEvent) => {
          e.stopPropagation();
        }}
      >
        <div
          className={styles.residentPopUpLayer_closeLayer}
          onClick={() => {
            history.push(to);
            setPopUpOff();
          }}
        ></div>
        {title && (
          <div className={styles.data_username_title} id='data_username_title'>
            {title === "error" ? "" : title}
          </div>
        )}
        <div
          className={styles.residentPopUpLayer__container__main}
          id='residentPopUpLayer__container__main'
        >
          {title && title === "error" ? (
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
