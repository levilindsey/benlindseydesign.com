(function () {
  angular.module('bldHomeController', [])

    .controller('HomeCtrl', HomeCtrl);

  function HomeCtrl(appName) {
    var home = this;

    home.appName = appName;
  }
})();
