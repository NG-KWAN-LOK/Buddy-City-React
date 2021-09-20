import React, { Children } from "react";
import styles from "./style.module.scss";

import { useTranslation } from "react-i18next";

interface SmallIconPageMenuPageProps {
  pageTitle: string;
  pageText: string;
  children?: React.ReactNode;
}

const SmallIconPageMenuPage: React.FC<SmallIconPageMenuPageProps> = ({
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
        {children}
      </div>
    </div>
  );
};

export default SmallIconPageMenuPage;
