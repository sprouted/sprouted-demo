var config = {
  apiKey: "AIzaSyAl9CIcgX9BWX5WvM8hd_W-PcGnLhilmBk",
  authDomain: "nestmevents.firebaseapp.com",
  databaseURL: "https://nestmevents.firebaseio.com",
  projectId: "nestmevents",
  storageBucket: "",
  messagingSenderId: "300143900987"
};
var FbApp = firebase.initializeApp(config);
var db = FbApp.database();
var eventsRef = db.ref("events");
console.log("eventsRef: " + eventsRef);

var clubsRef = db.ref("clubs");
console.log("eventsRef: " + clubsRef);

var myEventsRef = db.ref("myevents");
console.log("myeventsRef: " + myEventsRef)
