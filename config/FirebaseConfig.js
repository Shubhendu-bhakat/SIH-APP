
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBcgmFBPIPdRvl4nbfj9uJbDrbYu6vw_CQ',
  authDomain: "sih2024-e9797.firebaseapp.com",
  projectId: "sih2024-e9797",
  storageBucket: "sih2024-e9797.appspot.com",
  messagingSenderId: "683315123891",
  appId: "1:683315123891:web:5abd6eaad3dcfade6a42c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);