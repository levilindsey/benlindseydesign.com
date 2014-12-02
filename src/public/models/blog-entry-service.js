(function () {
  angular.module('bldDataNameService', [])

    .constant('blogDataUrl', '/data.min.json')// TODO: add the actual file name

    .factory('BlogEntry', BlogEntry);

  function BlogEntry($http, blogDataUrl) {
    var BlogEntry;

    var combinedMetadata = {};
    var collectionMetadata = {};
    var blogData = [];

    BlogEntry = {
      fetchData: fetchData,
      getData: getData
    };

    // ---  --- //

    function getData() {
      return blogData;
    }

    function fetchData(parameters) {
      return $http.get(blogDataUrl + '/')
        .then(function (response) {
          combinedMetadata = JSON.parse(response);

          collectionMetadata = combinedMetadata.collectionMetadata;
          blogData = combinedMetadata.posts;

          updatePostsSrcUrls();
        })
        .catch(function (error) {
          console.error(error);
        });
    }

    function updatePostsSrcUrls() {
      blogData.forEach(updatePostSrcUrls);

      // ---  --- //

      function updatePostSrcUrls(blogDatum) {
        var blogBaseUrl = collectionMetadata.baseUrl + '/' + blogDatum.id + '/';

        blogDatum.images.forEach(updateSrcImageMetadata);
        blogDatum.videos.forEach(updateSrcVideoMetadata);

        blogDatum.thumbnailSrc = blogBaseUrl + collectionMetadata.thumbnailName;
        blogDatum.logoSrc = blogBaseUrl + collectionMetadata.logoName;

        // ---  --- //

        function updateSrcImageMetadata(imageMetadatum) {
          imageMetadatum.src = blogBaseUrl + imageMetadatum.fileName;
        }

        function updateSrcVideoMetadata(videoMetadatum) {
          switch (videoMetadatum.videoHost) {
            case 'youtube':
              videoMetadatum.videoSrc = config.youtubeVideoBaseUrl + '/' + videoMetadatum.id + '?enablejsapi=1';
              videoMetadatum.thumbnailSrc = config.youtubeThumbnailBaseUrl + '/' + videoMetadatum.id + '/default.jpg';
              break;
            case 'vimeo':
              videoMetadatum.videoSrc = config.vimeoVideoBaseUrl + '/' + videoMetadatum.id;
              videoMetadatum.thumbnailSrc = null;
              break;
            default:
              throw new Error('Invalid video host: ' + videoMetadatum.videoHost);
          }
        }
      }
    }

    return BlogEntry;
  }
})();
