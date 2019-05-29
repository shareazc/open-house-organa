import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyASTPd1SOP_zzb369dwfWIR-dP7wVCexJk",
    authDomain: "open-house-organa.firebaseapp.com",
    databaseURL: "https://open-house-organa.firebaseio.com",
    projectId: "open-house-organa",
    storageBucket: "open-house-organa.appspot.com",
    messagingSenderId: "512283806532",
    appId: "1:512283806532:web:d879606f6b83049d"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;