import React, { useState } from "react";
import styles from "../style.module.scss";
import { IBuilding } from "../../../../containers/BuildingList/interface";
import {
  Button,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { IBuildingListParms } from "../../../../containers/BuildingList";
import { newBuildingData } from "../../../../utils/firebase";
import useAuth from "../../../../hoc/AuthProvider";
import {
  BuildingListKey,
  DecorateChi,
  DecorateEng,
  DecorateJp,
} from "../../../../interface/BuildingListData";

interface AdminBuildingInfoPopUpProps {
  buildingData: IBuilding;
  preNewBuildingIndex?: number;
  isCreateData?: boolean;
}

const AdminBuildingInfoPopUp: React.FC<AdminBuildingInfoPopUpProps> = ({
  buildingData,
  preNewBuildingIndex = 0,
  isCreateData = false,
}) => {
  const getBuildingData = () => {
    if (isCreateData) {
      return Object.keys(buildingData).reduce((acc, key) => {
        if (key === BuildingListKey.DISTRICT_CHI) {
          return { ...acc, [key]: buildingData[key] };
        }
        if (key === BuildingListKey.DISTRICT_ENG) {
          return { ...acc, [key]: buildingData[key] };
        }
        if (key === BuildingListKey.DISTRICT_JP) {
          return { ...acc, [key]: buildingData[key] };
        }
        if (key === BuildingListKey.INSIDE_CHI) {
          return { ...acc, [key]: DecorateChi.NO };
        }
        if (key === BuildingListKey.INSIDE_ENG) {
          return { ...acc, [key]: DecorateEng.NO };
        }
        if (key === BuildingListKey.INSIDE_JP) {
          return { ...acc, [key]: DecorateJp.NO };
        }
        return { ...acc, [key]: "" };
      }, {}) as IBuilding;
    }
    return buildingData;
  };
  const { userRole } = useAuth();
  const { districtid, buildingid } = useParams<IBuildingListParms>();
  const [currentBuildingData, setCurrentBuildingData] = useState<IBuilding>(
    getBuildingData()
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCurrentBuildingData({ ...currentBuildingData, [name]: value });
  };

  const handleSelectChange = (e: SelectChangeEvent) => {
    const { name, value } = e.target;
    const isDecorate = value === DecorateEng.YES;
    setCurrentBuildingData({
      ...currentBuildingData,
      [name]: value,
      [BuildingListKey.INSIDE_CHI]: isDecorate
        ? DecorateChi.YES
        : DecorateChi.NO,
      [BuildingListKey.INSIDE_JP]: isDecorate ? DecorateJp.YES : DecorateJp.NO,
    });
  };

  const handleSave = () => {
    // save data
    if (!userRole?.write) {
      alert("您沒有編輯資料的權限");
      return;
    }
    if (isCreateData) {
      newBuildingData(
        districtid,
        preNewBuildingIndex.toString(),
        currentBuildingData
      );
      return;
    }
    newBuildingData(districtid, buildingid, currentBuildingData);
  };

  return (
    <>
      <table className={styles.data__table}>
        <tbody>
          {Object.entries(currentBuildingData).map(([key, value]) => {
            return (
              <tr key={key}>
                <td className={styles.data__table__datatitle}>{key}</td>
                <td className={styles.data__table__datainfo}>
                  {key === BuildingListKey.INSIDE_ENG ? (
                    <Select
                      value={value}
                      sx={{
                        width: "80%",
                        fontSize: 17,
                      }}
                      name={key}
                      onChange={handleSelectChange}
                    >
                      {Object.values(DecorateEng).map((decorate) => (
                        <MenuItem
                          value={decorate}
                          sx={{
                            fontSize: 17,
                          }}
                        >
                          {decorate}
                        </MenuItem>
                      ))}
                    </Select>
                  ) : (
                    <TextField
                      name={key}
                      value={value}
                      sx={{
                        width: "80%",
                      }}
                      InputProps={{
                        sx: { fontSize: 17 },
                      }}
                      onChange={handleInputChange}
                      disabled={[
                        BuildingListKey.INSIDE_CHI,
                        BuildingListKey.INSIDE_JP,
                      ].includes(key as BuildingListKey)}
                    />
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className={styles.control}>
        <Button
          variant='contained'
          size='large'
          sx={{
            fontSize: 17,
          }}
          onClick={handleSave}
        >
          儲存
        </Button>
      </div>
    </>
  );
};

export default AdminBuildingInfoPopUp;
