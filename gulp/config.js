var config = {};

config.srcPath = 'src';
config.dataPath = 'data';
config.distPath = 'dist';
config.resPath = 'res';
config.bowerPath = 'bower_components';

config.scriptsDist = config.distPath + '/scripts';
config.stylesDist = config.distPath + '/styles';
config.imageDist = config.distPath + '/images';

config.projectDataPath = config.dataPath + '/projects';
config.projectMetadataSrc = config.projectDataPath + '/**/metadata.json';
config.projectCollectionMetadataSrc = config.projectDataPath + '/collection-metadata.json';
config.injectedProjectMetadataDist = config.distPath + '/data';
config.injectedProjectMetadataSrc = config.injectedProjectMetadataDist + '/**/*';
config.combinedProjectDataFilePath = config.distPath + '/project-data.min.json';

config.blogDataPath = config.dataPath + '/blog-entries';
config.blogMetadataSrc = config.blogDataPath + '/**/metadata.json';
config.blogCollectionMetadataSrc = config.blogDataPath + '/collection-metadata.json';
config.injectedBlogMetadataDist = config.distPath + '/data';
config.injectedBlogMetadataSrc = config.injectedBlogMetadataDist + '/**/*';
config.combinedBlogDataFilePath = config.distPath + '/blog-data.min.json';

config.karmaConfigPath = 'karma.conf.js';

config.scriptDistFileName = 'benlindseydesign.com.js';
config.vendorScriptDistFileName = 'lib.js';
config.vendorStyleDistFileName = 'lib.css';
config.angularTemplatesDistFileName = 'templates.js';

config.distGlob = config.distPath + '/**';

config.scriptsDistFilePath = config.scriptsDist + '/' + config.scriptDistFileName;
config.frontEndTestsSrc = config.srcPath + '/**/*_test.js';

config.allFilesForFrontEndTests = [
  config.scriptsDist + '/' + config.vendorScriptDistFileName,
  config.bowerPath + '/angular-mocks/angular-mocks.js',
  config.scriptsDistFilePath,
  config.scriptsDist + '/' + config.angularTemplatesDistFileName,
  config.frontEndTestsSrc
];

config.indexSrc = config.srcPath + '/index.html';

config.scriptsSrc = [
  config.srcPath + '/**/*.js',
  '!' + config.frontEndTestsSrc
];
config.stylesPartialsSrc = config.srcPath + '/**/_*.scss';
config.stylesMainSrc = config.srcPath + '/main.scss';
config.stylesSrc = config.srcPath + '/**/*.scss';
config.angularTemplatesSrc = [config.srcPath + '/**/*.html', '!' + config.indexSrc];
config.imagesSrc = config.resPath + '/images/**/*.+(png|jpg|gif)';
config.mediaSrc = [config.resPath + '/**', '!' + config.imagesSrc];
config.iconsSrc = config.resPath + '/images/icons/*.svg';
config.deviceIconsSrc = config.resPath + '/images/device-icons/*';

// TODO: these source arrays need to be manually kept up-to-date with the front-end libraries that are used in this app
config.vendorScriptsSrc = [
  config.bowerPath + '/angular/angular.js',
  config.bowerPath + '/angular-animate/angular-animate.js',
  config.bowerPath + '/angular-aria/angular-aria.js',
  config.bowerPath + '/angular-material/angular-material.js',
  config.bowerPath + '/angular-ui-router/release/angular-ui-router.js',
  config.bowerPath + '/hammerjs/hammer.js'
];
config.vendorScriptsMinSrc = [
  config.bowerPath + '/angular/angular.min.js',
  config.bowerPath + '/angular-animate/angular-animate.min.js',
  config.bowerPath + '/angular-aria/angular-aria.min.js',
  config.bowerPath + '/angular-material/angular-material.min.js',
  config.bowerPath + '/angular-ui-router/release/angular-ui-router.min.js',
  config.bowerPath + '/hammerjs/hammer.min.js'
];
config.vendorStylesSrc = [
  config.bowerPath + '/angular-material/angular-material.css',
  config.bowerPath + '/angular-material/themes/brown-theme.css'
];
config.vendorStylesMinSrc = [
  config.bowerPath + '/angular-material/angular-material.min.css',
  config.bowerPath + '/angular-material/themes/brown-theme.css'
];

config.buildTasks = [
  'scripts',
  'styles',
  'vendor-scripts',
  'vendor-styles',
  'angular-templates',
  'svg-icons',
  'index-templating',
  'copy-media',
  'copy-device-icons',
  'compress-images',
  'data'
];

config.host = '0.0.0.0';
config.port = 3000;

module.exports = config;
