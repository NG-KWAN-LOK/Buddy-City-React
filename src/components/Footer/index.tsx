import React from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.scss";
import Logo from "../Logo";

import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.footer}>
      <div className={styles.footer__content}>
        <div className={styles.footer__content__weblogo}>
          <Logo className={styles.footer__content__weblogo__image} />
          <div className={styles.footer__content__weblogo__underText}>
            {t("footer_content_weblogo_underText")}
          </div>
        </div>
        <div className={styles.footer__content__box}>
          <div className={styles.footer__content__text__adress}>
            <p id='topFooterLang_fotterTitle'>
              {t("topFooterLang_fotterTitle")}
            </p>
            <p id='topFooterLang_fotterAddress'>
              {t("topFooterLang_fotterAddress")}
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
                {t("topFooterLang_fotterAbout")}
              </div>
            </a>
            <Link className={styles.footer__content__box__btn} to='/tnc'>
              <div
                className={styles.footer__content__box__btn__text}
                id='topFooterLang_fotterTNC'
              >
                {t("topFooterLang_fotterTNC")}
              </div>
            </Link>
            <a
              className={styles.footer__content__box__btn}
              href={`${process.env.DYNMAP_URL}/map.html`}
            >
              <div
                className={styles.footer__content__box__btn__text}
                id='topFooterLang_fotterDynmap'
              >
                {t("topFooterLang_fotterDynmap")}
              </div>
            </a>
          </div>
          <div
            className={styles.footer__content__box__copyright}
            id='topFooterLang_fotterCopyright'
          >
            {t("topFooterLang_fotterCopyright")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
