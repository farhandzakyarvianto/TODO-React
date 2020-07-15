// const firebaseConfig = {
//     
//   };

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DBURL,
    projectId: "todo-app-react-284de",
    storageBucket: "todo-app-react-284de.appspot.com",
     messagingSenderId: "383993970763",
     appId: "1:383993970763:web:e61ffa373be90b8b894dce",
    measurementId: "G-NFGBJF6BW5"
});

const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const storage = firebase.storage();

export default db;