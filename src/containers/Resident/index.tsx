import React, { useEffect, useState, useCallback } from "react";
import { useLocation } from "react-router-dom";
import styles from "./style.module.scss";
import { useTranslation } from "react-i18next";
import findTitle from "../../utils/titleName";

import banner from "../../image/resident/001.jpg";

import StaticBigBanner from "../../components/StaticBigBanner";
import SmallIconPageMenuPage from "../../components/SmallIconPageMenuPage";
import FilterNav from "../../components/FilterNav";
import PlayerIcon from "../../components/PlayerIcon";

import { getResidentData } from "../../utils/firebase";
import { onValue } from "firebase/database";
import InfoPopUp from "../../components/InfoPopUp";
import ResidentInfoPopUp from "../../components/InfoPopUp/ResidentInfoPopUp";

const Home = () => {
  const { t, i18n } = useTranslation();
  const language = i18n.language;
  const { pathname } = useLocation();
  const userIdFromPathName = pathname.substring(pathname.lastIndexOf("/") + 1);
  const [residentData, setResidentData] = useState([]);
  const [isPopUpDisplay, setIsPopUpDisplay] = useState(false);
  const [districtList, setDistrictList] = useState({
    districtListZH: new Set(),
    districtListENG: new Set(),
    districtListJP: new Set(),
  });
  const [currentGroup, setCurrentGroup] = useState("全部");
  const SetCurrentGroup = useCallback(
    (district) => setCurrentGroup(district),
    []
  );
  const PopUpToggleOn = useCallback(() => setIsPopUpDisplay(true), []);
  const PopUpToggleOff = useCallback(() => setIsPopUpDisplay(false), []);

  const fetchData = useCallback(() => {
    onValue(getResidentData, (snapshot) => {
      let dataList: any = [];
      snapshot.val().forEach((data, index) => {
        districtList.districtListZH.add(data.district_CHI);
        districtList.districtListENG.add(data.district_ENG);
        districtList.districtListJP.add(data.district_JP);
        dataList.push({
          index,
          ...data,
        });
      });
      setResidentData(dataList);
      if (userIdFromPathName != "resident") {
        PopUpToggleOn();
      }
    });
  }, []);

  useEffect(() => {
    if (pathname === "/resident")
      document.title = findTitle([t("ResidentList_title")]) + t("title");
    else
      document.title =
        findTitle([
          typeof residentData[userIdFromPathName] === "undefined"
            ? t("page_not_found")
            : residentData[userIdFromPathName].user_name,
          t("ResidentList_title"),
        ]) + t("title");
  }, [pathname]);
  useEffect(() => {
    districtList.districtListZH.add("全部");
    districtList.districtListENG.add("All");
    districtList.districtListJP.add("全て");
    fetchData();
  }, []);
  return (
    <div className={styles.container}>
      <StaticBigBanner src={banner} />
      <SmallIconPageMenuPage
        pageTitle={"ResidentList_title"}
        pageText={"ResidentList_text"}
      >
        <div className={styles.sortNav} id='sortNav'>
          {districtList &&
            Array.from(
              language === "zh"
                ? districtList.districtListZH
                : language === "en"
                ? districtList.districtListENG
                : districtList.districtListJP
            ).map((district, index) => {
              const districtZH = Array.from(districtList.districtListZH)[index];
              return (
                <FilterNav
                  key={index}
                  district={district}
                  id={districtZH}
                  checked={districtZH === "全部" ? true : false}
                  HandleChangeCurrentGroup={SetCurrentGroup}
                />
              );
            })}
        </div>
        <div className={styles.resident} id='resident'>
          {residentData &&
            residentData.map((data: any, index) => {
              const playIcon = () => {
                return (
                  <PlayerIcon
                    key={index}
                    character={data}
                    setPopUpOn={() => PopUpToggleOn()}
                  />
                );
              };

              if (currentGroup === "全部") {
                return playIcon();
              }
              return currentGroup === data.district_CHI ? playIcon() : null;
            })}
        </div>
      </SmallIconPageMenuPage>
      {isPopUpDisplay && (
        <InfoPopUp
          setPopUpOff={() => PopUpToggleOff()}
          title={
            typeof residentData[userIdFromPathName] === "undefined"
              ? "error"
              : residentData[userIdFromPathName].user_name
          }
          to='/resident'
        >
          <ResidentInfoPopUp
            character={
              typeof residentData[userIdFromPathName] === "undefined"
                ? ""
                : residentData[userIdFromPathName]
            }
          />
        </InfoPopUp>
      )}
    </div>
  );
};

export default Home;
