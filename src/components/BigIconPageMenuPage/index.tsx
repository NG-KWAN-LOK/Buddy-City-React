import React from "react";
import styles from "./style.module.scss";

import { useTranslation } from "react-i18next";

interface BigIconPageMenuPageProps {
  pageTitle: string;
  pageText: string;
  children?: React.ReactNode;
}

const BigIconPageMenuPage: React.FC<BigIconPageMenuPageProps> = ({
  pageTitle,
  pageText,
  children,
}) => {
  const { t } = useTranslation();
  return (
    <div className={styles.main}>
      <div className={styles.discover}>
        <div className={styles.discover__title__content}>
          <div className={styles.discover__title} id={pageTitle}>
            {t(pageTitle)}
          </div>
          <div className={styles.discover__text} id={pageText}>
            {t(pageText)}
          </div>
        </div>
        <div className={styles.discover__content}>{children}</div>
      </div>
    </div>
  );
};

export default BigIconPageMenuPage;
