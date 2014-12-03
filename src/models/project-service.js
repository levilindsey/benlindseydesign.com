(function () {
  /**
   * @typedef {Object} ProjectData
   * @property {String} id
   * @property {String} title
   * @property {String} date
   * @property {Array.<ImageData>} images
   * @property {Array.<VideoData>} videos
   * @property {String} content An extended description of the project in markdown syntax.
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

  angular.module('bldProjectService', [])

    .factory('Project', Project);

  function Project($http, projectDataUrl, youtubeVideoBaseUrl, youtubeThumbnailBaseUrl, vimeoVideoBaseUrl) {
    var Project;

    var combinedMetadata = {};
    var collectionMetadata = {};
    var projectData = [];
    var fetchPromise = null;

    Project = {
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
      fetchPromise = $http.get(projectDataUrl)
        .then(parseResponseData)
        .catch(function (error) {
          console.error(error);
        });

      return fetchPromise;

      // ---  --- //

      function parseResponseData(response) {
        combinedMetadata = response.data;
        collectionMetadata = combinedMetadata.collectionMetadata;
        projectData = combinedMetadata.posts;

        updatePostsSrcUrls();

        return projectData;
      }
    }

    function updatePostsSrcUrls() {
      projectData.forEach(updatePostSrcUrls);

      // ---  --- //

      function updatePostSrcUrls(projectDatum) {
        var projectBaseUrl = collectionMetadata.baseUrl + '/' + projectDatum.id + '/';

        projectDatum.images.forEach(updateSrcImageMetadata);
        projectDatum.videos.forEach(updateSrcVideoMetadata);

        projectDatum.thumbnailSrc = projectBaseUrl + collectionMetadata.thumbnailName;
        projectDatum.logoSrc = projectBaseUrl + collectionMetadata.logoName;

        // ---  --- //

        function updateSrcImageMetadata(imageMetadatum) {
          imageMetadatum.src = projectBaseUrl + imageMetadatum.fileName;
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

    return Project;
  }
})();
