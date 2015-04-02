(function() {
  'use strict';

  var fs = require('fs');
  var gulp = require('gulp');
  var karma = require('karma').server;
  var mocha = require('gulp-mocha');
  var gutil = require('gulp-util');

  gulp.task('unit-test-client', function() {
    karma.start({
      configFile: __dirname + '/karma.conf.js',
      singleRun: true
    }, function(exitCode) {
      gutil.log('Karma has exited with ' + exitCode);
      process.exit(exitCode);
    });
  });

  gulp.task('test-server', function() {
    return gulp.src('server/test/**/*.spec.js', {read: false})
      .pipe(mocha({reporter: 'spec'}));
  });

  gulp.task('test', ['test-server', 'unit-test-client']);
})();
