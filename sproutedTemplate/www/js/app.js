// Dom7
var $$ = Dom7;

// Theme
var theme = 'auto';
if (document.location.search.indexOf('theme=') >= 0) {
  theme = document.location.search.split('theme=')[1].split('&')[0];
}

// Init App
var app = new Framework7({
  id: 'io.framework7.testapp',
  root: '#app',
  domCache: true,
  xhrCache: false,
  theme: theme,
<<<<<<< HEAD
  data: function() {
=======
  data: function () {
>>>>>>> 28a227e66d34c3b0ea28a7ed41f5cc0b73f4e758
    return {
      user: {
        displayName: '',
        email: '',
        admin: false,
        emailVerified: '',
        isAnonymous: false,
        uid: '',
        providerData: ''
      },
    };
  },
  methods: {
<<<<<<< HEAD
    helloWorld: function() {
=======
    helloWorld: function () {
>>>>>>> 28a227e66d34c3b0ea28a7ed41f5cc0b73f4e758
      app.dialog.alert('Hello World!');
    },
  },
  routes: routes,
  navbar: {
<<<<<<< HEAD
    hideOnPageScroll: true,
    showOnPageScrollTop: true,
    scrollTopOnTitleClick: true,
    showOnPageScrollEnd: true
  },
=======
   hideOnPageScroll: true,
   showOnPageScrollTop: true,
   scrollTopOnTitleClick: true,
   showOnPageScrollEnd: true
 },
>>>>>>> 28a227e66d34c3b0ea28a7ed41f5cc0b73f4e758
  statusbar: {
    enabled: true,
    overlay: true,
    iosTextColor: 'white',
    iosBackgroundColor: '#7B1FA2',
    iosOverlaysWebView: true,
    scrollTopOnClick: true,
  },
  panel: {
<<<<<<< HEAD
    swipe: 'left',
  },
  input: {
=======
     swipe: 'left',
   },
   input: {
>>>>>>> 28a227e66d34c3b0ea28a7ed41f5cc0b73f4e758
    scrollIntoViewOnFocus: true,
    scrollIntoViewCentered: true,
  },
  touch: {
    tapHold: true,
    tapHoldDelay: 750
  }
  // vi: {
  //   placementId: 'pltd4o7ibb9rc653x14',
  // },
});

// $$(document).on('deviceready', function(){ Keyboard.shrinkView(true); })
<<<<<<< HEAD
$$(document).on('page:init', '.page[data-name="index"]', function(e) {
  refreshEventPage();
});

$$(document).on('page:init', '.page[data-name="profile"]', function(e) {
  $$('#profile_name').html(app.user.displayName);
  app.router.refreshPage();
});
=======

$$(document).on('page:init', '.page[data-name="index"]', function (e) {
  refreshEventPage();
})

$$(document).on('page:init', '.page[data-name="profile"]', function (e) {
  $$('#profile_name').html(app.user.displayName);
  app.router.refreshPage()
})
>>>>>>> 28a227e66d34c3b0ea28a7ed41f5cc0b73f4e758


var loginScreen = app.loginScreen.create({
  el: '.login-screen',
  on: {
<<<<<<< HEAD
    opened: function() {
=======
    opened: function () {
>>>>>>> 28a227e66d34c3b0ea28a7ed41f5cc0b73f4e758
      console.log('Login Screen opened')
      $$('#email').val("");
      $$('#password').val("");
    }
  }
})

var createAccountScreen = app.popup.create({
  el: '.create-account-screen',
  on: {
<<<<<<< HEAD
    opened: function() {
=======
    opened: function () {
>>>>>>> 28a227e66d34c3b0ea28a7ed41f5cc0b73f4e758
      console.log('Create Account Screen opened')
    }
  }
})

var authorizationScreen = app.popup.create({
  el: '.authorization-screen',
  on: {
<<<<<<< HEAD
    opened: function() {
=======
    opened: function () {
>>>>>>> 28a227e66d34c3b0ea28a7ed41f5cc0b73f4e758
      console.log('Authorization Screen opened')
    },
    // closed: function() {
    //   refreshEventPage();
    // }
  }
})
