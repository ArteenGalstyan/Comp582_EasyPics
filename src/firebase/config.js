import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDC6zk8BnMpNVERZPqif8wUrJcOv50ZqoM",
  authDomain: "easypics-19794.firebaseapp.com",
  projectId: "easypics-19794",
  storageBucket: "easypics-19794.appspot.com",
  messagingSenderId: "875697221819",
  appId: "1:875697221819:web:6aa4a8ebcb0834d1eb799e",
  measurementId: "G-XGQ06HKR4W"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };