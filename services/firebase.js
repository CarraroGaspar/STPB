import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyD4cwreVU3Bhfk-di41Q6q-nNNn4c0yY-c",
    authDomain: "siteportasb.firebaseapp.com",
    databaseURL: "https://siteportasb-default-rtdb.firebaseio.com",
    projectId: "siteportasb",
    storageBucket: "siteportasb.appspot.com",
    messagingSenderId: "479998986023",
    appId: "1:479998986023:web:c92567b4ed8da095a24b02",
    measurementId: "G-G0DPN2N5BT"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()

  export default { firebase, db }