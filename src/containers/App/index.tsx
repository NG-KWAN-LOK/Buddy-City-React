import React, { useEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import styles from "./style.module.scss";
import useTheme from "../../hoc/ThemeProvider";

import "../../i18n/index.js";
import { useTranslation } from "react-i18next";
import findTitle from "../../utils/titleName";
import Header from "../../components/Header";
import Dashboard from "../Dashboard";
import Footer from "../../components/Footer";
import Resident from "../Resident";

function App() {
  const { themeMode } = useTheme();
  const { pathname } = useLocation();
  const { t, i18n } = useTranslation();
  const appName = t("title");
  useEffect(() => {
    if (pathname === "/") document.title = appName;
    else if (pathname.includes("/building_list"))
      document.title = findTitle([t("BuildingList_title")]) + appName;
    else if (pathname.includes("/resident")) return;
    else if (pathname === "/bcctb-about-us")
      document.title = findTitle([t("BCCTB_title")]) + appName;
    else document.title = findTitle([t("page_not_found")]) + appName;
  }, [pathname, i18n.language]);

  return (
    <div className={styles.app} data-theme={themeMode}>
      <div className={styles.PaddingTop}>　</div>
      <div className={styles.content}>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Dashboard />
          </Route>
          <Route path='/resident'>
            <Resident />
          </Route>
          <Route path='/resident/:userName'>
            <Resident />
          </Route>
        </Switch>
        <Footer />
      </div>
    </div>
  );
}

export default App;
