// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

.state('app.home', {
    url: "/home",
    views: {
      'menuContent': {
        templateUrl: "templates/home.html"
      }
    }
  })

  .state('app.about', {
    url: "/about",
    views: {
      'menuContent': {
        templateUrl: "templates/about.html"
      }
    }
  })

  .state('app.news', {
    url: "/news",
    views: {
      'menuContent': {
        templateUrl: "templates/news.html"
      }
    }
  })

  .state('app.events', {
    url: "/events",
    views: {
      'menuContent': {
        templateUrl: "templates/events.html"
      }
    }
  })

  .state('app.media', {
    url: "/media",
    views: {
      'menuContent': {
        templateUrl: "templates/media.html"
      }
    }
  })

  .state('app.maps', {
    url: "/maps",
    views: {
      'menuContent': {
        templateUrl: "templates/maps.html"
      }
    }
  })

  .state('app.services', {
    url: "/services",
    views: {
      'menuContent': {
        templateUrl: "templates/services.html"
      }
    }
  })

  .state('app.library', {
    url: "/library",
    views: {
      'menuContent': {
        templateUrl: "templates/library.html"
      }
    }
  })

  .state('app.azar', {
    url: "/azar",
    views: {
      'menuContent': {
        templateUrl: "templates/azar.html"
      }
    }
  })

.state('app.checksheet', {
    url: "/checksheet",
    views: {
      'menuContent': {
        templateUrl: "templates/checksheet.html"
      }
    }
  })

  .state('app.alumni', {
    url: "/alumni",
    views: {
      'menuContent': {
        templateUrl: "templates/alumni.html"
      }
    }
  })

  .state('app.admissions', {
    url: "/admissions",
    views: {
      'menuContent': {
        templateUrl: "templates/admissions.html"
      }
    }
  })

  .state('app.important numbers', {
    url: "/important numbers",
    views: {
      'menuContent': {
        templateUrl: "templates/important numbers.html"
      }
    }
  })

  .state('app.emergency', {
    url: "/emergency",
    views: {
      'menuContent': {
        templateUrl: "templates/emergency.html"
      }
    }
  })

  .state('app.weather', {
    url: "/weather",
    views: {
      'menuContent': {
        templateUrl: "templates/weather.html"
      }
    }
  })

  .state('app.feedback', {
    url: "/feedback",
    views: {
      'menuContent': {
        templateUrl: "templates/feedback.html"
      }
    }
  })
   /* .state('app.playlists', {
      url: "/playlists",
      views: {
        'menuContent': {
          templateUrl: "templates/playlists.html",
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: "/playlists/:playlistId",
    views: {
      'menuContent': {
        templateUrl: "templates/playlist.html",
        controller: 'PlaylistCtrl'
      }
    }
  }); */
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
