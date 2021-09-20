import React from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.scss";

interface MediumIconProps {
  setPopUpOn: () => void;
  title: string;
  id?: string;
  topText: string;
  imgSrc: string;
  to: string;
}

const MediumIcon: React.FC<MediumIconProps> = ({
  title,
  id,
  imgSrc,
  topText,
  to,
  setPopUpOn,
}) => {
  return (
    <Link to={to} className={styles.district__image__box} onClick={setPopUpOn}>
      <div className={styles.district__image__box__content}>
        <img className={styles.district__image__box__image} src={imgSrc} />
        <div
          className={styles.district__image__box__toptext}
          id='district_image_box_toptext'
        >
          {topText}
        </div>
        <div className={styles.district__image__box__shadow}></div>
        <div className={styles.district__image__box__text}>{title}</div>
      </div>
    </Link>
  );
};

export default MediumIcon;
