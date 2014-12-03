(function () {
  angular.module('bldProjectsController', [])

    .controller('ProjectsCtrl', ProjectsCtrl);

  function ProjectsCtrl(projectData) {
    var projects = this;

    projects.projectData = projectData;
  }
})();
