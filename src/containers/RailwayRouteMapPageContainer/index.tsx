import React from "react";
import { useTranslation } from "react-i18next";

import SimplePageContainer from "../SimplePageContainer";
import RailwayRouteMapContainer from "../../components/SimplePage/Container/RailwayRouteMapContainer";

interface RailwayRouteMapPageContainerProps {
  sideMenu: React.ReactNode;
}

const RailwayRouteMapPageContainer: React.FC<RailwayRouteMapPageContainerProps> =
  ({ sideMenu }) => {
    const { t, i18n } = useTranslation();

    return (
      <SimplePageContainer
        contain={<RailwayRouteMapContainer />}
        sideMenu={sideMenu}
      />
    );
  };

export default RailwayRouteMapPageContainer;
