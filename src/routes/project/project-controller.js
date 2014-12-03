(function () {
  angular.module('bldProjectController', [])

    .controller('ProjectCtrl', ProjectCtrl);

  // TODO: sort post items by date (actually, this should be part of the build process...)

  function ProjectCtrl($state, $stateParams, projectData) {
    var project = this;

    project.projectId = $stateParams.projectId;
    project.projectData = projectData;
    project.projectDatum = getMatchingProjectDatum(project.projectId, project.projectData);

    if (!project.projectDatum) {
      $state.go('page-missing', {failedUrl: window.location});
    }

    // ---  --- //

    function getMatchingProjectDatum(projectId, projectData) {
      var i, count;

      for (i = 0, count = projectData.length; i < count; i += 1) {
        if (projectData[i].id === projectId) {
          return projectData[i];
        }
      }

      return null;
    }
  }
})();
