'use strict';

(function () {
  angular.module('bldApp', [
    // Third-party libraries
    'ui.router',

    // As part of the build process, all partials are automatically added the angular template cache
    'templates',

    // Miscellaneous
    'bldConstants',
    'bldRoutes',
//  'bldSomeFilter',
//  'bldSomeService',

    // Components
    'bldLogoCircleDirective',
    'bldNavBarDirective',
    'bldSvgIconDirective',
    'bldToastDirective',
    'bldToastService',

    // Models
    'bldDataNameService',
    'bldUserService',

    // Routes
    'bldProjectsController',
    'bldWelcomeController',
    'bldWritingsController'
  ])

    .run(function ($rootScope) {
      $rootScope.routeState = {};

      // TODO:
    });
})();
