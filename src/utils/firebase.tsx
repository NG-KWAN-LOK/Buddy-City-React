import ReactDOM from "react-dom";
import $ from "jquery";
import { getDatabase, ref } from "firebase/database";

import styles from "../components/PlayerIcon/style.module.scss";

import { db } from "./firebaseConfig";

console.log("here is init firebase sdk", db);
const firebase = getDatabase();

export const getResidentData = ref(firebase, "resident");
