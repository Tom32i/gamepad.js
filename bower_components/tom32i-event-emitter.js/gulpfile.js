var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  jshint = require('gulp-jshint');

var srcDir = './src/',
    distDir = './dist/',
    name = 'event-emitter';

gulp.task('jshint', function() {
    gulp.src(srcDir + '**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter());
});

gulp.task('full', function() {
    gulp.src(srcDir + '**/*.js')
        .pipe(concat(name + '.js'))
        .pipe(gulp.dest(distDir));
});

gulp.task('min', function() {
    gulp.src(srcDir + '**/*.js')
        .pipe(concat(name + '.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(distDir));
});

gulp.task('default', ['jshint', 'full', 'min']);