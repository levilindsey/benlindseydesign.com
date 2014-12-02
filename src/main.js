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
    'bldImageSliderDirective',
    'bldFooterDirective',
    'bldLogoCircleDirective',
    'bldNavBarDirective',
    'bldSvgIconDirective',
    'bldThumbnailGridDirective',
    'bldToastDirective',
    'bldToastService',

    // Models
    'bldBlogEntryService',
    'bldPostService',

    // Routes
    'bldBlogPostController',
    'bldHomeController',
    'bldProjectController',
    'bldProjectsController',
    'bldWelcomeController',
    'bldWritingsController'
  ])

    .run(function ($rootScope) {
      $rootScope.routeState = {};

      // TODO:
    });
})();
