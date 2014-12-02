(function () {
  /**
   * @typedef {Object} PostData
   * @property {String} id
   * @property {String} titleShort
   * @property {String} titleLong
   * @property {Array.<String>} urls
   * @property {String} jobTitle
   * @property {String} date
   * @property {Array.<String>} categories
   * @property {Array.<ImageData>} images
   * @property {Array.<VideoData>} videos
   * @property {String} content An extended description of the post in markdown syntax.
   */

  /**
   * @typedef {Object} ImageData
   * @property {String} fileName
   * @property {String} description
   */

  /**
   * @typedef {Object} VideoData
   * @property {'youtube'|'vimeo'} videoHost
   * @property {String} id
   * @property {String} description
   */

  angular.module('bldPostService', [])

    .constant('postDataUrl', '/data.min.json')// TODO: add the actual file name

    .factory('Post', Post);

  function Post($http, postDataUrl) {
    var Post;

    var combinedMetadata = {};
    var collectionMetadata = {};
    var postData = [];

    Post = {
      fetchData: fetchData,
      getData: getData
    };

    // ---  --- //

    function getData() {
      return postData;
    }

    function fetchData(parameters) {
      return $http.get(postDataUrl + '/')
        .then(function (response) {
          combinedMetadata = JSON.parse(response);

          collectionMetadata = combinedMetadata.collectionMetadata;
          postData = combinedMetadata.posts;

          updatePostsSrcUrls();
        })
        .catch(function (error) {
          console.error(error);
        });
    }

    function updatePostsSrcUrls() {
      postData.forEach(updatePostSrcUrls);

      // ---  --- //

      function updatePostSrcUrls(postDatum) {
        var postBaseUrl = collectionMetadata.baseUrl + '/' + postDatum.id + '/';

        postDatum.images.forEach(updateSrcImageMetadata);
        postDatum.videos.forEach(updateSrcVideoMetadata);

        postDatum.thumbnailSrc = postBaseUrl + collectionMetadata.thumbnailName;
        postDatum.logoSrc = postBaseUrl + collectionMetadata.logoName;

        // ---  --- //

        function updateSrcImageMetadata(imageMetadatum) {
          imageMetadatum.src = postBaseUrl + imageMetadatum.fileName;
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

    return Post;
  }
})();
