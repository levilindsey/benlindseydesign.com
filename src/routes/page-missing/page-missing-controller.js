(function () {
  angular.module('bldPageMissingController', [])

    .controller('PageMissingCtrl', PageMissingCtrl);

  function PageMissingCtrl($stateParams) {
    var pageMissing = this;

    pageMissing.failedUrl = $stateParams.failedUrl;
    pageMissing.errorMessage = $stateParams.errorMessage;
  }
})();
