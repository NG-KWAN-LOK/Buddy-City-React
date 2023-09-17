import React from "react";
import styles from "./style.module.scss";

interface ImagePopUpProps {
  src: string;
}

const ImagePopUp: React.FC<ImagePopUpProps> = ({ src }) => {
  const handleImageOnClick = () => {
    window.open(src, "_blank");
  };
  return (
    <div className={styles.imagePopUpLayer__container__data}>
      <img
        src={src}
        className={styles.imagePopUpLayer__container__img}
        onClick={handleImageOnClick}
      />
    </div>
  );
};

export default ImagePopUp;
