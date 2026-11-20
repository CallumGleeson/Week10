// firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  
};

// Start Firebase
const app = initializeApp(firebaseConfig);

// Get the Firestore database and export it so other files can use it
export const db = getFirestore(app);

