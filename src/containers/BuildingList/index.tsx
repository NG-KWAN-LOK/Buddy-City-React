import React, { useEffect, useState, useCallback } from "react";
import { useLocation, useParams } from "react-router-dom";
import styles from "./style.module.scss";
import { useTranslation } from "react-i18next";
import findTitle from "../../utils/titleName";

import banner from "../../image/building-list/001.jpg";

import StaticBigBanner from "../../components/StaticBigBanner";
import SmallIconPageMenuPage from "../../components/SmallIconPageMenuPage";

import { getAllDistrictList } from "../../utils/firebase";
import { onValue } from "firebase/database";
import InfoPopUp from "../../components/InfoPopUp";
import MediumIcon from "../../components/MediumIcon";
import BuildingListPopUp from "../../components/InfoPopUp/BuildingListPopUp";
import BuildingInfoPopUp from "../../components/InfoPopUp/BuildingInfoPopUp";

import { IBuilding } from "./interface";

interface IBuildingListParms {
  districtid: string;
  buildingid: string;
}

const BuildingList = () => {
  const { districtid, buildingid } = useParams<IBuildingListParms>();
  const { pathname } = useLocation();
  const pathNameSplitNumber = Object.keys(useParams()).length;
  const { t, i18n } = useTranslation();
  const language = i18n.language;
  const [buildingData, setBuildingData] = useState([]);
  const [isPopUpDisplay, setIsPopUpDisplay] = useState(false);
  const PopUpToggleOn = useCallback(() => setIsPopUpDisplay(true), []);
  const PopUpToggleOff = useCallback(() => setIsPopUpDisplay(false), []);
  const fetchData = useCallback(() => {
    onValue(getAllDistrictList, (snapshot) => {
      let dataList: any = [];
      Object.values(snapshot.val()).forEach(
        (buildingData: any, districtIndex) => {
          dataList.push({
            districtIndex,
            district_chi: buildingData[0].district_chi,
            district_eng: buildingData[0].district_eng,
            district_jp: buildingData[0].district_jp,
            buildingData,
          });
        }
      );
      setBuildingData(dataList);
      if (districtid) {
        PopUpToggleOn();
      }
    });
  }, []);

  useEffect(() => {
    if (pathname === "/building_list")
      document.title = findTitle([t("BuildingList_title")]) + t("title");
    else if (
      typeof buildingData[districtid] != "undefined" &&
      pathNameSplitNumber == 1
    ) {
      document.title =
        findTitle([
          language === "zh"
            ? buildingData[districtid].district_chi
            : language === "en"
            ? buildingData[districtid].district_eng
            : buildingData[districtid].district_jp,
          t("BuildingList_title"),
        ]) + t("title");
    } else if (
      typeof buildingData[districtid] != "undefined" &&
      typeof buildingData[districtid].buildingData[buildingid] != "undefined"
    ) {
      document.title =
        findTitle([
          language === "zh"
            ? buildingData[districtid].buildingData[buildingid].name_chi
            : language === "en"
            ? buildingData[districtid].buildingData[buildingid].name_eng
            : buildingData[districtid].buildingData[buildingid].name_jp,
          language === "zh"
            ? buildingData[districtid].district_chi
            : language === "en"
            ? buildingData[districtid].district_eng
            : buildingData[districtid].district_jp,
          t("BuildingList_title"),
        ]) + t("title");
    } else {
      document.title = findTitle([t("page_not_found")]) + t("title");
    }
  }, [pathNameSplitNumber, i18n.language, buildingData]);
  useEffect(() => {
    fetchData();
  }, []);

  const getTitle = () => {
    if (
      typeof buildingData[districtid] != "undefined" &&
      pathNameSplitNumber == 1
    ) {
      return language === "zh"
        ? buildingData[districtid].district_chi
        : language === "en"
        ? buildingData[districtid].district_eng
        : buildingData[districtid].district_jp;
    } else if (
      typeof buildingData[districtid] != "undefined" &&
      typeof buildingData[districtid].buildingData[buildingid] != "undefined"
    ) {
      return language === "zh"
        ? buildingData[districtid].buildingData[buildingid].name_chi
        : language === "en"
        ? buildingData[districtid].buildingData[buildingid].name_eng
        : buildingData[districtid].buildingData[buildingid].name_jp;
    } else {
      return "error";
    }
  };
  return (
    <div className={styles.container}>
      <StaticBigBanner src={banner} />
      <SmallIconPageMenuPage
        pageTitle={"BuildingList_title"}
        pageText={"BuildingList_text"}
      >
        <div className={styles.district__image}>
          {buildingData &&
            buildingData.map((data: any, index) => {
              const id: string =
                data.districtIndex < 10
                  ? "0".concat(data.districtIndex)
                  : data.districtIndex;
              return (
                <MediumIcon
                  key={index}
                  title={
                    language === "zh"
                      ? data.district_chi
                      : language === "en"
                      ? data.district_eng
                      : data.district_jp
                  }
                  id={id}
                  to={`/building_list/${parseInt(id)}`}
                  topText={t("district_image_box_toptext")}
                  imgSrc={`https://ng-kwan-lok.github.io/BuddyCityWeb/building_list/image/district${id}.jpg`}
                  setPopUpOn={PopUpToggleOn}
                />
              );
            })}
        </div>
      </SmallIconPageMenuPage>
      {isPopUpDisplay && (
        <InfoPopUp
          setPopUpOff={() => PopUpToggleOff()}
          title={getTitle()}
          to='/building_list'
        >
          {typeof buildingData[districtid] != "undefined" &&
            pathNameSplitNumber == 1 && (
              <div id='building' className={styles.districtData}>
                {buildingData[districtid].buildingData.map((data, index) => {
                  return (
                    <BuildingListPopUp
                      key={index}
                      buildingName={
                        language === "zh"
                          ? data.name_chi
                          : language === "en"
                          ? data.name_eng
                          : data.name_jp
                      }
                      districtId={districtid}
                      buildingId={index}
                    />
                  );
                })}
              </div>
            )}
          {typeof buildingData[districtid] != "undefined" &&
            typeof buildingData[districtid].buildingData[buildingid] !=
              "undefined" && (
              <BuildingInfoPopUp
                buildingData={buildingData[districtid].buildingData[buildingid]}
              />
            )}
        </InfoPopUp>
      )}
    </div>
  );
};

export default BuildingList;
