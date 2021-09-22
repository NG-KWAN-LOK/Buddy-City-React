import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import SimpleSmallIconPageContainer from "../SimpleSmallIconPageContainer";
import { useTranslation } from "react-i18next";
import findTitle from "../../utils/titleName";

import discoveryPageData from "../../pageData/discoveryPageData";

interface IDiscoveryParms {
  pagename: string;
}

const DiscoveryPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const history = useHistory();
  const { pagename } = useParams<IDiscoveryParms>();

  useEffect(() => {
    if (typeof discoveryPageData[pagename] === "undefined") {
      history.push("./");
    } else {
      document.title =
        findTitle([t(discoveryPageData[pagename].pageTitle)]) + t("title");
    }
  }, [pagename, i18n.language]);

  if (typeof discoveryPageData[pagename] === "undefined") {
    return null;
  }
  return (
    <SimpleSmallIconPageContainer
      banner={discoveryPageData[pagename].banner}
      pageTitle={discoveryPageData[pagename].pageTitle}
      pageText={discoveryPageData[pagename].pageText}
      discoveryData={discoveryPageData[pagename].rowIconData}
    />
  );
};

export default DiscoveryPage;
