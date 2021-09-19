import React from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.scss";

interface PlayerIconProps {
  setPopUpOn: () => void;
  character: any;
}

const PlayerIcon: React.FC<PlayerIconProps> = ({ character, setPopUpOn }) => {
  return (
    <Link to={`/resident/${character.index}`}>
      <div
        target='_blank'
        className={styles.resident__box}
        id={character.district_CHI}
        onClick={setPopUpOn}
      >
        <div
          className={styles.resident__box__character}
          id={character.user_name}
        >
          <img
            className={styles.resident__box__character__image}
            src={`https://ng-kwan-lok.github.io/BuddyCityWeb/resident/image/${character.face}.png`}
          />
          <div className={styles.resident__box__character__title}>
            {character.user_name}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PlayerIcon;
