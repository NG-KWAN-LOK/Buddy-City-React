import React from "react";
import styles from "./style.module.scss";
import Logo from "../Logo";

import logo from "../../image/logo.png";

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__content}>
        <div className={styles.footer__content__weblogo}>
          <Logo className={styles.footer__content__weblogo__image} />
          <div className={styles.footer__content__weblogo__underText}>
            BUDDY CITY觀光服務官方網站
          </div>
        </div>
        <div className={styles.footer__content__box}>
          <div className={styles.footer__content__text__adress}>
            <p id='topFooterLang_fotterTitle'>BUDDY CITY旅遊局</p>
            <p id='topFooterLang_fotterAddress'>
              Buddy City大阪區本町通2號2樓2D01室
            </p>
          </div>
          <div className={styles.footer__content__links}>
            <a
              className={styles.footer__content__box__btn}
              href='bcctb-about-us/'
            >
              <div
                className={styles.footer__content__box__btn__text}
                id='topFooterLang_fotterAbout'
              >
                BUDDY CITY旅遊局紹介
              </div>
            </a>
            <a
              className={styles.footer__content__box__btn}
              href='https://buddycityinfo.sgngs.com/page/tnc.html'
            >
              <div
                className={styles.footer__content__box__btn__text}
                id='topFooterLang_fotterTNC'
              >
                服務條款
              </div>
            </a>
            <a
              className={styles.footer__content__box__btn}
              href='https://buddycityinfo.sgngs.com/map.html'
            >
              <div
                className={styles.footer__content__box__btn__text}
                id='topFooterLang_fotterDynmap'
              >
                Dynmap
              </div>
            </a>
          </div>
          <div
            className={styles.footer__content__box__copyright}
            id='topFooterLang_fotterCopyright'
          >
            ©BUDDY CITY CONVENTION & TOURISM BUREAU
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
