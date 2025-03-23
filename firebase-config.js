// Firebase configuration and initialization
import { initializeApp, getApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZc5d2NnbnbJQ6-NLCHC-p6GpAgxt9yoA",
  authDomain: "ipl-demo-1f34f.firebaseapp.com",
  databaseURL: "https://ipl-demo-1f34f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ipl-demo-1f34f",
  storageBucket: "ipl-demo-1f34f.firebasestorage.app",
  messagingSenderId: "1039982880775",
  appId: "1:1039982880775:web:65b69d364442fd1663e2a2",
  measurementId: "G-KKGNMTP40Z"
};

// Initialize Firebase
let app;
try {
  app = getApp();
} catch (e) {
  app = initializeApp(firebaseConfig);
}

const database = getDatabase(app);
const analytics = getAnalytics(app);

export { database }; 