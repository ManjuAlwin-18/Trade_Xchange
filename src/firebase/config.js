import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyBiO8dY6xcgFEi9r9gfgjM5C365Txgx8lY",
    authDomain: "trade-xchange-4ee5b.firebaseapp.com",
    projectId: "trade-xchange-4ee5b",
    storageBucket: "trade-xchange-4ee5b.appspot.com",
    messagingSenderId: "715154593513",
    appId: "1:715154593513:web:ab783efcc24abcd546c278",
    measurementId: "G-7QR6GDBN50"
  };



 export default firebase.initializeApp(firebaseConfig)