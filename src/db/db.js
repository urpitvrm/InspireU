// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClv7wPfQzMmX8vlNRQZibvWO5dldcqqdo",
  authDomain: "ecommerce-d587e.firebaseapp.com",
  projectId: "ecommerce-d587e",
  storageBucket: "ecommerce-d587e.appspot.com",
  messagingSenderId: "502907071852",
  appId: "1:502907071852:web:50631856c7e4231bf5d749",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;