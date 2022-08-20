import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import findTitle from "../../utils/titleName";

import SimplePageContainer from "../SimplePageContainer";
import RailwayHistoryContainer from "../../components/SimplePage/Container/RailwayHistoryContainer";

interface RailwayHistoryPageContainerProps {
  sideMenu: React.ReactNode;
}

interface IRailwayHistoryPageParams {
  timeSlot: string;
}

const RailwayHistoryPageContainer: React.FC<
  RailwayHistoryPageContainerProps
> = ({ sideMenu }) => {
  const { t, i18n } = useTranslation();
  const history = useHistory();
  const pagename = history.location.pathname;
  const { timeSlot } = useParams<IRailwayHistoryPageParams>();

  console.log(pagename, timeSlot);

  useEffect(() => {
    document.title = findTitle([t("discover_row_title_history")]) + t("title");
  }, [history, i18n.language]);

  return (
    <SimplePageContainer
      contain={<RailwayHistoryContainer timeSlot={parseInt(timeSlot)} />}
      sideMenu={sideMenu}
    />
  );
};

export default RailwayHistoryPageContainer;
