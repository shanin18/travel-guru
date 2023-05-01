// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkZkz2Qm1g1zgywEhAjsfjmTExeDszOmw",
  authDomain: "react-travel-guru-bf876.firebaseapp.com",
  projectId: "react-travel-guru-bf876",
  storageBucket: "react-travel-guru-bf876.appspot.com",
  messagingSenderId: "446099088339",
  appId: "1:446099088339:web:df97b23daaa9380e2f0526"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app