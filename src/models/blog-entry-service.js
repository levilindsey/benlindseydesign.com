(function () {
  angular.module('bldBlogEntryService', [])

    .factory('BlogEntry', BlogEntry);

  function BlogEntry($http, blogDataUrl, youtubeVideoBaseUrl, youtubeThumbnailBaseUrl, vimeoVideoBaseUrl) {
    var BlogEntry;

    var combinedMetadata = {};
    var collectionMetadata = {};
    var blogData = [];
    var fetchPromise = null;

    BlogEntry = {
      getData: getData
    };

    // ---  --- //

    /**
     * @returns {Promise}
     */
    function getData() {
      return fetchPromise || fetchData();
    }

    /**
     * @returns {Promise}
     */
    function fetchData() {
      fetchPromise = $http.get(blogDataUrl)
        .then(parseResponseData)
        .catch(function (error) {
          console.error(error);
        });

      return fetchPromise;

      // ---  --- //

      function parseResponseData(response) {
        combinedMetadata = response.data;
        collectionMetadata = combinedMetadata.collectionMetadata;
        blogData = combinedMetadata.posts;

        updatePostsSrcUrls();

        return blogData;
      }
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
              videoMetadatum.videoSrc = youtubeVideoBaseUrl + '/' + videoMetadatum.id + '?enablejsapi=1';
              videoMetadatum.thumbnailSrc = youtubeThumbnailBaseUrl + '/' + videoMetadatum.id + '/default.jpg';
              break;
            case 'vimeo':
              videoMetadatum.videoSrc = vimeoVideoBaseUrl + '/' + videoMetadatum.id;
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
