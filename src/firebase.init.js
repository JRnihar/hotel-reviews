
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBj0BZcE2ckRi0xV7MKV7B2KwFP5dB7yr0",
  authDomain: "hotel-reviews-1bd47.firebaseapp.com",
  projectId: "hotel-reviews-1bd47",
  storageBucket: "hotel-reviews-1bd47.appspot.com",
  messagingSenderId: "1033363282042",
  appId: "1:1033363282042:web:56496b75ff5d9acbfc43c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app)
export default auth