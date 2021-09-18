import React, { useState, useCallback } from "react";
import { Link, Route, useHistory, useLocation } from "react-router-dom";
import styles from "./style.module.scss";

import discoveryData from "../../pageData/discoveryData";
import realityProjectData from "../../pageData/realityProjectData";

import SwiperBanner from "../../components/SwiperBanner";
import SmallIconPageMenuPage from "../../components/SmallIconPageMenuPage";
import ProjectDisplayCorner from "../../components/ProjectDisplayCorner";
const Home = () => {
  return (
    <div className={styles.container}>
      <SwiperBanner />
      <SmallIconPageMenuPage
        pageTitle={discoveryData.pageTitle}
        pageText={discoveryData.pageText}
        rowData={discoveryData.rowData}
      />
      <ProjectDisplayCorner
        pageTitle={realityProjectData.pageTitle}
        imgData={realityProjectData.imgData}
      />
    </div>
  );
};

export default Home;
