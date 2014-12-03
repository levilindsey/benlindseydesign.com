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
    'bldDateStringFilter',

    // Components
    'bldImageSliderDirective',
    'bldFooterDirective',
    'bldLogoCircleDirective',
    'bldMarkdownBlockDirective',
    'bldNavBarDirective',
    'bldSvgIconDirective',
    'bldThumbnailGridDirective',
    'bldToastDirective',
    'bldToastService',

    // Models
    'bldBlogEntryService',
    'bldProjectService',

    // Routes
    'bldBlogPostController',
    'bldPageMissingController',
    'bldProjectController',
    'bldProjectsController',
    'bldWelcomeController',
    'bldWritingsController'
  ])

    .run(function ($rootScope, Project, BlogEntry) {
      $rootScope.routeState = {};

      // Pre-fetch data
      Project.getData();
      BlogEntry.getData();
    });
})();
