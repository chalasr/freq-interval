var gulp  = require('gulp');
var coffee  = require('gulp-coffee');
var concat  = require('gulp-concat');
var gutil   = require('gulp-util');

gulp.task('coffee', function() {
  gulp.src('assets/app.coffee')
  .pipe(coffee({bare: true}))
  .pipe(gulp.dest('assets'));
});
