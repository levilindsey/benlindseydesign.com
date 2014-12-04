(function () {
  angular.module('bldImageSliderDirective', [])

    .constant('slideDuration', 400)
    .constant('aspectRatio', 16 / 9)
    .constant('thumbnailHeight', 80)

    .directive('bldImageSlider', bldImageSlider);

  function bldImageSlider($http, $timeout, slideDuration, aspectRatio, thumbnailHeight) {
    var thumbnailWidth = thumbnailHeight * aspectRatio;

    return {
      restrict: 'E',
      scope: {
        images: '=',
        videos: '='
      },
      templateUrl: 'components/image-slider/image-slider.html',
      link: link
    };

    // ---  --- //

    function link(scope, element, attrs) {
      scope.metadata = [];
      scope.currentIndex = 0;
      scope.isTransitioning = false;
      scope.captionText = '';
      scope.thumbnailWidth = thumbnailWidth;
      scope.goToPrevious = goToPrevious;
      scope.goToNext = goToNext;
      scope.goToIndex = goToIndex;

      scope.$watch('images', updateMediaMetadata);
      scope.$watch('videos', updateMediaMetadata);

      // ---  --- //

      function goToPrevious() {
        if (scope.currentIndex > 0) {
          goToIndex((scope.currentIndex + scope.metadata.length - 1) % scope.metadata.length);
        } else {
          console.warn('Image slider cannot go to previous. Already at first medium.');
        }
      }

      function goToNext() {
        if (scope.currentIndex < scope.metadata.length - 1) {
          goToIndex((scope.currentIndex + 1) % scope.metadata.length);
        } else {
          console.warn('Image slider cannot go to next. Already at last medium.');
        }
      }

      /**
       * @param {Number} nextIndex
       */
      function goToIndex(nextIndex) {
        var mainMediaElements, iframeElement, message;

        var previousIndex = scope.currentIndex;
        scope.currentIndex = nextIndex;

        scope.isTransitioning = true;

        // Pause any playing video
        if (scope.metadata[previousIndex].isVideo) {
          mainMediaElements = element[0].querySelectorAll('.main-media-ribbon > div');
          iframeElement = mainMediaElements[previousIndex].querySelector('iframe');

          switch (scope.metadata[previousIndex].videoHost) {
            case 'youtube':
              message = '{"event": "command", "func": "pauseVideo", "args": ""}';
              break;
            case 'vimeo':
              message = '{"method": "pause", "value": ""}';
              break;
            default:
              throw new Error('Invalid video host: ' + scope.metadata[previousIndex].videoHost);
          }

          iframeElement.contentWindow.postMessage(message, '*');
        }

        $timeout(handleSlideEnd, slideDuration / 2);
      }

      function handleSlideEnd() {
        scope.isTransitioning = false;
        scope.captionText = scope.metadata[scope.currentIndex].description;
      }

      function updateMediaMetadata() {
        scope.metadata = createMediaMetadataArray(scope.images, scope.videos);
        scope.currentIndex = 0;

        // The image slider should display differently when it contains zero or one item
        if (!scope.metadata.length) {
          element.css('display', 'none');
        } else {
          scope.captionText = scope.metadata[scope.currentIndex].description;
          determineThumbnails();
        }

        // ---  --- //

        /**
         * @param {Array.<String>} images
         * @param {Array.<String>} videos
         */
        function createMediaMetadataArray(images, videos) {
          return videos.concat(images).map(function (medium) {
            medium.isVideo = !!medium.videoHost;
            return medium;
          });
        }
      }

      function determineThumbnails() {
        scope.metadata.forEach(addMedium);

        // ---  --- //

        function addMedium(mediumMetadatum, index) {
          if (mediumMetadatum.isVideo) {
            switch (mediumMetadatum.videoHost) {
              case 'youtube':
                // Thumbnail is already set
                break;
              case 'vimeo':
                mediumMetadatum.thumbnailSrc = '';
                fetchVimeoThumbnailSrc(mediumMetadatum, index);
                break;
              default:
                throw new Error('Invalid video host: ' + mediumMetadatum.videoHost);
            }
          } else {
            mediumMetadatum.thumbnailSrc = mediumMetadatum.src;
          }

          // ---  --- //

          function fetchVimeoThumbnailSrc(mediumMetadatum) {
            $http.get(config.vimeoMetadataBaseUrl + '/' + mediumMetadatum.id + '.json')
              .then(function (response) {
                mediumMetadatum.thumbnailSrc = response.data[0].thumbnail_large
              })
              .catch(function (error) {
                console.error(error);
              });
          }
        }
      }
    }
  }
})();
