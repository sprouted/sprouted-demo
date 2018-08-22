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
        path: '/skills/',
        url: './pages/skills.html',
    },

    {
        path: '/mathquiz/',
        url: './pages/mathquiz.html',
        on: {


            pageInit: function(event, page) {
                // do something after page gets into the view
                window.populate();

            },



        }
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
        path: '/mathquiz/',
        url: './pages/mathquiz.html',
    },

    {
        path: '/chat/',
        url: './pages/chat.html',
        on: {


            pageInit: function(event, page) {
                // do something after page gets into the view
                starts();

            },



        }
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

    // Climber - Added
    {
        path: '/climber/',
        url: './pages/climber.html',
        //    name: 'climber',
    },

    // Sherpa - Added
    {
        path: '/guide/',
        url: './pages/mathquiz.html',
        name: 'guide',
    },

    // Results - Added
    {
        path: '/results/',
        url: './pages/results.html',
        name: 'results',
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
    {
        path: '/chat-screen/',
        url: 'https://peaked-6daa2.firebaseapp.com/',
    },
    {
        path: '/legit/',
        url: './pages/legit.html',
    },
    {
        path: '/dlc/',
        url: './pages/dlc.html',
    },
    // Default route (404 page). MUST BE THE LAST
    {
        path: '(.*)',
        url: './pages/404.html',
    },
];