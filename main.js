import './style.css'

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`

import firebase from 'firebase/app';
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD_uIl8ds_EDFRORaSHHsbiu-85nqAfz5o",
  authDomain: "webrtc-test-b5108.firebaseapp.com",
  projectId: "webrtc-test-b5108",
  storageBucket: "webrtc-test-b5108.appspot.com",
  messagingSenderId: "710735820517",
  appId: "1:710735820517:web:8706a0daaa34a3a435c60c",
  measurementId: "G-VTCK9SWEMM"
};

if(!firebase.app.length){
  firebase.initializeApp(firebaseConfig); 
}

const firestore = firebase.firestore();

