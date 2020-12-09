import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyBTUDhQS6GY9qVbdYTSg_d0Ei2WmW2JA4U",
        authDomain: "facebook-messenger-clone-5b03c.firebaseapp.com",
        databaseURL: "https://facebook-messenger-clone-5b03c.firebaseio.com",
        projectId: "facebook-messenger-clone-5b03c",
        storageBucket: "facebook-messenger-clone-5b03c.appspot.com",
        messagingSenderId: "599988510876",
        appId: "1:599988510876:web:e290bac558c1a222ba8d59"
})

const db = firebase.firestore();

export default db;