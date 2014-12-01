(function () {
  angular.module('bldConstants', [])

    .constant('appName', 'Ben Lindsey Design')

    .constant('navBarItems', [
      {
        label: 'Projects',
        ref: 'projects'
      },
      {
        label: 'Welcome',
        ref: 'welcome'
      },
      {
        label: 'Writings',
        ref: 'writings'
      }
    ]);
})();
