import React from "react";
import styles from "./style.module.scss";

interface ProjectImgBoxProps {
  title: string;
  title2: string | null;
  image1: string;
  image2: string;
}

const ProjectImgBox: React.FC<ProjectImgBoxProps> = ({
  title,
  title2,
  image1,
  image2,
}) => {
  return (
    <div className={styles.reality_project__image__box}>
      <a href={image2} target='_blank'>
        <img
          className={styles.reality_project__image__box__image}
          src={image1}
        />

        {title2 == null ? (
          <div className={styles.reality_project__image__box__text}>
            {title}
          </div>
        ) : (
          <div className={styles.reality_project__image__box__text}>
            <p>{title}</p>
            <p>{title2}</p>
          </div>
        )}
      </a>
      <div className={styles.reality_project__image__box__shadow}></div>
    </div>
  );
};

export default ProjectImgBox;
