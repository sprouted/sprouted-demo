// Initialize Firebase
var config = {
    apiKey: "AIzaSyBH6aijteOsuKJvDpH2Ag1ABUBpWtdkHYY",
    authDomain: "sprouted-e9819.firebaseapp.com",
    databaseURL: "https://sprouted-e9819.firebaseio.com",
    projectId: "sprouted-e9819",
    storageBucket: "sprouted-e9819.appspot.com",
    messagingSenderId: "249405326945"
  };
var FbApp = firebase.initializeApp(config);
var db = FbApp.database();
