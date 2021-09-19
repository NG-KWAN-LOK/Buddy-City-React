import React from "react";
import styles from "./style.module.scss";

interface StaticBigBannerProps {
  src: string;
}

const StaticBigBanner: React.FC<StaticBigBannerProps> = ({ src }) => {
  return (
    <div className={styles.main__banner}>
      <img className={styles.main__banner__img} src={src} />
    </div>
  );
};

export default StaticBigBanner;
