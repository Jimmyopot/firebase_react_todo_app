import firebase from "firebase";
import dotenv from 'dotenv';
 
dotenv.config()

const firebaseApp = firebase.initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "react-todo-app-7641e.firebaseapp.com",
    projectId: "react-todo-app-7641e",
    storageBucket: "react-todo-app-7641e.appspot.com",
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,  
});

const db = firebaseApp.firestore();

export default db;