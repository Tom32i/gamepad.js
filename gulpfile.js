var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  header = require('gulp-header'),
  jshint = require('gulp-jshint'),
  meta = require('./package.json');

var srcDir = './src/',
    distDir = './dist/',
    banner = [
      '/*!',
      ' * <%= name %> <%= version %>',
      ' * <%= homepage %>',
      ' * Copyright 2014 <%= author.name %>',
      ' */\n\n'
    ].join('\n');

gulp.task('jshint', function() {
    gulp.src(srcDir + '**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter());
});

gulp.task('full', function() {
    gulp.src(srcDir + '**/*.js')
        .pipe(concat(meta.name))
        .pipe(header(banner, meta))
        .pipe(gulp.dest(distDir));
});

gulp.task('min', function(){
    gulp.src(srcDir + '**/*.js')
        .pipe(concat(meta.name.replace('.js', '.min.js')))
        .pipe(uglify())
        .pipe(header(banner, meta))
        .pipe(gulp.dest(distDir));
});

gulp.task('default', ['jshint', 'full', 'min']);