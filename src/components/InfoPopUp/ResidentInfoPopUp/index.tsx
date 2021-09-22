import React, { useEffect } from "react";
import styles from "./style.module.scss";
import { useTranslation } from "react-i18next";
import findTitle from "../../../utils/titleName";
import { ICharacter } from "../../../containers/Resident/interface";

interface ResidentInfoPopUpProps {
  character: ICharacter;
}

interface ITranslatedInfo {
  nickname: string | null;
  address: string | null;
  project: string | null;
}

const ResidentInfoPopUp: React.FC<ResidentInfoPopUpProps> = ({ character }) => {
  const { t, i18n } = useTranslation();
  const language = i18n.language;
  let translatedInfo: ITranslatedInfo = {
    nickname: null,
    address: null,
    project: null,
  };
  if (character != null) {
    if (language === "zh") {
      translatedInfo = {
        nickname: character.nickname_chi,
        address: character.address_CHI,
        project: character.project_CHI,
      };
    } else if (language === "en") {
      translatedInfo = {
        nickname: character.nickname_eng,
        address: character.address_ENG,
        project: character.project_ENG,
      };
    } else if (language === "jp") {
      translatedInfo = {
        nickname: character.nickname_jp,
        address: character.adress_JP,
        project: character.project_JP,
      };
    }
  }
  useEffect(() => {
    document.title = findTitle([
      character.user_name,
      t("ResidentList_title"),
      t("title"),
    ]);
  }, []);
  return (
    <div className={styles.residentPopUpLayer__container__data}>
      <div className={styles.residentPopUpLayer__container__data__img}>
        <img
          src={`https://ng-kwan-lok.github.io/BuddyCityWeb/resident/image/${character.face}1.png`}
          className={styles.data_face_img}
          id='data_face_img'
        />
      </div>
      <div className={styles.residentPopUpLayer__container__data__table}>
        <table className={styles.data__table}>
          <tbody>
            <tr>
              <td
                className={styles.data__table__datatitle}
                id='residentPopUpLayer_data_table_username'
              >
                {t("residentPopUpLayer_data_table_username")}
              </td>
              <td id='data_username' className={styles.data__table__datainfo}>
                {character.user_name}
              </td>
            </tr>
            <tr>
              <td
                className={styles.data__table__datatitle}
                id='residentPopUpLayer_data_table_nickname'
              >
                {t("residentPopUpLayer_data_table_nickname")}
              </td>
              <td className={styles.data__table__datainfo} id='data_nickname'>
                {translatedInfo.nickname}
              </td>
            </tr>
            <tr>
              <td
                className={styles.data__table__datatitle}
                id='residentPopUpLayer_data_table_participate_year'
              >
                {t("residentPopUpLayer_data_table_participate_year")}
              </td>
              <td
                className={styles.data__table__datainfo}
                id='data_participate_year'
              >
                {character.participate_year}
              </td>
            </tr>
            <tr>
              <td
                className={styles.data__table__datatitle}
                id='residentPopUpLayer_data_table_address'
              >
                {t("residentPopUpLayer_data_table_address")}
              </td>
              <td className={styles.data__table__datainfo} id='data_address'>
                {translatedInfo.address}
              </td>
            </tr>
            <tr className={styles.data_project_row}>
              <td
                className={styles.data__table__datatitle}
                id='residentPopUpLayer_data_table_project'
              >
                {t("residentPopUpLayer_data_table_project")}
              </td>
              <td className={styles.data__table__datainfo} id='data_project'>
                {translatedInfo.project}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResidentInfoPopUp;
