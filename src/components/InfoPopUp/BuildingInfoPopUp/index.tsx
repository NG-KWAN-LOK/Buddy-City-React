import React, { useState } from "react";
import styles from "./style.module.scss";
import { useTranslation } from "react-i18next";
import { IBuilding } from "../../../containers/BuildingList/interface";
import useAuth from "../../../hoc/AuthProvider";
import AdminBuildingInfoPopUp from "./AdminBuildingInfoPopUp";
import SwiperImageDisplay from "../../Swiper/SwiperImageDisplay";
import { Button } from "@mui/material";

interface BuildingInfoPopUpProps {
  buildingData: IBuilding;
  districtid: string;
  buildingid: string;
}

interface ITranslatedInfo {
  adress: string | null;
  district: string | null;
  name: string | null;
  inside: string | null;
  utilization: string | null;
}

const BuildingInfoPopUp: React.FC<BuildingInfoPopUpProps> = ({
  buildingData,
  districtid,
  buildingid,
}) => {
  const { userRole } = useAuth();
  const { t, i18n } = useTranslation();
  const [isEdit, setIsEdit] = useState(false);
  const language = i18n.language;
  let translatedInfo: ITranslatedInfo = {
    adress: null,
    district: null,
    name: null,
    inside: null,
    utilization: null,
  };
  if (buildingData != null) {
    if (language === "zh") {
      translatedInfo = {
        adress: buildingData.adress_chi,
        district: buildingData.district_chi,
        name: buildingData.name_chi,
        inside: buildingData.內裝,
        utilization: buildingData.用途,
      };
    } else if (language === "en") {
      translatedInfo = {
        adress: buildingData.adress_eng,
        district: buildingData.district_eng,
        name: buildingData.name_eng,
        inside: buildingData.inside,
        utilization: buildingData.Utilization,
      };
    } else if (language === "jp") {
      translatedInfo = {
        adress: buildingData.adress_jp,
        district: buildingData.district_jp,
        name: buildingData.name_jp,
        inside: buildingData.インテリア,
        utilization: buildingData.用途_jp,
      };
    }
  }

  return (
    <div className={styles.container}>
      {userRole && (
        <Button
          variant='contained'
          size='large'
          color='primary'
          onClick={() => setIsEdit((prev) => !prev)}
          sx={{
            position: "absolute",
            top: -60,
            left: 0,
            fontSize: 17,
          }}
        >
          {isEdit ? "離開編輯" : "編輯建築物"}
        </Button>
      )}
      {userRole && isEdit ? (
        <AdminBuildingInfoPopUp buildingData={buildingData} />
      ) : (
        <div>
          <SwiperImageDisplay
            districtid={districtid}
            buildingid={buildingid}
            isDecoration={buildingData.inside === "Yes"}
          />
          <table className={styles.data__table}>
            <tbody>
              <tr>
                <td
                  className={styles.data__table__datatitle}
                  id='buildingPopUpLayer_data_table_buildingName'
                >
                  {t("buildingPopUpLayer_data_table_buildingName")}
                </td>
                <td
                  id='data_buildingName'
                  className={styles.data__table__datainfo}
                >
                  {translatedInfo.name}
                </td>
              </tr>
              <tr>
                <td
                  className={styles.data__table__datatitle}
                  id='buildingPopUpLayer_data_table_district'
                >
                  {t("buildingPopUpLayer_data_table_district")}
                </td>
                <td id='data_district' className={styles.data__table__datainfo}>
                  {translatedInfo.district}
                </td>
              </tr>
              <tr>
                <td
                  className={styles.data__table__datatitle}
                  id='buildingPopUpLayer_data_table_adress'
                >
                  {t("buildingPopUpLayer_data_table_adress")}
                </td>
                <td
                  className={styles.data__table__datainfo_position}
                  id='data_adress'
                  onClick={() => {
                    navigator.clipboard.writeText(
                      `/tp ${buildingData.x} ${buildingData.y} ${buildingData.z}`
                    );
                  }}
                >
                  {translatedInfo.adress}
                  <pre
                    className={styles.data__table__datainfo_position_tooltip}
                  >
                    {`${t("const_coordinate")}: x: ${buildingData.x}, y: ${
                      buildingData.y
                    }, z: ${buildingData.z}\n${t("const_copy_tp_command")}`}
                  </pre>
                </td>
              </tr>
              <tr>
                <td
                  className={styles.data__table__datatitle}
                  id='buildingPopUpLayer_data_table_Utilization'
                >
                  {t("buildingPopUpLayer_data_table_Utilization")}
                </td>
                <td
                  className={styles.data__table__datainfo}
                  id='data_Utilization'
                >
                  {translatedInfo.utilization}
                </td>
              </tr>
              <tr>
                <td
                  className={styles.data__table__datatitle}
                  id='buildingPopUpLayer_data_table_inside'
                >
                  {t("buildingPopUpLayer_data_table_inside")}
                </td>
                <td className={styles.data__table__datainfo} id='data_inside'>
                  {translatedInfo.inside}
                </td>
              </tr>
            </tbody>
          </table>
          <div id='address_map' className={styles.address__map}>
            <div className={styles.address__map__title}>MAP</div>
            <iframe
              id='data_address_map'
              className={styles.address__map__iframe}
              width='100%'
              height='440px'
              src={`${process.env.REACT_APP_DYNMAP_URL}?worldname=world&mapname=flat&zoom=6&x=${buildingData.x}&y=${buildingData.y}&z=${buildingData.z}`}
            ></iframe>
            {">"}
            <a
              className={styles.address__map__link}
              id='data_address_link'
              target='blank'
              href={`${process.env.REACT_APP_DYNMAP_URL}?worldname=world&mapname=flat&zoom=6&x=${buildingData.x}&y=${buildingData.y}&z=${buildingData.z}`}
            >
              網上地圖
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default BuildingInfoPopUp;
