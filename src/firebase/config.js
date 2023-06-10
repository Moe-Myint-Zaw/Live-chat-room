import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNGF0beTo6CNJtLr2zXZaCY0GTnr7MlCI",
  authDomain: "vue-blog-system-8570d.firebaseapp.com",
  projectId: "vue-blog-system-8570d",
  storageBucket: "vue-blog-system-8570d.appspot.com",
  messagingSenderId: "76673175566",
  appId: "1:76673175566:web:120a4b5e05936d5d7b6c5f",
  measurementId: "G-Q03H7572E5"
};
  firebase.initializeApp(firebaseConfig);
  let db=firebase.firestore();
  let auth=firebase.auth();
  let timestamp=firebase.firestore.FieldValue.serverTimestamp;

  export {db,timestamp,auth};