import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPWMQZM5xBO0QOcmGWD74RbCdA5-SkjC0",
  authDomain: "fir-firebase-c47f5.firebaseapp.com",
  projectId: "fir-firebase-c47f5",
  storageBucket: "fir-firebase-c47f5.firebasestorage.app",
  messagingSenderId: "916317716110",
  appId: "1:916317716110:web:c196068494b77bb5dc13df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);