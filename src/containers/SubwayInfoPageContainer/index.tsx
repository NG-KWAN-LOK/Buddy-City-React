import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import findTitle from "../../utils/titleName";

import SimplePageContainer from "../SimplePageContainer";
import SubwayInfoContainer from "../../components/SimplePage/Container/SubwayInfoContainer";
import subwayPageData from "../../pageData/subwayPageData";

interface SubwayInfoContainerProps {
  sideMenu: React.ReactNode;
}

interface ISubwayInfoContainerParams {
  pagename: string;
}
const SubwayInfoPageContainer: React.FC<SubwayInfoContainerProps> = ({
  sideMenu,
}) => {
  const { t, i18n } = useTranslation();
  const { pagename } = useParams<ISubwayInfoContainerParams>();
  const history = useHistory();

  useEffect(() => {
    if (typeof subwayPageData[pagename] === "undefined") {
      history.push("");
    } else {
      document.title =
        findTitle([t(subwayPageData[pagename].title)]) + t("title");
    }
  }, [pagename, i18n.language]);

  if (typeof subwayPageData[pagename] === "undefined") {
    return null;
  }

  return (
    <SimplePageContainer
      contain={<SubwayInfoContainer subwayData={subwayPageData[pagename]} />}
      sideMenu={sideMenu}
    />
  );
};

export default SubwayInfoPageContainer;
