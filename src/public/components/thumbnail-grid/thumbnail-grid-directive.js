(function () {
  angular.module('bldThumbnailGridDirective', [])

    .directive('bldThumbnailGrid', bldThumbnailGrid);

  function bldThumbnailGrid() {
    return {
      restrict: 'E',
      scope: {
      },
      templateUrl: 'components/thumbnail-grid/thumbnail-grid.html',
      link: link
    };

    // ---  --- //

    function link(scope, element, attrs) {
    }
  }
})();
