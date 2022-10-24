// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCVlkum6itnpOECDw3wzs0CMotuHj_W1lM",
    authDomain: "learn-web-development-project.firebaseapp.com",
    projectId: "learn-web-development-project",
    storageBucket: "learn-web-development-project.appspot.com",
    messagingSenderId: "952431653236",
    appId: "1:952431653236:web:37fbd7c3500db4278bbc21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app