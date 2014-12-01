(function () {
  angular.module('bldRoutes', [])

    .config(config)
    .run(run);

  function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/welcome');

    $stateProvider
      .state('projects', {
        url: '/projects',
        templateUrl: 'routes/projects/projects.html',
        controller: 'ProjectsCtrl',
        controllerAs: 'projects'
      })
      .state('welcome', {
        url: '/welcome',
        templateUrl: 'routes/welcome/welcome.html',
        controller: 'WelcomeCtrl',
        controllerAs: 'welcome'
      })
      .state('writings', {
        url: '/writings',
        templateUrl: 'routes/writings/writings.html',
        controller: 'WritingsCtrl',
        controllerAs: 'writings'
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
    }

    function viewContentLoading(event) {
      console.debug('$viewContentLoading');
    }

    function viewContentLoaded(event) {
      console.debug('$viewContentLoaded');
    }
  }
})();
