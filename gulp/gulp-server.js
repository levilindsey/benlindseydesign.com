var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({lazy: false});
var gulpConfig = require('./config');

gulp.task('server', ['watch'], function () {
  return gulp.src(gulpConfig.distPath)
    .pipe(plugins.webserver({
      host: gulpConfig.host,
      port: gulpConfig.port,
      fallback: 'index.html',
      livereload: true,
      open: true
    }));
});
