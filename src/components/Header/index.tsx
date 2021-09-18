import React, { useState, useCallback, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.scss";
import { useTranslation } from "react-i18next";

import NavBar from "./NavBar";
import ThemeSwitcher from "../ThemeSwitcher";
import Logo from "../Logo";

const Header = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const displayNavTimeoutRef = useRef<any>();
  const [isNavBarDisplay, setIsNavBarDisplay] = useState(false);
  const [isHeaderDisplay, setIsHeaderDisplay] = useState(true);
  const navToggleOn = useCallback(() => {
    clearTimeout(displayNavTimeoutRef.current);
    setIsNavBarDisplay(true);
  }, []);
  const navToggleOff = useCallback(() => setIsNavBarDisplay(false), []);
  const headerToggleOn = useCallback(() => setIsHeaderDisplay(true), []);
  const headerToggleOff = useCallback(() => setIsHeaderDisplay(false), []);

  useEffect(() => {
    const onScroll = () => {
      headerToggleOn();
      clearTimeout(displayNavTimeoutRef.current);
      if (window.pageYOffset !== 0) {
        displayNavTimeoutRef.current = setTimeout(headerToggleOff, 3000);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  console.log(isHeaderDisplay);
  return (
    <header
      className={
        isHeaderDisplay
          ? styles.headerContainer_open
          : styles.headerContainer_close
      }
    >
      <div className={styles.Top}>
        <div className={styles.Top__container}>
          <div className={styles.Top__nav_container__menu}>
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
                      <a
                        href='https://buddycityinfo.sgngs.com/map.html'
                        target='_blank'
                      >
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
                      <Link to='building_list/'>
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
          <div className={styles.Top__nav_container__language}>
            <div className={styles.Top__nav} id='nav'>
              <ul className={styles.Top__nav__list}>
                <li className={styles.Top__nav_col__left}>
                  <div className={styles.Top__nav__left_title}>Language</div>
                  <div className={styles.Top__nav__left_title_under}>
                    <div className={styles.Top__nav__left_subtitle}>
                      <div
                        className={styles.Top__nav__left_subtitle__text}
                        onClick={() => changeLanguage("zh-tw")}
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
          <Logo className={styles.PhoneTop__logo__image} />
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
