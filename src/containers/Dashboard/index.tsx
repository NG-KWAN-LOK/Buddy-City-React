import React, { useState, useCallback } from "react";
import { Link, Route, useHistory, useLocation } from "react-router-dom";
import styles from "./style.module.scss";

import SwiperBanner from "../../components/SwiperBanner";
const Home = () => {
  return (
    <div className={styles.container}>
      <SwiperBanner />
    </div>
  );
};

export default Home;
