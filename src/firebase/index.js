import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBLfPsvTjGjGRMQ98uBWFInmH3aOCpvTSc",
    authDomain: "react-chat-app-6fc20.firebaseapp.com",
    databaseURL: "https://react-chat-app-6fc20-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "react-chat-app-6fc20",
    storageBucket: "react-chat-app-6fc20.appspot.com",
    messagingSenderId: "78085157459",
    appId: "1:78085157459:web:1dbde313284b4fbdf90ca6"
  };
  

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const auth = firebaseApp.auth();
export const db = firebaseApp.database(); 

export const rootRef = db.ref('root'); 

export const profileRef = db.ref('profile');
export const chatsRef = profileRef.child('chats');
export const messagesRef = profileRef.child('messages');



