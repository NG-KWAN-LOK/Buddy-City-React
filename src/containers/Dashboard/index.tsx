import styles from "./style.module.scss";

import discoveryData from "../../pageData/discoveryData";
import realityProjectData from "../../pageData/realityProjectData";

import SwiperBanner from "../../components/SwiperBanner";
import SmallIconPageMenuPage from "../../components/SmallIconPageMenuPage";
import SmallIconRow from "../../components/SmallIconPageMenuPage/SmallIconRow";
import ProjectDisplayCorner from "../../components/ProjectDisplayCorner";

const Home = () => {
  return (
    <div className={styles.container}>
      <SwiperBanner />
      <SmallIconPageMenuPage
        pageTitle={discoveryData.pageTitle}
        pageText={discoveryData.pageText}
      >
        {discoveryData.rowData.map((data, index) => {
          return (
            <SmallIconRow
              key={index}
              rowTitle={data.rowTitle}
              rowIconData={data.rowIconData}
            />
          );
        })}
      </SmallIconPageMenuPage>
      <ProjectDisplayCorner
        pageTitle={realityProjectData.pageTitle}
        imgData={realityProjectData.imgData}
      />
    </div>
  );
};

export default Home;
