import React from "react";
import SimplePage from "../../components/SimplePage";
import styles from "./style.module.scss";

interface SimplePageContainerProps {
  contain: React.ReactNode;
  sideMenu: React.ReactNode;
}

const SimplePageContainer: React.FC<SimplePageContainerProps> = ({
  contain,
  sideMenu,
}) => {
  return (
    <div className={styles.main}>
      <SimplePage contain={contain} sideMenu={sideMenu} />
    </div>
  );
};

export default SimplePageContainer;
