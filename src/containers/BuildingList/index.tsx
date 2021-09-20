import React, { useEffect, useState, useCallback } from "react";
import { useLocation } from "react-router-dom";
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

const BuildingList = () => {
  const { t, i18n } = useTranslation();
  const language = i18n.language;
  const { pathname } = useLocation();
  const pathNameSplit = pathname.split("/");
  const districtIdFromPathName = pathNameSplit[2];
  const buildingIdFromPathName = pathNameSplit[3];
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
      if (pathname != "/building_list") {
        PopUpToggleOn();
      }
    });
  }, []);

  useEffect(() => {
    if (pathname === "/building_list")
      document.title = findTitle([t("BuildingList_title")]) + t("title");
    else if (
      typeof buildingData[districtIdFromPathName] != "undefined" &&
      pathNameSplit.length == 3
    ) {
      document.title =
        findTitle([
          language === "zh"
            ? buildingData[districtIdFromPathName].district_chi
            : language === "en"
            ? buildingData[districtIdFromPathName].district_eng
            : buildingData[districtIdFromPathName].district_jp,
          t("BuildingList_title"),
        ]) + t("title");
    } else if (
      typeof buildingData[districtIdFromPathName] != "undefined" &&
      typeof buildingData[districtIdFromPathName].buildingData[
        buildingIdFromPathName
      ] != "undefined"
    ) {
      document.title =
        findTitle([
          language === "zh"
            ? buildingData[districtIdFromPathName].buildingData[
                buildingIdFromPathName
              ].name_chi
            : language === "en"
            ? buildingData[districtIdFromPathName].buildingData[
                buildingIdFromPathName
              ].name_eng
            : buildingData[districtIdFromPathName].buildingData[
                buildingIdFromPathName
              ].name_jp,
          language === "zh"
            ? buildingData[districtIdFromPathName].district_chi
            : language === "en"
            ? buildingData[districtIdFromPathName].district_eng
            : buildingData[districtIdFromPathName].district_jp,
          t("BuildingList_title"),
        ]) + t("title");
    } else {
      document.title = findTitle([t("page_not_found")]) + t("title");
    }
  }, [pathNameSplit, i18n.language]);
  useEffect(() => {
    fetchData();
  }, []);

  const getTitle = () => {
    if (
      typeof buildingData[districtIdFromPathName] != "undefined" &&
      pathNameSplit.length == 3
    ) {
      return language === "zh"
        ? buildingData[districtIdFromPathName].district_chi
        : language === "en"
        ? buildingData[districtIdFromPathName].district_eng
        : buildingData[districtIdFromPathName].district_jp;
    } else if (
      typeof buildingData[districtIdFromPathName] != "undefined" &&
      typeof buildingData[districtIdFromPathName].buildingData[
        buildingIdFromPathName
      ] != "undefined"
    ) {
      return language === "zh"
        ? buildingData[districtIdFromPathName].buildingData[
            buildingIdFromPathName
          ].name_chi
        : language === "en"
        ? buildingData[districtIdFromPathName].buildingData[
            buildingIdFromPathName
          ].name_eng
        : buildingData[districtIdFromPathName].buildingData[
            buildingIdFromPathName
          ].name_jp;
    } else {
      return "error";
    }
  };
  // console.log(buildingData[districtIdFromPathName]);
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
                  id={
                    data.districtIndex < 10
                      ? "0".concat(data.districtIndex)
                      : data.districtIndex
                  }
                  topText={t("district_image_box_toptext")}
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
          {typeof buildingData[districtIdFromPathName] != "undefined" &&
            pathNameSplit.length == 3 && (
              <div id='building' className={styles.districtData}>
                {buildingData[districtIdFromPathName].buildingData.map(
                  (data, index) => {
                    console.log(data);
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
                        districtId={districtIdFromPathName}
                        buildingId={index}
                      />
                    );
                  }
                )}
              </div>
            )}
          {typeof buildingData[districtIdFromPathName] != "undefined" &&
            typeof buildingData[districtIdFromPathName].buildingData[
              buildingIdFromPathName
            ] != "undefined" && (
              <BuildingInfoPopUp
                buildingData={
                  buildingData[districtIdFromPathName].buildingData[
                    buildingIdFromPathName
                  ]
                }
              />
            )}
        </InfoPopUp>
      )}
    </div>
  );
};

export default BuildingList;
