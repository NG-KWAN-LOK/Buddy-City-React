import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.scss";
import findTitle from "../../../utils/titleName";

interface BuildingListPopUpProps {
  buildingName: string;
  districtId: string;
  buildingId: string;
}

const BuildingListPopUp: React.FC<BuildingListPopUpProps> = ({
  buildingName,
  districtId,
  buildingId,
}) => {
  return (
    <Link
      to={`/building_list/${districtId}/${buildingId}`}
      className={styles.district__building}
      id={`districtId${districtId}_buildingId${buildingId}`}
    >
      <div className={styles.district__building__name}>{buildingName}</div>
    </Link>
  );
};

export default BuildingListPopUp;
