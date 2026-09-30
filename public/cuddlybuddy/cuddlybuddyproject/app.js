// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  appId: "YOUR_APP_ID"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


// Google Provider
const googleProvider = new GoogleAuthProvider();


// Facebook Provider
const facebookProvider = new FacebookAuthProvider();


// Google Login
document.getElementById("googleLogin").addEventListener("click", () => {

  signInWithPopup(auth, googleProvider)
    .then((result) => {

      const user = result.user;

      alert("Google Login Successful!");

      console.log(user);

    })
    .catch((error) => {

      console.error(error);

      alert(error.message);

    });

});


// Facebook Login
document.getElementById("facebookLogin").addEventListener("click", () => {

  signInWithPopup(auth, facebookProvider)
    .then((result) => {

      const user = result.user;

      alert("Facebook Login Successful!");

      console.log(user);

    })
    .catch((error) => {

      console.error(error);

      alert(error.message);

    });

});