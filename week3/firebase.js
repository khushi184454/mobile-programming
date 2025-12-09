// ------------------------------
// Firebase Configuration
// ------------------------------
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-database.js";

// Paste YOUR Firebase config here
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "mobile-programming-51595.firebaseapp.com",
  databaseURL: "https://mobile-programming-51595-default-rtdb.firebaseio.com",
  projectId: "mobile-programming-51595",
  storageBucket: "mobile-programming-51595.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export { ref, push, set };
