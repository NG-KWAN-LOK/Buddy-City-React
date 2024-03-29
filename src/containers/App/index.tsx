import React, { useEffect } from "react";
import { Route, Switch, useLocation, Redirect } from "react-router-dom";
import styles from "./style.module.scss";
import useTheme from "../../hoc/ThemeProvider";
import { ThemeProvider } from "@mui/material/styles";
import { useTheme as useMuiTheme, createTheme } from "@mui/material/styles";

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
import GeneralCategory from "../GeneralCategory";
import SubwayInfoPageContainer from "../SubwayInfoPageContainer";
import RailwayHistoryPageContainer from "../RailwayHistoryPageContainer";
import RailwayRouteMapPageContainer from "../RailwayRouteMapPageContainer";

import basicPageData from "../../pageData/basicPageData";
import { activityPageData } from "../../pageData/activityPageData";
import { toDoPageDataData } from "../../pageData/toDoPageData";
import { howToVisitPageData } from "../../pageData/howToVisitPageData";
import OnlineMap from "../OnlineMap";

function App() {
  const theme = useMuiTheme();
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const { themeMode } = useTheme();
  const { pathname } = useLocation();
  const { t, i18n } = useTranslation();
  const appName = t("title");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    if (pathname === "/") document.title = appName;
    else if (pathname.includes("/building_list")) return;
    else if (pathname.includes("/resident")) return;
    else if (pathname.includes("/page")) return;
    else if (pathname.includes("/subway-info")) return;
    else if (pathname.includes("/history")) return;
    else if (pathname.includes("/railway-route-map"))
      document.title = findTitle([t("railway_route_map_title")]) + appName;
    else if (pathname.includes("/online-map"))
      document.title = findTitle([t("online_map_title")]) + appName;
    else if (pathname.includes("/bcctb-about-us"))
      document.title = findTitle([t("BCCTB__content__subTitle")]) + appName;
    else if (pathname.includes("/tnc"))
      document.title = findTitle([t("BCCTB_title")]) + appName;
    else {
      document.title = findTitle([t("page_not_found")]) + appName;
    }
  }, [pathname, i18n.language]);

  return (
    <div className={styles.app} data-theme={themeMode}>
      <ThemeProvider theme={themeMode === "dark" ? darkTheme : theme}>
        <div className={styles.PaddingTop}>　</div>
        <div className={styles.content}>
          <Header />
          <Switch>
            <Route exact path='/'>
              <Dashboard />
            </Route>
            <Route path={["/resident/:username", "/resident"]}>
              <Resident />
            </Route>
            <Route
              path={[
                "/building_list/:districtid/:buildingid",
                "/building_list/:districtid/",
                "/building_list",
              ]}
            >
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
            <Route path='/page/basic/:pagename'>
              <GeneralCategory
                generalCategoryData={basicPageData}
                sideMenu={<SideMenu buttonData={bcctbAboutUsSideMenuData} />}
              />
            </Route>
            <Route path='/page/activity/:pagename'>
              <GeneralCategory
                generalCategoryData={activityPageData}
                sideMenu={<SideMenu buttonData={bcctbAboutUsSideMenuData} />}
              />
            </Route>
            <Route path='/page/how-to-visit/:pagename'>
              <GeneralCategory
                generalCategoryData={howToVisitPageData}
                sideMenu={<SideMenu buttonData={bcctbAboutUsSideMenuData} />}
              />
            </Route>
            <Route path='/page/to-do/:pagename'>
              <GeneralCategory
                generalCategoryData={toDoPageDataData}
                sideMenu={<SideMenu buttonData={bcctbAboutUsSideMenuData} />}
              />
            </Route>
            <Route path='/page/subway-info/:pagename'>
              <SubwayInfoPageContainer
                sideMenu={<SideMenu buttonData={bcctbAboutUsSideMenuData} />}
              />
            </Route>
            <Route path='/page/:pagename'>
              <DiscoveryPage />
            </Route>
            <Route
              path={[
                "/history/railway-history/:timeSlot",
                "/history/railway-history",
              ]}
            >
              <RailwayHistoryPageContainer
                sideMenu={<SideMenu buttonData={bcctbAboutUsSideMenuData} />}
              />
            </Route>
            <Route path='/railway-route-map'>
              <RailwayRouteMapPageContainer
                sideMenu={<SideMenu buttonData={bcctbAboutUsSideMenuData} />}
              />
            </Route>
            <Route path={["/online-map/:year", "/online-map"]}>
              <OnlineMap />
            </Route>
            <Route path={["/page", "/subway-info", "/history"]}>
              <Redirect to='/' />
            </Route>
          </Switch>
          <Footer />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
