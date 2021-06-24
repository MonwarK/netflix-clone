import { configure } from "@testing-library/react";
import firebase from "firebase"

export const firebaseConfig = {
    
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth }
export default db;
