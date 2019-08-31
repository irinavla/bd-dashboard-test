"use strict";
const gulp = require('gulp'),
  babel = require('gulp-babel'),
  babelify = require('babelify'),
  buffer = require('vinyl-buffer'),
  browserify = require("browserify"),
  source = require('vinyl-source-stream'),
  livereload = require('gulp-livereload');

gulp.task('default', gulp.series(function (done) {
  return browserify('./src/index.js')
    .transform(babelify, { presets: ["@babel/preset-env"] })
    .bundle()
    .pipe(source('index.js'))
    .pipe(gulp.dest('dist/js'))
    .pipe(buffer())
    .pipe(livereload());
  done();
}));

gulp.task('watch', gulp.series(function (done) {
  livereload.listen();
  gulp.watch('src/*.js', ['default']);

  done();
}));

