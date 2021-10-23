import firebase from "firebase";
// import 'firebase/firestore';
import  "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyB-gSkJT-SYrOQLGXlod4XXRMA-lPKu-DM",
    authDomain: "facebook-2c129.firebaseapp.com",
    projectId: "facebook-2c129",
    storageBucket: "facebook-2c129.appspot.com",
    messagingSenderId: "364807994424",
    appId: "1:364807994424:web:e241fc9ac70ff271d23acd"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()
  
    const db = firebase.firestore()//getFirestore(app)
    const storage = firebase.storage()

  export {
      db, 
      storage
  }