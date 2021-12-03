import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import findTitle from "../../utils/titleName";

import SimplePageContainer from "../SimplePageContainer";
import BasicCategoryContainer from "../../components/SimplePage/Container/BasicCategoryContainer";
import basicPageData from "../../pageData/basicPageData";

interface BasicCategoryProps {
  sideMenu: React.ReactNode;
}

interface IBasicCategoryParams {
  pagename: string;
}
const SubwayInfoPageContainer: React.FC<BasicCategoryProps> = ({
  sideMenu,
}) => {
  const { t, i18n } = useTranslation();
  const { pagename } = useParams<IBasicCategoryParams>();
  const history = useHistory();

  useEffect(() => {
    if (typeof basicPageData[pagename] === "undefined") {
      history.push("");
    } else {
      document.title =
        findTitle([t(basicPageData[pagename].pageTitle)]) + t("title");
    }
  }, [pagename, i18n.language]);

  if (typeof basicPageData[pagename] === "undefined") {
    return null;
  }

  return (
    <SimplePageContainer
      contain={
        <BasicCategoryContainer basicCategoryData={basicPageData[pagename]} />
      }
      sideMenu={sideMenu}
    />
  );
};

export default SubwayInfoPageContainer;
