// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdHrYPFxUhnhJTH_SZIhBzHoghJ0G_cXE",
  authDomain: "udemezue-23283.firebaseapp.com",
  projectId: "udemezue-23283",
  storageBucket: "udemezue-23283.appspot.com",
  messagingSenderId: "413379512545",
  appId: "1:413379512545:web:623be70be275bb84b14fa0",
  measurementId: "G-MWSN6YE97X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);