// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfxr1dhopHC0kF5BTYxaGx9nPWE-ly03s",
  authDomain: "chef-hunter-bd7f8.firebaseapp.com",
  projectId: "chef-hunter-bd7f8",
  storageBucket: "chef-hunter-bd7f8.appspot.com",
  messagingSenderId: "678964760313",
  appId: "1:678964760313:web:52bcf614a5c9176b215c28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app