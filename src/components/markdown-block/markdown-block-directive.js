(function () {
  angular.module('bldMarkdownBlockDirective', [])

    .directive('bldMarkdownBlock', bldMarkdownBlock);

  function bldMarkdownBlock() {
    return {
      restrict: 'E',
      scope: {
        markdownText: '@'
      },
      templateUrl: 'components/markdown-block/markdown-block.html',
      link: link
    };

    // ---  --- //

    function link(scope, element, attrs) {
      var converter = new Showdown.converter({extensions: ['github']});

      scope.$watch('markdownText', onMarkdownTextUpdate);

      // ---  --- //

      function onMarkdownTextUpdate() {
        // Translate the Markdown
        scope.convertedMarkdown = converter.makeHtml(scope.markdownText);

        // Add the Markdown content to the DOM
        element.html(scope.convertedMarkdown);
      }
    }
  }
})();
