(function () {
  angular.module('bldFooterDirective', [])

    .directive('bldFooter', bldFooter);

  function bldFooter() {
    return {
      restrict: 'E',
      scope: {
      },
      templateUrl: 'components/footer/footer.html',
      link: link
    };

    // ---  --- //

    function link(scope, element, attrs) {
    }
  }
})();
