var routes = [
  // Index page
  {
    path: '/decision/',
    url: './decision.html',
    name: 'index',
  },


  // Profile page - Added
  {
    path: '/profile/',
    componentUrl: './pages/profile.html',

  },
  // Settings added by will
  {
    path: '/setting/',
    url: './pages/setting.html',

  },

  // Update user name - Added
  {
    path: '/update-user/',
    componentUrl: './pages/update-user.html',

  },

  // Admin page - Added
  {
    path: '/admin/',
    componentUrl: './pages/admin.html',

  },

  // Climber - Added
  {
    path: '/climber/',
    url: './pages/climber.html',

  },

  // Sherpa - Added
  {
    path: '/sherpa/',
    url: './pages/sherpa.html',
  },

  // My Events page - Added
  {
    path: '/myevents/',
    componentUrl: './pages/my-events.html',
  },

  // My Past Events page - Added
  {
    path: '/my-past-events/',
    componentUrl: './pages/my-past-events.html',

  },

  {
    path: '/mynotifications/',
    componentUrl: './pages/my-notifications.html',

  },

  // My Event View - Added
  {
    // path: '/update-event/:key/',
    path: '/view-my-event/:key',
    componentUrl: './pages/view-my-event.html',
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
