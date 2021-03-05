import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBv6J9-X4bk74S3Tw5EAfe7P2NqTGsTChA",
    authDomain: "react-firebase-2234f.firebaseapp.com",
    projectId: "react-firebase-2234f",
    storageBucket: "react-firebase-2234f.appspot.com",
    messagingSenderId: "688488344300",
    appId: "1:688488344300:web:d217b73352f9462cfc93c9",
    measurementId: "G-GPKJQRKEPE"
};

const fire = firebase.initializeApp(firebaseConfig);
const auth = fire.auth()

export {auth}
