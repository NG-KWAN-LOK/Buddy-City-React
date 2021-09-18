import React, { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.scss";

import ThemeSwitcher from "../../ThemeSwitcher";
interface NavBarProps {
  isNavBarDisplay: boolean;
  setMobileNavOff: () => void;
}
const NavBar: React.FC<NavBarProps> = ({
  isNavBarDisplay,
  setMobileNavOff,
}) => {
  //console.log(setMobileNavOn);
  return (
    <nav
      className={
        isNavBarDisplay
          ? styles["PhoneTop__mainnav__container-open"]
          : styles.PhoneTop__mainnav__container
      }
    >
      <div className={styles.PhoneTop__mainnav__container__left}>
        <div className={styles.PhoneTop__mainnav__container__col}>
          <div className={styles.PhoneTop__mainnav__container__col__title}>
            MENU
          </div>
          <Link className={styles.PhoneTop__mainnav__container__col__a} to='/'>
            <div className={styles.PhoneTop__mainnav__container__col__a__menu}>
              <i
                aria-hidden='true'
                className={styles["ion-android-arrow-dropdown"]}
              ></i>
              <span id='topFooterLang_phoneHome'>回到主頁</span>
            </div>
          </Link>
          <a
            className={styles.PhoneTop__mainnav__container__col__a}
            href='https://buddycityinfo.sgngs.com/map.html'
            target='_blank'
          >
            <div className={styles.PhoneTop__mainnav__container__col__a__menu}>
              <i
                aria-hidden='true'
                className={styles["ion-android-arrow-dropdown"]}
              ></i>
              <span id='topFooterLang_phoneOnlineMap'>網上地圖</span>
            </div>
          </a>
          <Link
            className={styles.PhoneTop__mainnav__container__col__a}
            to='/building_list'
          >
            <div className={styles.PhoneTop__mainnav__container__col__a__menu}>
              <i
                aria-hidden='true'
                className={styles["ion-android-arrow-dropdown"]}
              ></i>
              <span id='topFooterLang_phoneBulidingList'>城市建築物名冊</span>
            </div>
          </Link>
          <Link
            className={styles.PhoneTop__mainnav__container__col__a}
            to='/resident'
          >
            <div className={styles.PhoneTop__mainnav__container__col__a__menu}>
              <i
                aria-hidden='true'
                className={styles["ion-android-arrow-dropdown"]}
              ></i>
              <span id='topFooterLang_phoneResidentList'>居民名冊</span>
            </div>
          </Link>
          <Link
            className={styles.PhoneTop__mainnav__container__col__a}
            to='/bcctb-about-us'
          >
            <div className={styles.PhoneTop__mainnav__container__col__a__menu}>
              BCCTB
            </div>
          </Link>
        </div>
        <div className={styles.PhoneTop__mainnav__container__col}>
          <div className={styles.PhoneTop__mainnav__container__col__title}>
            LANGUAGE
          </div>
          <div className={styles.PhoneTop__mainnav__container__col__a}>
            <div
              className={styles.PhoneTop__mainnav__container__col__a__language}
              onclick='SelectLang(1)'
            >
              正體中文
            </div>
          </div>
          <div className={styles.PhoneTop__mainnav__container__col__a}>
            <div
              className={styles.PhoneTop__mainnav__container__col__a__language}
              onclick='SelectLang(2)'
            >
              ENGLISH
            </div>
          </div>
          <div className={styles.PhoneTop__mainnav__container__col__a}>
            <div
              className={styles.PhoneTop__mainnav__container__col__a__language}
              onclick='SelectLang(3)'
            >
              日本語
            </div>
          </div>
        </div>
        <div className={styles.PhoneTop__mainnav__container__col}>
          <div
            className={styles.PhoneTop__mainnav__container__col__a__darkmode}
          >
            <div
              className={
                styles.PhoneTop__mainnav__container__col__a__darkmode__text
              }
              id='topFooterLang_phoneDarkMode'
            >
              夜間模式
            </div>
            <ThemeSwitcher />
          </div>
        </div>
      </div>
      <div
        className={styles.PhoneTop__mainnav__container__shadow}
        onClick={setMobileNavOff}
      ></div>
    </nav>
  );
};

export default NavBar;
