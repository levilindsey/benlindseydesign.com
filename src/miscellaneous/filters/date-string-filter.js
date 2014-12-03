(function () {
  angular.module('bldDateStringFilter', [])

    .filter('bldDateString', dateString);

  function dateString() {
    return function (value) {
      // Date values can be given as a single string or as an object with a start and end property
      return typeof value === 'object' ? value.start + ' &ndash; ' + value.end : value;
    };
  }
})();
