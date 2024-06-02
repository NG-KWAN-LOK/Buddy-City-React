import { useEffect, useState } from "react";
import styles from "../style.module.scss";
import findTitle from "../../../utils/titleName";
import { useTranslation } from "react-i18next";
import BuildingList from "../../BuildingList";

enum Database {
  RESIDENT = "resident",
  BUILDING = "building",
}

const AdminContent = ({}) => {
  const [currentDatabase, setCurrentDatabase] = useState<Database | null>(null);
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${findTitle(["管理員頁面"])}${t("title")}`;
  }, []);

  return (
    <>
      <div className={styles.admin__choosePage}>
        <div className={styles.admin__choosePage__editDatabase}>
          <div className={styles.admin__choosePage__editDatabase__title}>
            請選擇您想操作之資料表：
          </div>
          <div
            className={styles.admin__choosePage__editDatabase__item}
            onClick={() => {
              window.open("https://ng-kwan-lok.github.io/BuddyCityWeb/admin/");
              setCurrentDatabase(Database.RESIDENT);
            }}
          >
            居民名冊 (外部連結)
          </div>
          <div
            className={styles.admin__choosePage__editDatabase__item}
            onclick='showEditResidentForm()'
            onClick={() => setCurrentDatabase(Database.BUILDING)}
          >
            城市建築物名冊
          </div>
        </div>
      </div>
      {currentDatabase === Database.BUILDING && <BuildingList />}
    </>
  );
};

export default AdminContent;
