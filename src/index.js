// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWfJLhjnXwnoZuA3H-2-N21Tb44uPggjM",
  authDomain: "garbo-monitoring-64bef.firebaseapp.com",
  projectId: "garbo-monitoring-64bef",
  storageBucket: "garbo-monitoring-64bef.appspot.com",
  messagingSenderId: "1053791292726",
  appId: "1:1053791292726:web:539ef2986dfe83e243f797",
  measurementId: "G-TD2F6PJYSS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app)