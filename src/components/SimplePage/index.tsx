import React from "react";
import styles from "./style.module.scss";

interface BCCTBSideMenuProps {
  contain?: React.ReactNode;
  sideMenu?: React.ReactNode;
}

const BCCTBSideMenu: React.FC<BCCTBSideMenuProps> = ({ contain, sideMenu }) => {
  return (
    <div className={styles.main__content}>
      <div className={styles.bcctb}>{contain}</div>
      <div className={styles.main__content__sideMenu}>{sideMenu}</div>
    </div>
  );
};

export default BCCTBSideMenu;
