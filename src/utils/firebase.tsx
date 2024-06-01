import { getDatabase, ref, set } from "firebase/database";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { firebaseApp } from "./firebaseConfig";

firebaseApp;

const fireBaseDB = getDatabase();

export const getResidentData = ref(fireBaseDB, "resident");

export const getAllDistrictList = ref(fireBaseDB, "building");

export const getDistrictData = (districtId: string) =>
  ref(fireBaseDB, "/building/" + districtId);

export const getBuildingData = (districtId: string, buildingId: string) =>
  ref(fireBaseDB, "/building/district" + districtId + "/" + buildingId);

export const getUserData = (userId: string) =>
  ref(fireBaseDB, "/user/" + userId);

export const newBuildingData = (
  districtId: string,
  buildingId: string,
  payload
) => {
  const id: string =
    districtId.length === 1 ? "0".concat(districtId) : districtId;
  set(getBuildingData(id, buildingId), payload)
    .then(() => {
      alert("儲存成功");
    })
    .catch(() => {
      alert("儲存失敗");
    });
};

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account ",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
