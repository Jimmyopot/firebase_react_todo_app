import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC4aQ9nk5oXLvnPRZspqzXqaC79RB4KTEY",
    authDomain: "react-todo-app-7641e.firebaseapp.com",
    projectId: "react-todo-app-7641e",
    storageBucket: "react-todo-app-7641e.appspot.com",
    messagingSenderId: "256136408781",
    appId: "1:256136408781:web:8683a239ba79da40ebc384",
    measurementId: "G-4H42ZV0B52"  
});

const db = firebaseApp.firestore();

export default db;