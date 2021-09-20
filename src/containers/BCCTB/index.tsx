import SimplePage from "../../components/SimplePage";
import BCCTBContainer from "../../components/SimplePage/Container/BCCTBContainer";
import SideMenu from "../../components/SimplePage/SideMenu";
import styles from "./style.module.scss";

import bcctbAboutUsSideMenuData from "../../pageData/bcctbAboutUsSideMenuData";

const BCCTB = () => {
  return (
    <div className={styles.main}>
      <SimplePage
        contain={<BCCTBContainer />}
        sideMenu={<SideMenu buttonData={bcctbAboutUsSideMenuData} />}
      />
    </div>
  );
};

export default BCCTB;
