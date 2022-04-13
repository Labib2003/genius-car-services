// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey:'AIzaSyBc5ut9nzxQJX54f6h5gt2jsp2_jDGzJzw',
    authDomain:'genius-car-services-e05de.firebaseapp.com',
    projectId:'genius-car-services-e05de',
    storageBucket:'genius-car-services-e05de.appspot.com',
    messagingSenderId:'889751978724',
    appId:'1:889751978724:web:61dc6d2a1d9556fe2da2f1',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;