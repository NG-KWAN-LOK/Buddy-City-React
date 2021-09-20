import { getDatabase, ref } from "firebase/database";

import { db } from "./firebaseConfig";

console.log("here is init firebase sdk", db);
const firebase = getDatabase();

export const getResidentData = ref(firebase, "resident");
