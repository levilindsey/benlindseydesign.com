(function () {
  angular.module('bldConstants', [])

    .constant('appName', 'Ben Lindsey Design')

    .constant('navBarItems', [
      {
        label: 'Projects',
        ref: 'projects'
      },
      {
        label: 'Welcome',
        ref: 'welcome'
      },
      {
        label: 'Writings',
        ref: 'writings'
      }
    ])

    .constant('youtubeVideoBaseUrl', '//www.youtube.com/embed')
    .constant('youtubeThumbnailBaseUrl', 'http://img.youtube.com/vi')
    .constant('vimeoVideoBaseUrl', '//player.vimeo.com/video');
})();
