import firebase from 'firebase';
import 'firebase/firestore';

// firebase init goes here
// const config = {
//     apiKey: "AIzaSyD67NNcu9BGo51XGqGvOyVxfcJ2JUFS1io",
//     authDomain: "matto-dev.firebaseapp.com",
//     databaseURL: "https://matto-dev.firebaseio.com",
//     projectId: "matto-dev",
//     storageBucket: "matto-dev.appspot.com",
//     messagingSenderId: "1046459271258"
// }
var config = {
  apiKey: "AIzaSyDeHi1uKZCSYAJd733P4bKFOVNyAL3GSIw",
  authDomain: "connect-cause-4083d.firebaseapp.com",
  databaseURL: "https://connect-cause-4083d.firebaseio.com",
  projectId: "connect-cause-4083d",
  storageBucket: "connect-cause-4083d.appspot.com",
  messagingSenderId: "128896311982",
  appId: "1:128896311982:web:5f4bcc846888330ae7033f"
};
firebase.initializeApp(config);

// firebase utils
const db = firebase.firestore();
const auth = firebase.auth();
// const googleProvider = new firebase.auth.GoogleAuthProvider();
// const facebookProvider = new firebase.auth.FacebookAuthProvider();
const currentUser = auth.currentUser;
const storage = firebase.storage();
const functions = firebase.functions();
const fieldValue = firebase.functions.FieldValue

// date issue fix according to firebase
const settings = {};
db.settings(settings);

// firebase collections

export default {
  db,
  auth,
  functions,
  currentUser,
  fieldValue,
  storage,
  // googleProvider,
  // facebookProvider,
};
