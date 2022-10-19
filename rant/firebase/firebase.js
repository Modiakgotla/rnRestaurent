
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';

import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC8IKcmfvzp4q41if5iFnYPeSaoekTIyj4",
  authDomain: "restaurant-f1845.firebaseapp.com",
  projectId: "restaurant-f1845",
  storageBucket: "restaurant-f1845.appspot.com",
  messagingSenderId: "254096947026",
  appId: "1:254096947026:web:517c3f511e613de95e2c8b"
};



const app = initializeApp(firebaseConfig);
const auth = getAuth(app) ;

const db = getFirestore(app)
const analytics = getAnalytics(app);

export {auth, db} ;