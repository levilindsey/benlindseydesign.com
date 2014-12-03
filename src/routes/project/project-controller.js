(function () {
  angular.module('bldProjectController', [])

    .controller('ProjectCtrl', ProjectCtrl);

  // TODO: sort post items by date (actually, this should be part of the build process...)

  function ProjectCtrl($state, $stateParams, projectData) {
    var project = this;

    project.projectId = $stateParams.projectId;
    project.projectData = projectData;
    project.projectDatum = getMatchingProjectDatum(project.projectId, project.projectData);

    if (!project.projectDatum) {
      $state.go('page-missing', {failedUrl: window.location});
    }

    // ---  --- //

    function getMatchingProjectDatum(projectId, projectData) {
      var i, count;

      for (i = 0, count = projectData.length; i < count; i += 1) {
        if (projectData[i].id === projectId) {
          return projectData[i];
        }
      }

      return null;
    }
  }
})();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TODO: from hex-grid:

function createElements() {
  var pagePost = this;

  var converter = new Showdown.converter({extensions: ['github']});

  var horizontalSideLength = window.hg.Grid.config.tileShortLengthWithGap *
    (window.hg.OpenPostJob.config.expandedDisplacementTileCount + 4.25);
  var verticalSideLength = window.hg.Grid.config.longGap *
    (window.hg.OpenPostJob.config.expandedDisplacementTileCount * 2) +
    window.hg.Grid.config.tileOuterRadius *
    (3 * window.hg.OpenPostJob.config.expandedDisplacementTileCount + 2);

  // Adjust post dimensions for smaller openings
  switch (window.hg.OpenPostJob.config.expandedDisplacementTileCount) {
    case 2:
      verticalSideLength += window.hg.Grid.config.tileOuterRadius;
      break;
    case 1:
      verticalSideLength += window.hg.Grid.config.tileOuterRadius * 3;
      horizontalSideLength -= window.hg.Grid.config.tileShortLengthWithGap;
      break;
    case 0:
      verticalSideLength += window.hg.Grid.config.tileOuterRadius * 4;
      horizontalSideLength -= window.hg.Grid.config.tileShortLengthWithGap;
      break;
    default:
      break;
  }

  var horizontalPadding = 1.15 * window.hg.Grid.config.tileShortLengthWithGap;
  var verticalPadding = 2.25 * window.hg.Grid.config.tileOuterRadius;

  var width, height, paddingX, paddingY, gradientColor1String,
    gradientColor2String, innerWrapperPaddingFromCss, innerWrapperVerticalPadding;

  if (pagePost.tile.grid.isVertical) {
    width = horizontalSideLength;
    height = verticalSideLength;
    paddingX = horizontalPadding;
    paddingY = verticalPadding;
  } else {
    width = verticalSideLength;
    height = horizontalSideLength;
    paddingX = verticalPadding;
    paddingY = horizontalPadding;
  }

  width -= paddingX * 2;
  height -= paddingY * 2;

  pagePost.paddingX = paddingX;
  pagePost.paddingY = paddingY;
  pagePost.halfWidth = width / 2;
  pagePost.halfHeight = height / 2;

  gradientColor1String = 'hsl(' +
  window.hg.Grid.config.backgroundHue + ',' +
  window.hg.Grid.config.backgroundSaturation + '%,' +
  window.hg.Grid.config.backgroundLightness + '%)';
  gradientColor2String = 'hsla(' +
  window.hg.Grid.config.backgroundHue + ',' +
  window.hg.Grid.config.backgroundSaturation + '%,' +
  window.hg.Grid.config.backgroundLightness + '%,0)';

  // ---  --- //

  var container = document.createElement('div');
  var outerWrapper = document.createElement('div');
  var innerWrapper = document.createElement('div');
  var title = document.createElement('h1');
  var content = document.createElement('div');
  var logo = document.createElement('div');
  var date = document.createElement('div');
  var urls = document.createElement('div');
  var categories = document.createElement('div');
  var topGradient = document.createElement('div');
  var bottomGradient = document.createElement('div');

  pagePost.tile.grid.parent.appendChild(container);
  container.appendChild(outerWrapper);
  outerWrapper.appendChild(innerWrapper);
  innerWrapper.appendChild(logo);
  innerWrapper.appendChild(date);
  innerWrapper.appendChild(title);
  innerWrapper.appendChild(urls);
  innerWrapper.appendChild(content);
  innerWrapper.appendChild(categories);
  container.appendChild(topGradient);
  container.appendChild(bottomGradient);

  pagePost.elements = [];
  pagePost.elements.container = container;
  pagePost.elements.title = title;
  pagePost.elements.content = content;
  pagePost.elements.logo = logo;
  pagePost.elements.date = date;
  pagePost.elements.urls = urls;
  pagePost.elements.categories = categories;

  container.setAttribute('data-hg-post-container', 'data-hg-post-container');
  container.style.position = 'absolute';
  container.style.width = width + paddingX + 'px';
  container.style.height = height + paddingY * 2 + 'px';
  container.style.margin = '0';
  container.style.padding = '0';
  container.style.overflow = 'hidden';
  container.style.zIndex = '500';

  outerWrapper.setAttribute('data-hg-post-outer-wrapper', 'data-hg-post-outer-wrapper');
  outerWrapper.style.width = width + 'px';
  outerWrapper.style.height = height + paddingY * 2 + 'px';
  outerWrapper.style.margin = '0';
  outerWrapper.style.padding = '0 0 0 ' + paddingX + 'px';
  outerWrapper.style.overflow = 'auto';

  innerWrapper.setAttribute('data-hg-post-inner-wrapper', 'data-hg-post-inner-wrapper');
  innerWrapperPaddingFromCss =
    parseInt(window.getComputedStyle(innerWrapper, null).getPropertyValue('padding-top'));
  innerWrapperVerticalPadding = innerWrapperPaddingFromCss + paddingY;
  innerWrapper.style.padding =
    innerWrapperVerticalPadding + 'px ' + innerWrapperPaddingFromCss + 'px ' +
    innerWrapperVerticalPadding + 'px ' + innerWrapperPaddingFromCss + 'px';
  innerWrapper.style.minHeight = height - innerWrapperPaddingFromCss * 2 + 'px';
  innerWrapper.style.overflowX = 'hidden';

  pagePost.innerWrapperPaddingFromCss = innerWrapperPaddingFromCss;

  title.setAttribute('data-hg-post-title', 'data-hg-post-title');
  title.innerHTML = pagePost.tile.postData.titleLong;

  topGradient.style.position = 'absolute';
  topGradient.style.top = '0';
  topGradient.style.left = paddingX + 'px';
  topGradient.style.height = paddingY + 'px';
  topGradient.style.width = width + 'px';
  topGradient.style.backgroundColor = '#000000';
  topGradient.style.background =
    'linear-gradient(0,' + gradientColor2String + ',' + gradientColor1String + ' 75%)';
  topGradient.style.pointerEvents = 'none';

  bottomGradient.style.position = 'absolute';
  bottomGradient.style.bottom = '0';
  bottomGradient.style.left = paddingX + 'px';
  bottomGradient.style.height = paddingY + 'px';
  bottomGradient.style.width = width + 'px';
  bottomGradient.style.backgroundColor = '#000000';
  bottomGradient.style.background =
    'linear-gradient(0,' + gradientColor1String + ' 25%,' + gradientColor2String + ')';
  bottomGradient.style.pointerEvents = 'none';

  content.setAttribute('data-hg-post-content', 'data-hg-post-content');
  content.innerHTML = converter.makeHtml(pagePost.tile.postData.content);

  logo.setAttribute('data-hg-post-logo', 'data-hg-post-logo');
  logo.style.backgroundImage = 'url(' + pagePost.tile.postData.logoSrc + ')';

  date.setAttribute('data-hg-post-date', 'data-hg-post-date');
  addDate.call(pagePost);

  urls.setAttribute('data-hg-post-urls', 'data-hg-post-urls');
  addUrls.call(pagePost);

  categories.setAttribute('data-hg-post-categories', 'data-hg-post-categories');
  addCategories.call(pagePost);

  // Create the Carousel and insert it before the post's main contents
  pagePost.carousel = new window.hg.Carousel(pagePost.tile.grid, pagePost, innerWrapper,
    pagePost.tile.postData.images, pagePost.tile.postData.videos, true);
  innerWrapper.removeChild(pagePost.carousel.elements.container);
  innerWrapper.insertBefore(pagePost.carousel.elements.container, urls);

  draw.call(pagePost);
}

