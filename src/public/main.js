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
    'bldLoginController'
  ])

    .run(function ($rootScope) {
      $rootScope.routeState = {};

      // TODO:
    });
})();
