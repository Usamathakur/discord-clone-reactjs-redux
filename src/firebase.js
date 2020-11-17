import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyDwKtK7FtfXxFBixPolbUdVm_nzxq_NaQw",
    authDomain: "discord-clone-9995b.firebaseapp.com",
    databaseURL: "https://discord-clone-9995b.firebaseio.com",
    projectId: "discord-clone-9995b",
    storageBucket: "discord-clone-9995b.appspot.com",
    messagingSenderId: "1051642201581",
    appId: "1:1051642201581:web:95a9ea66318e17d83113e4",
    measurementId: "G-WSWFM46DQV"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;