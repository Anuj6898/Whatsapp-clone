import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAcLI2Hz4hdIrbxEF2GUgUeysSy-YexpWg",
    authDomain: "whatsapp-clone-4af77.firebaseapp.com",
    projectId: "whatsapp-clone-4af77",
    storageBucket: "whatsapp-clone-4af77.appspot.com",
    messagingSenderId: "142193677694",
    appId: "1:142193677694:web:a26cf27202aed954968f2f",
    measurementId: "G-JTCXKG32K1"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;