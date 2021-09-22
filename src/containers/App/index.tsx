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
import BuildingList from "../BuildingList";
import SimplePageContainer from "../SimplePageContainer";
import SideMenu from "../../components/SimplePage/SideMenu";

import TNCContainer from "../../components/SimplePage/Container/TNCContainer";
import BCCTBContainer from "../../components/SimplePage/Container/BCCTBContainer";

import bcctbAboutUsSideMenuData from "../../pageData/bcctbAboutUsSideMenuData";
import DiscoveryPage from "../DiscoveryPage";

function App() {
  const { themeMode } = useTheme();
  const { pathname } = useLocation();
  const { t, i18n } = useTranslation();
  const appName = t("title");
  useEffect(() => {
    if (pathname === "/") document.title = appName;
    else if (pathname.includes("/building_list")) return;
    else if (pathname.includes("/resident")) return;
    else if (pathname.includes("/bcctb-about-us"))
      document.title = findTitle([t("BCCTB__content__subTitle")]) + appName;
    else if (pathname.includes("/tnc"))
      document.title = findTitle([t("BCCTB_title")]) + appName;
    else document.title = findTitle([t("page_not_found")]) + appName;
    window.scrollTo(0, 0);
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
          <Route path='/resident/:username'>
            <Resident />
          </Route>
          <Route path='/resident'>
            <Resident />
          </Route>
          <Route path='/building_list/:districtid/:buildingid'>
            <BuildingList />
          </Route>
          <Route path='/building_list/:districtid/'>
            <BuildingList />
          </Route>
          <Route path='/building_list'>
            <BuildingList />
          </Route>
          <Route path='/bcctb-about-us'>
            <SimplePageContainer
              contain={<BCCTBContainer />}
              sideMenu={<SideMenu buttonData={bcctbAboutUsSideMenuData} />}
            />
          </Route>
          <Route path='/tnc'>
            <SimplePageContainer
              contain={<TNCContainer />}
              sideMenu={<SideMenu buttonData={bcctbAboutUsSideMenuData} />}
            />
          </Route>
          <Route path='/page/:pagename'>
            <DiscoveryPage />
          </Route>
        </Switch>
        <Footer />
      </div>
    </div>
  );
}

export default App;
