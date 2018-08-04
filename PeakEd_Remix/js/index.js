function forgotInfo() {
  alert('Please Contact Your School Administrator');
}

/**
 * Handles the sign in button press.
 */
function toggleSignIn() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  if (email.length < 4) {
    alert('Please enter valid Information.');
    return;
  }
  if (password.length < 4) {
    alert('Please enter an ID');
    return;
  }
  // Sign in with email and pass.
  // [START authwithemail]
  firebase.auth()
    .signInWithEmailAndPassword(email, password)
    .then(function() {
      console.log('signed in:app', app);
      console.log('signed in:app.router', app.router);
      app.router.navigate('/home/');
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // [START_EXCLUDE]
      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
      // [END_EXCLUDE]
    });
  // [END authwithemail]
}

var loginScreen = app.loginScreen.create({
  el: '.login-screen',
  on: {
    opened: function() {
      console.log('Login Screen opened')
      // $$('#email').val("");
      // $$('#password').val("");
    }
  }
})

firebase.auth().onAuthStateChanged(function(user) {
  if (!user) {
    // User is signed out.
    // [START_EXCLUDE]
    console.log("Signed Out");
    // Call login screen
    loginScreen.open({
      animate: true
    });
    // [END_EXCLUDE]
  }
});

function continueIndex() {
  loginScreen.open({
    animate: true
  });
}

function confirmOk() {
  app.dialog.confirm('Are you sure you want to log out?', 'PeakEd', function() {
    firebase.auth().signOut();
    // app.router.navigate('/login-screen/');
    loginScreen.open({
      animate: true
    });
  });
}