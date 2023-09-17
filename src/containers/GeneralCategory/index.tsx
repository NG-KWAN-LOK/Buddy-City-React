import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import findTitle from "../../utils/titleName";

import SimplePageContainer from "../SimplePageContainer";
import GeneralPageContainer from "../../components/SimplePage/Container/GeneralPageContainer";
import { GeneralCategoryData } from "../../interface/GeneralPage";

interface GeneralCategoryProps {
  sideMenu: React.ReactNode;
  generalCategoryData: GeneralCategoryData;
}

interface IGeneralCategoryParams {
  pagename: string;
}
const GeneralCategory: React.FC<GeneralCategoryProps> = ({
  sideMenu,
  generalCategoryData,
}) => {
  const { t, i18n } = useTranslation();
  const { pagename } = useParams<IGeneralCategoryParams>();
  const history = useHistory();

  useEffect(() => {
    if (typeof generalCategoryData[pagename] === "undefined") {
      history.push("");
    } else {
      document.title =
        findTitle([t(generalCategoryData[pagename].pageTitle)]) + t("title");
    }
  }, [pagename, i18n.language]);

  if (typeof generalCategoryData[pagename] === "undefined") {
    return null;
  }

  return (
    <SimplePageContainer
      contain={
        <GeneralPageContainer generalPageData={generalCategoryData[pagename]} />
      }
      sideMenu={sideMenu}
    />
  );
};

export default GeneralCategory;
