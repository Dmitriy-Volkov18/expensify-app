import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyB5-EZNJin7AQrN3l7tVmY3s1ZagGbiD1Y",
    authDomain: "expensify-47016.firebaseapp.com",
    databaseURL: "https://expensify-47016.firebaseio.com",
    projectId: "expensify-47016",
    storageBucket: "expensify-47016.appspot.com",
    messagingSenderId: "1052352714821",
    appId: "1:1052352714821:web:825120892b522ec73aeb2c",
    measurementId: "G-KFE2290EB3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const database = firebase.database()

  export {firebase, database as default}