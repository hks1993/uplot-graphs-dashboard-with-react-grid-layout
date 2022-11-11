import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDR3ezFogIGcfjpy4fYveh7srtIEVDOZk0",
  authDomain: "auth-project-dev-947f8.firebaseapp.com",
  projectId: "auth-project-dev-947f8",
  storageBucket: "auth-project-dev-947f8.appspot.com",
  messagingSenderId: "341574813600",
  appId: "1:341574813600:web:0f6bf8acca8028432386c5",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { app, auth };
