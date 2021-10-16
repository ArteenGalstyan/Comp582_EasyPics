import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBAlnwYYMqAwAWne0df49gaHx6S90mQLMQ",
    authDomain: "amazing-albums.firebaseapp.com",
    projectId: "amazing-albums",
    storageBucket: "amazing-albums.appspot.com",
    messagingSenderId: "650730149823",
    appId: "1:650730149823:web:fb08042cd274b155d5730a",
    measurementId: "G-84ZFDZXG1Y"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);

const projectstoreage = firebase.storage();
const projectFirestore = firebase.firestore();

export{

    projectstoreage,projectFirestore

  }
