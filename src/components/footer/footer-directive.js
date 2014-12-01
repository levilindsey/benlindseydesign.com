(function () {
  angular.module('bldNavBarDirective', [])

    .directive('bldNavBar', bldNavBar);

  function bldNavBar(navBarItems) {
    return {
      restrict: 'E',
      scope: {
      },
      templateUrl: 'components/nav-bar/nav-bar.html',
      link: link
    };

    // ---  --- //

    function link(scope, element, attrs) {
      scope.navBarItems = navBarItems;
    }
  }
})();
