(function () {
  angular.module('bldConstants', [])

    .constant('appName', 'Ben Lindsey Design')

    .constant('navBarItems', [
      {
        label: 'Projects',
        ref: 'projects'
      },
      {
        label: 'Writings',
        ref: 'writings'
      },
      {
        label: 'Artist Statement',
        ref: 'welcome'
      }
    ])

    .constant('projectDataUrl', '/project-data.min.json')
    .constant('blogDataUrl', '/blog-data.min.json')

    .constant('youtubeVideoBaseUrl', '//www.youtube.com/embed')
    .constant('youtubeThumbnailBaseUrl', 'http://img.youtube.com/vi')
    .constant('vimeoVideoBaseUrl', '//player.vimeo.com/video');
})();
