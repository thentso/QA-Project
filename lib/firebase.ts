import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAf61CDRhE2OBEi9aCrVbZVU26Nq3vCmx8",
    authDomain: "qa-project-1aafd.firebaseapp.com",
    projectId: "qa-project-1aafd",
    storageBucket: "qa-project-1aafd.firebasestorage.app",
    messagingSenderId: "197657546204",
    appId: "1:197657546204:web:a2c1c653c2106ac54d9319"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db }; 