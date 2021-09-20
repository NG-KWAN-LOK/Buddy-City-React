import { getDatabase, ref } from "firebase/database";

import { db } from "./firebaseConfig";

console.log("here is init firebase sdk", db);
const firebase = getDatabase();

export const getResidentData = ref(firebase, "resident");

export const getAllDistrictList = ref(firebase, "building");

export const getDistrictData = (districtId) =>
  ref(firebase, "/building/" + districtId);

export const getBuildingData = (districtId, buildingId) =>
  ref(firebase, "/building/" + districtId + "/" + buildingId);
