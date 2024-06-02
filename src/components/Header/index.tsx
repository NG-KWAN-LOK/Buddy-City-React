import React, { useState, useCallback, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.scss";
import { useTranslation } from "react-i18next";

import NavBar from "./NavBar";
import ThemeSwitcher from "../ThemeSwitcher";
import Logo from "../Logo";
import useAuth from "../../hoc/AuthProvider";

const Header = () => {
  const { userRole, logoutGoogle } = useAuth();
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    localStorage.setItem("language", lng);
    i18n.changeLanguage(lng);
  };
  const displayNavTimeoutRef = useRef<any>();
  const [isNavBarDisplay, setIsNavBarDisplay] = useState(false);
  const [isHeaderDisplay, setIsHeaderDisplay] = useState(true);
  const [headerClass, setHeaderClass] = useState(styles.headerContainer_open);
  const navToggleOn = useCallback(() => {
    clearTimeout(displayNavTimeoutRef.current);
    setIsNavBarDisplay(true);
  }, []);
  const navToggleOff = useCallback(() => setIsNavBarDisplay(false), []);
  const headerToggleOn = useCallback(() => setIsHeaderDisplay(true), []);
  const headerToggleOff = useCallback(() => setIsHeaderDisplay(false), []);

  const onScroll = useCallback(() => {
    headerToggleOn();
    clearTimeout(displayNavTimeoutRef.current);
    if (window.pageYOffset !== 0) {
      displayNavTimeoutRef.current = setTimeout(headerToggleOff, 3000);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    (document.querySelector("#header") as Element).addEventListener(
      "mouseover",
      onScroll
    );
    return () => {
      window.removeEventListener("scroll", onScroll);
      (document.querySelector("#header") as Element).removeEventListener(
        "mouseover",
        onScroll
      );
    };
  }, [window, onScroll]);

  const handleHeaderContainerClass = (onHover) => {
    if ((onHover || isNavBarDisplay) && isHeaderDisplay) {
      setHeaderClass(styles.headerContainer_open_nav);
    } else if (isHeaderDisplay) {
      setHeaderClass(styles.headerContainer_open);
    } else {
      setHeaderClass(styles.headerContainer_close);
    }
  };

  useEffect(() => {
    handleHeaderContainerClass(false);
  }, [isHeaderDisplay, isNavBarDisplay]);

  return (
    <header className={headerClass} id='header'>
      <div className={styles.Top}>
        <div className={styles.Top__container}>
          <div
            className={styles.Top__nav_container__menu}
            onMouseOver={() => handleHeaderContainerClass(true)}
            onMouseOut={() => handleHeaderContainerClass(false)}
          >
            <div className={styles.Top__nav} id='nav'>
              <ul className={styles.Top__nav__list}>
                <li className={styles.Top__nav_col__left}>
                  <div className={styles.Top__nav__left_title}>
                    <div className={styles.Top__nav_col__burger__icon}>
                      <div className={styles.bar1}></div>
                      <div className={styles.bar2}></div>
                      <div className={styles.bar3}></div>
                    </div>
                    MENU
                  </div>
                  <div className={styles.Top__nav__left_title_under}>
                    <div className={styles.Top__nav__left_subtitle}>
                      <Link to='/'>
                        <i
                          aria-hidden='true'
                          className={styles["ion-android-arrow-dropdown"]}
                        ></i>
                        <span id='topFooterLang_topHome'>
                          {t("topFooterLang_topHome")}
                        </span>
                      </Link>
                    </div>
                    <div className={styles.Top__nav__left_subtitle}>
                      <Link to='/page/discover'>
                        <i
                          aria-hidden='true'
                          className={styles["ion-android-arrow-dropdown"]}
                        ></i>
                        <span id='discover_row_title_discover'>
                          {t("discover_row_title_discover")}
                        </span>
                      </Link>
                    </div>
                    <div className={styles.Top__nav__left_subtitle}>
                      <a href='/online-map' target='_blank'>
                        <i
                          aria-hidden='true'
                          className={styles["ion-android-arrow-dropdown"]}
                        ></i>
                        <span id='topFooterLang_topOnlineMap'>
                          {t("topFooterLang_topOnlineMap")}
                        </span>
                      </a>
                    </div>
                    <div className={styles.Top__nav__left_subtitle}>
                      <a
                        href={`${process.env.REACT_APP_DYNMAP_URL}`}
                        target='_blank'
                      >
                        <i
                          aria-hidden='true'
                          className={styles["ion-android-arrow-dropdown"]}
                        ></i>
                        <span id='topFooterLang_topOnlineMap'>
                          {t("topFooterLang_topGPSMap")}
                        </span>
                      </a>
                    </div>
                    <div className={styles.Top__nav__left_subtitle}>
                      <Link to='/railway-route-map'>
                        <i
                          aria-hidden='true'
                          className={styles["ion-android-arrow-dropdown"]}
                        ></i>
                        <span id='topFooterLang_topRouteMap'>
                          {t("topFooterLang_topRouteMap")}
                        </span>
                      </Link>
                    </div>
                    <div className={styles.Top__nav__left_subtitle}>
                      <Link to='/building_list'>
                        <i
                          aria-hidden='true'
                          className={styles["ion-android-arrow-dropdown"]}
                        ></i>
                        <span id='topFooterLang_topBulidingList'>
                          {t("topFooterLang_topBulidingList")}
                        </span>
                      </Link>
                    </div>
                    <div className={styles.Top__nav__left_subtitle}>
                      <Link to='/resident'>
                        <i
                          aria-hidden='true'
                          className={styles["ion-android-arrow-dropdown"]}
                        ></i>
                        <span id='topFooterLang_topResidentList'>
                          {t("topFooterLang_topResidentList")}
                        </span>
                      </Link>
                    </div>
                  </div>
                </li>
              </ul>
              <ul className={styles.Top__nav__list}>
                <li className={styles.Top__nav_col__right}>
                  <Link
                    className={styles.Top__nav__right_title}
                    to='/bcctb-about-us'
                  >
                    BCCTB
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.Top__logo}>
            <Link to='/'>
              <Logo />
            </Link>
          </div>
          <div
            className={styles.Top__nav_container__language}
            onMouseOver={() => handleHeaderContainerClass(true)}
            onMouseOut={() => handleHeaderContainerClass(false)}
          >
            <div className={styles.Top__nav} id='nav'>
              <ul className={styles.Top__nav__list}>
                <li className={styles.Top__nav_col__left}>
                  <div className={styles.Top__nav__left_title}>Language</div>
                  <div className={styles.Top__nav__left_title_under}>
                    <div className={styles.Top__nav__left_subtitle}>
                      <div
                        className={styles.Top__nav__left_subtitle__text}
                        onClick={() => changeLanguage("zh")}
                      >
                        正體中文
                      </div>
                    </div>
                    <div className={styles.Top__nav__left_subtitle}>
                      <div
                        className={styles.Top__nav__left_subtitle__text}
                        onClick={() => changeLanguage("en")}
                      >
                        English
                      </div>
                    </div>
                    <div className={styles.Top__nav__left_subtitle}>
                      <div
                        className={styles.Top__nav__left_subtitle__text}
                        onClick={() => changeLanguage("jp")}
                      >
                        日本語
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <ul className={styles.Top__nav__list}>
                <li className={styles.Top__nav_col__right}>
                  <div className={styles.Top__nav__right_title}>
                    <div className={styles.Top__nav_col__right__burger__icon}>
                      <div className={styles.bar1}></div>
                      <div className={styles.bar2}></div>
                      <div className={styles.bar3}></div>
                    </div>
                  </div>
                  <div className={styles.Top__nav__right_title_under}>
                    <div className={styles.Top__nav__right_subtitle}>
                      <div
                        className={styles.Top__nav__right_subtitle__text}
                        id='topFooterLang_topDarkMode'
                      >
                        {t("topFooterLang_topDarkMode")}
                      </div>
                      <ThemeSwitcher />
                    </div>
                    {userRole && (
                      <div
                        className={styles.Top__nav__right_subtitle_a}
                        onClick={logoutGoogle}
                      >
                        <div className={styles.Top__nav__right_subtitle_a_text}>
                          登出管理員
                        </div>
                      </div>
                    )}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.PhoneTop}>
        <div className={styles.PhoneTop__mainnav}>
          <div className={styles.PhoneTop__mainnav__icon} onClick={navToggleOn}>
            <div className={styles.bar1}></div>
            <div className={styles.bar2}></div>
            <div className={styles.bar3}></div>
          </div>
        </div>
        <div className={styles.PhoneTop__logo}>
          <Link to='/'>
            <Logo className={styles.PhoneTop__logo__image} />
          </Link>
        </div>
      </div>
      <NavBar
        isNavBarDisplay={isNavBarDisplay}
        setMobileNavOff={() => navToggleOff()}
      />
    </header>
  );
};

export default Header;
