import React from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.scss";

import { useTranslation } from "react-i18next";

interface SideMenuButtonProps {
  buttonData: any;
}

const SideMenuButton: React.FC<SideMenuButtonProps> = ({ buttonData }) => {
  console.log(buttonData);
  const { t } = useTranslation();
  const buttonContain = () => {
    return (
      <div className={styles.main__content__sideMenu__content__btn}>
        <i
          aria-hidden='true'
          className={`${styles.main__content__sideMenu__content__btn__icon} ${
            styles[buttonData.icon]
          }`}
        ></i>
        <div
          className={styles.main__content__sideMenu__content__btn__title}
          id='main__content__sideMenu__content__btn__title__admin'
        >
          {t(buttonData.title)}
        </div>
      </div>
    );
  };

  return (
    <>
      {buttonData.type === "external" ? (
        <a href={buttonData.to} target='__blank'>
          {buttonContain()}
        </a>
      ) : (
        <Link to={buttonData.to}>{buttonContain()}</Link>
      )}
    </>
  );
};

export default SideMenuButton;
