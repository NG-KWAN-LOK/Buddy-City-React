import styles from "./style.module.scss";
import { useTranslation } from "react-i18next";

import discoveryData from "../../pageData/discoveryIconData";
import realityProjectData from "../../pageData/realityProjectData";

import SwiperBanner from "../../components/SwiperBanner";
import BigIconPageMenuPage from "../../components/BigIconPageMenuPage";
import HyperContentCard from "../../components/BigIconPageMenuPage/HyperContentCard";
import ProjectDisplayCorner from "../../components/ProjectDisplayCorner";

const Dashboard = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <SwiperBanner />
      <BigIconPageMenuPage
      // pageTitle={discoveryData.pageTitle}
      // pageText={discoveryData.pageText}
      >
        {discoveryData.rowData.map((data, index) => {
          return (
            <HyperContentCard
              key={index}
              type={data.type}
              to={data.to}
              src={data.src}
              topText={t(data.topText)}
              atoppadding={t(data.rowTitleAtoppadding)}
              apadding={t(data.rowTitleApadding)}
            />
          );
        })}
      </BigIconPageMenuPage>
      <ProjectDisplayCorner
        pageTitle={realityProjectData.pageTitle}
        imgData={realityProjectData.imgData}
      />
    </div>
  );
};

export default Dashboard;
