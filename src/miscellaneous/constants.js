(function () {
  angular.module('bldConstants', [])

    .constant('appName', 'Ben Lindsey Design')

    .constant('navBarItems', [
      {
        label: 'Welcome',
        ref: 'welcome'
      },
      {
        label: 'Projects',
        ref: 'projects'
      },
      {
        label: 'Writings',
        ref: 'writings'
      }
    ])

    .constant('projectDataUrl', '/project-data.min.json')
    .constant('blogDataUrl', '/blog-data.min.json')

    .constant('youtubeVideoBaseUrl', '//www.youtube.com/embed')
    .constant('youtubeThumbnailBaseUrl', 'http://img.youtube.com/vi')
    .constant('vimeoVideoBaseUrl', '//player.vimeo.com/video');
})();
