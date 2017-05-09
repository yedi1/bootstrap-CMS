'use strict';
var gulp = require('gulp');
var webserver = require('gulp-webserver');
gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      // livereload: true,
      port: 30001,
      directoryListing: true,
      open: true,
      fallback: 'index.html'
    }));
});
