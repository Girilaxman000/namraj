import { getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDkxuCJbFwMlHF5LtKFqmvbin3Wi2y6-Tk",
  authDomain: "lending-users-month-2.firebaseapp.com",
  projectId: "lending-users-month-2",
  storageBucket: "lending-users-month-2.appspot.com",
  messagingSenderId: "760803826641",
  appId: "1:760803826641:web:e169c9660d201c84d29ef0",
};

// Initialize Firebase
let app;
if (!getApps.length) {
  app = initializeApp(firebaseConfig);
}

export const db = getFirestore(app);
