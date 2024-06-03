// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaUVLEHdau_7XQSHwYWJd2j6iBkhnk_EY",
  authDomain: "restrowebsite-deb78.firebaseapp.com",
  projectId: "restrowebsite-deb78",
  storageBucket: "restrowebsite-deb78.appspot.com",
  messagingSenderId: "764102746000",
  appId: "1:764102746000:web:09303c286b4ef10a711d15",
  measurementId: "G-PFXHN95CC0",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

export const auth = getAuth();
export const db = getFirestore(firebaseApp);
export default firebaseApp;
