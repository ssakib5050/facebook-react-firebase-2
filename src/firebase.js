import firebase from "firebase/app";
import "firebase/auth"; // for authentication
import "firebase/storage"; // for storage
import "firebase/database"; // for realtime database
import "firebase/firestore"; // for cloud firestore
import "firebase/messaging"; // for cloud messaging
import "firebase/functions"; // for cloud functions

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyD5fmd5VUEVTA849BO2_k0q0EFNxWycFWg",
  authDomain: "facebook-react-firebase-2.firebaseapp.com",
  databaseURL: "https://facebook-react-firebase-2.firebaseio.com",
  projectId: "facebook-react-firebase-2",
  storageBucket: "facebook-react-firebase-2.appspot.com",
  messagingSenderId: "256573544467",
  appId: "1:256573544467:web:4212047e47141ac77ec7e6",
  measurementId: "G-4NJG5PYGDL",
});

const db = firebaseConfig.firestore();
const auth = firebaseConfig.auth();
const storage = firebaseConfig.storage();

export { firebase, db, auth, storage };
