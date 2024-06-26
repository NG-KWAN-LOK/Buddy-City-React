import React, { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.scss";
import { useTranslation } from "react-i18next";

import ThemeSwitcher from "../../ThemeSwitcher";
import useAuth from "../../../hoc/AuthProvider";
interface NavBarProps {
  isNavBarDisplay: boolean;
  setMobileNavOff: () => void;
}
const NavBar: React.FC<NavBarProps> = ({
  isNavBarDisplay,
  setMobileNavOff,
}) => {
  const { userRole, logoutGoogle } = useAuth();
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    localStorage.setItem("language", lng);
    i18n.changeLanguage(lng);
  };
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
          <Link
            className={styles.PhoneTop__mainnav__container__col__a}
            to='/'
            onClick={setMobileNavOff}
          >
            <div className={styles.PhoneTop__mainnav__container__col__a__menu}>
              <i
                aria-hidden='true'
                className={styles["ion-android-arrow-dropdown"]}
              ></i>
              <span id='topFooterLang_phoneHome'>
                {t("topFooterLang_topHome")}
              </span>
            </div>
          </Link>
          <Link
            className={styles.PhoneTop__mainnav__container__col__a}
            to='/page/discover'
            onClick={setMobileNavOff}
          >
            <div className={styles.PhoneTop__mainnav__container__col__a__menu}>
              <i
                aria-hidden='true'
                className={styles["ion-android-arrow-dropdown"]}
              ></i>
              <span id='discover_row_title_discover'>
                {t("discover_row_title_discover")}
              </span>
            </div>
          </Link>
          <a
            className={styles.PhoneTop__mainnav__container__col__a}
            href='/online-map'
            target='_blank'
            onClick={setMobileNavOff}
          >
            <div className={styles.PhoneTop__mainnav__container__col__a__menu}>
              <i
                aria-hidden='true'
                className={styles["ion-android-arrow-dropdown"]}
              ></i>
              <span id='topFooterLang_phoneOnlineMap'>
                {t("topFooterLang_topOnlineMap")}
              </span>
            </div>
          </a>
          <a
            className={styles.PhoneTop__mainnav__container__col__a}
            href={`${process.env.REACT_APP_DYNMAP_URL}`}
            target='_blank'
            onClick={setMobileNavOff}
          >
            <div className={styles.PhoneTop__mainnav__container__col__a__menu}>
              <i
                aria-hidden='true'
                className={styles["ion-android-arrow-dropdown"]}
              ></i>
              <span id='topFooterLang_phoneOnlineMap'>
                {t("topFooterLang_topGPSMap")}
              </span>
            </div>
          </a>
          <Link
            className={styles.PhoneTop__mainnav__container__col__a}
            to='/railway-route-map'
            onClick={setMobileNavOff}
          >
            <div className={styles.PhoneTop__mainnav__container__col__a__menu}>
              <i
                aria-hidden='true'
                className={styles["ion-android-arrow-dropdown"]}
              ></i>
              <span id='topFooterLang_topRouteMap'>
                {t("topFooterLang_topRouteMap")}
              </span>
            </div>
          </Link>
          <Link
            className={styles.PhoneTop__mainnav__container__col__a}
            to='/building_list'
            onClick={setMobileNavOff}
          >
            <div className={styles.PhoneTop__mainnav__container__col__a__menu}>
              <i
                aria-hidden='true'
                className={styles["ion-android-arrow-dropdown"]}
              ></i>
              <span id='topFooterLang_phoneBulidingList'>
                {t("topFooterLang_topBulidingList")}
              </span>
            </div>
          </Link>
          <Link
            className={styles.PhoneTop__mainnav__container__col__a}
            to='/resident'
            onClick={setMobileNavOff}
          >
            <div
              className={styles.PhoneTop__mainnav__container__col__a__menu}
              onClick={setMobileNavOff}
            >
              <i
                aria-hidden='true'
                className={styles["ion-android-arrow-dropdown"]}
              ></i>
              <span id='topFooterLang_phoneResidentList'>
                {t("topFooterLang_topResidentList")}
              </span>
            </div>
          </Link>
          <Link
            className={styles.PhoneTop__mainnav__container__col__a}
            to='/bcctb-about-us'
            onClick={setMobileNavOff}
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
              onClick={() => {
                changeLanguage("zh");
              }}
            >
              正體中文
            </div>
          </div>
          <div className={styles.PhoneTop__mainnav__container__col__a}>
            <div
              className={styles.PhoneTop__mainnav__container__col__a__language}
              onClick={() => {
                changeLanguage("en");
              }}
            >
              ENGLISH
            </div>
          </div>
          <div className={styles.PhoneTop__mainnav__container__col__a}>
            <div
              className={styles.PhoneTop__mainnav__container__col__a__language}
              onClick={() => {
                changeLanguage("jp");
              }}
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
              {t("topFooterLang_topDarkMode")}
            </div>
            <ThemeSwitcher />
          </div>
          {userRole && (
            <div className={styles.PhoneTop__mainnav__container__col__a}>
              <div
                className={
                  styles.PhoneTop__mainnav__container__col__a__language
                }
                onClick={logoutGoogle}
              >
                登出管理員
              </div>
            </div>
          )}
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
