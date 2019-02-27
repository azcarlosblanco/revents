import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDQ7ALv8HBrErXONjMdYgOnCOxUcsk96kM",
    authDomain: "revents-231113.firebaseapp.com",
    databaseURL: "https://revents-231113.firebaseio.com",
    projectId: "revents-231113",
    storageBucket: "revents-231113.appspot.com",
    messagingSenderId: "246701732385"
}

firebase.initializeApp(firebaseConfig);
const firestore  = firebase.firestore();
const settings = {
    timestampsInSnapshots: true
}

firestore.settings(settings);

export default firebase;