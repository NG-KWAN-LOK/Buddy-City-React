import React from "react";
import styles from "./style.module.scss";
import SideMenuButton from "./SideMenuButton";

import { useTranslation } from "react-i18next";

interface SideMenuProps {
  buttonData?: any;
}

const SideMenu: React.FC<SideMenuProps> = ({ buttonData }) => {
  const { t } = useTranslation();
  return (
    <>
      <div className={styles.main__content__sideMenu__content}>
        <div
          className={styles.main__content__sideMenu__content__title}
          id='main__content__sideMenu__content__title'
        >
          {t(buttonData.title)}
        </div>
        {buttonData.buttonData.map((data, index) => {
          return <SideMenuButton key={index} buttonData={data} />;
        })}
      </div>
    </>
  );
};

export default SideMenu;
