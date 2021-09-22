import React from "react";
import styles from "./style.module.scss";

import StaticBigBanner from "../../components/StaticBigBanner";
import SmallIconPageMenuPage from "../../components/SmallIconPageMenuPage";
import SmallIconRow from "../../components/SmallIconPageMenuPage/SmallIconRow";

import { IRowIconData } from "../../pageData/discoveryRowData";

interface SimpleSmallIconPageContainerProps {
  banner: string;
  pageTitle: string;
  pageText: string;
  discoveryData: {
    rowTitle: string;
    rowIconData: IRowIconData[];
  }[];
}

const SimpleSmallIconPageContainer: React.FC<SimpleSmallIconPageContainerProps> =
  ({ banner, pageTitle, pageText, discoveryData }) => {
    return (
      <div className={styles.container}>
        <StaticBigBanner src={banner} />
        <SmallIconPageMenuPage pageTitle={pageTitle} pageText={pageText}>
          {discoveryData.map((data, index) => {
            return (
              <SmallIconRow
                key={index}
                rowTitle={data.rowTitle}
                rowIconData={data.rowIconData}
              />
            );
          })}
        </SmallIconPageMenuPage>
      </div>
    );
  };

export default SimpleSmallIconPageContainer;
