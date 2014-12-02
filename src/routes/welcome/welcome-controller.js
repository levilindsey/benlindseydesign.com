(function () {
  angular.module('bldWelcomeController', [])

    .controller('WelcomeCtrl', WelcomeCtrl);

  function WelcomeCtrl(appName) {
    var home = this;

    home.appName = appName;
  }
})();
