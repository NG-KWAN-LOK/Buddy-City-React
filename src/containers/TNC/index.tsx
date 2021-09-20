import SimplePage from "../../components/SimplePage";
import TNCContainer from "../../components/SimplePage/Container/TNCContainer";
import SideMenu from "../../components/SimplePage/SideMenu";
import styles from "./style.module.scss";

import bcctbAboutUsSideMenuData from "../../pageData/bcctbAboutUsSideMenuData";

const BCCTB = () => {
  return (
    <div className={styles.main}>
      <SimplePage
        contain={<TNCContainer />}
        sideMenu={<SideMenu buttonData={bcctbAboutUsSideMenuData} />}
      />
    </div>
  );
};

export default BCCTB;
