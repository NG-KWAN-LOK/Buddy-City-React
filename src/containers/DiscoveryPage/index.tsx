import React from "react";
import { useParams } from "react-router-dom";
import SimpleSmallIconPageContainer from "../SimpleSmallIconPageContainer";

import discoveryPageData from "../../pageData/discoveryPageData";

interface IDiscoveryParms {
  pagename: string;
}

const DiscoveryPage: React.FC = () => {
  const { pagename } = useParams<IDiscoveryParms>();
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
