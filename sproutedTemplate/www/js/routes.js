var routes = [
  // Index page
  {
    path: '/home/',
    url: './home.html',
    name: 'index',
  },


  // Profile page - Added
  {
    path: '/profile/',
    url: './pages/profile.html',
  },

  {
    path: '/match/',
    url: './pages/match.html',
  },
  {
    path: '/englishprim/',
    url: './pages/englishprim.html',
  },
  {
    path: '/mathprim/',
    url: './pages/mathprim.html',
  },
  {
    path: '/scienceprim/',
    url: './pages/scienceprim.html',
  },
  {
    path: '/ssprim/',
    url: './pages/ssprim.html',
  },
  {
    path: '/englishsec/',
    url: './pages/englishsec.html',
  },
  {
    path: '/mathsec/',
    url: './pages/mathsec.html',
  },
  {
    path: '/sciencesec/',
    url: './pages/sciencesec.html',
  },
  {
    path: '/sssec/',
    url: './pages/sssec.html',
  },

  {
    path: '/englishtri/',
    url: './pages/englishtri.html',
  },
  {
    path: '/mathtri/',
    url: './pages/mathtri.html',
  },
  {
    path: '/sciencetri/',
    url: './pages/sciencetri.html',
  },
  {
    path: '/sstri/',
    url: './pages/sstri.html',
  },

  {
    path: '/chat/',
    url: './pages/chat.html',
  },

  {
    path: '/redirect/',
    url: './pages/decisions.html',
  },

  // Settings added by will
  {
    path: '/setting/',
    url: './pages/setting.html',
    // name: 'setting',
  },

  // Update user name - Added
  {
    path: '/update-user/',
    url: './pages/update-user.html',
  },

  // Admin page - Added
  {
    path: '/admin/',
    url: './pages/admin.html',
  },

  // Climber - Added
  {
    path: '/climber/',
    url: './pages/climber.html',
    //    name: 'climber',
  },

  // Sherpa - Added
  {
    path: '/sherpa/',
    url: './pages/sherpa.html',
    name: 'sherpa',
  },

  // Results - Added
  {
    path: '/results/',
    url: './pages/results.html',
    name: 'results',
  },

  // My Events page - Added
  {
    path: '/myevents/',
    url: './pages/my-events.html',
  },

  // My Past Events page - Added
  {
    path: '/my-past-events/',
    url: './pages/my-past-events.html',

  },

  {
    path: '/mynotifications/',
    url: './pages/my-notifications.html',

  },

  // My Event View - Added
  {
    // path: '/update-event/:key/',
    path: '/view-my-event/:key',
    url: './pages/view-my-event.html',
  },

  // About page
  {
    path: '/about/',
    url: './pages/about.html',
    name: 'about',
  },

  {
    path: '/decision/',
    url: './pages/decision.html',
    name: 'decision',
  },

  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
