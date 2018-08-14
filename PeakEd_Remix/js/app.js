// Dom7
var $ = Dom7;

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
  data: function() {
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
    helloWorld: function() {
      app.dialog.alert('Hello World!');
    },
  },
  routes: routes,
  navbar: {
    hideOnPageScroll: true,
    showOnPageScrollTop: true,
    scrollTopOnTitleClick: true,
    showOnPageScrollEnd: true
  },
  statusbar: {
    enabled: true,
    overlay: true,
    iosTextColor: 'white',
    iosBackgroundColor: '#7B1FA2',
    iosOverlaysWebView: true,
    scrollTopOnClick: true,
  },
  panel: {
    swipe: 'left',
  },
  input: {
    scrollIntoViewOnFocus: true,
    scrollIntoViewCentered: true,
  },
  touch: {
    tapHold: true,
    tapHoldDelay: 750
  }
});
