import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAUlDwdQaNVY1-6W85yCIm_oPnb2BPvScc",
    authDomain: "roc8-careers.firebaseapp.com",
    projectId: "roc8-careers",
    storageBucket: "roc8-careers.appspot.com",
    messagingSenderId: "323824466074",
    appId: "1:323824466074:web:dfd558bd398a77a5d8c723"
  };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const storage = firebase.storage();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { db, storage, timestamp };