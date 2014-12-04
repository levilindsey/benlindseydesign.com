(function () {
  angular.module('bldRoutes', [])

    .config(config)
    .run(run);

  function config($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/page-missing');

    // These values need to be available before any route is rendered
    var dataResolve = {
      projectData: function (Project) {
        return Project.getData();
      },
      blogData: function (BlogEntry) {
        return BlogEntry.getData();
      }
    };

    $stateProvider
      .state('projects', {
        url: '/projects',
        templateUrl: 'routes/projects/projects.html',
        controller: 'ProjectsCtrl',
        controllerAs: 'projects',
        resolve: dataResolve
      })
      .state('welcome', {
        url: '',
        templateUrl: 'routes/welcome/welcome.html',
        controller: 'WelcomeCtrl',
        controllerAs: 'welcome',
        resolve: dataResolve
      })
      .state('writings', {
        url: '/writings',
        templateUrl: 'routes/writings/writings.html',
        controller: 'WritingsCtrl',
        controllerAs: 'writings',
        resolve: dataResolve
      })
      .state('project', {
        url: '/project/:projectId',
        templateUrl: 'routes/project/project.html',
        controller: 'ProjectCtrl',
        controllerAs: 'project',
        resolve: dataResolve
      })
      .state('blog-post', {
        url: '/blog-post/:blogPostId',
        templateUrl: 'routes/blog-post/blog-post.html',
        controller: 'BlogPostCtrl',
        controllerAs: 'blogPost',
        resolve: dataResolve
      })
      .state('page-missing', {
        url: '/page-missing/:failedUrl',
        templateUrl: 'routes/page-missing/page-missing.html',
        controller: 'PageMissingCtrl',
        controllerAs: 'pageMissing'
      });
  }

  function run($rootScope) {
    $rootScope.$on('$stateChangeStart', stateChangeStart);
    $rootScope.$on('$stateNotFound', stateNotFound);
    $rootScope.$on('$stateChangeSuccess', stateChangeSuccess);
    $rootScope.$on('$stateChangeError', stateChangeError);
    $rootScope.$on('$viewContentLoading', viewContentLoading);
    $rootScope.$on('$viewContentLoaded', viewContentLoaded);

    // ---  --- //

    function stateChangeStart(event, toState, toParams, fromState, fromParams) {
      console.debug('$stateChangeStart', toState.name);

      $rootScope.routeState.stateName = toState.name;
    }

    function stateNotFound(event, unfoundState, fromState, fromParams) {
      console.error('$stateNotFound', unfoundState.name);
    }

    function stateChangeSuccess(event, toState, toParams, fromState, fromParams) {
      console.debug('$stateChangeSuccess', toState.name);
    }

    function stateChangeError(event, toState, toParams, fromState, fromParams, error) {
      console.error('$stateChangeError', toState.name, error);

      $state.go('page-missing', {errorMessage: 'An error occurred while loading the page you requested.'});
    }

    function viewContentLoading(event) {
      console.debug('$viewContentLoading');
    }

    function viewContentLoaded(event) {
      console.debug('$viewContentLoaded');
    }
  }
})();
