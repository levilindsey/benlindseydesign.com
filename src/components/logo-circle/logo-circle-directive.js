(function () {
  angular.module('bldLogoCircleDirective', [])

    .directive('bldLogoCircle', bldNavBar);

  function bldNavBar() {
    return {
      restrict: 'E',
      scope: {
      },
      templateUrl: 'components/logo-circle/logo-circle.html',
      link: link
    };

    // ---  --- //

    function link(scope, element, attrs) {
    }
  }
})();
