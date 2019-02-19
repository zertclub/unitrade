import * as firebase from 'firebase';


const config = {
    apiKey: "AIzaSyC-SBb4Rp1kdmZdrtEW6gYSL_DzlYKpEOQ",
    authDomain: "unitrade-86cec.firebaseapp.com",
    databaseURL: "https://unitrade-86cec.firebaseio.com",
    projectId: "unitrade-86cec",
    storageBucket: "unitrade-86cec.appspot.com",
    messagingSenderId: "200018284315"
  };
  firebase.initializeApp(config);
firebase.database().ref().set({
    name: 'Muhammad Ahmad'
})