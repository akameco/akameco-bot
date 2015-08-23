'use strict';
var gulp = require('gulp');
var babel = require("gulp-babel");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var concat = require('gulp-concat');
var webserver = require('gulp-webserver');
var del = require('del');
var browserify = require('gulp-browserify');

gulp.task('serve', function() {
  gulp.src('.')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

gulp.task('clean', function(cb) {
  del(['build'], cb);
});

gulp.task("style", function() {
  gulp.src("src/**/*.scss")
    .pipe(sass())
    .pipe(concat('style.css'))
    .pipe(gulp.dest("build/style"));
});

gulp.task('js', function() {
  gulp.src('src/js/**/*.js')
    .pipe(babel())
    .pipe(browserify({
          insertGlobals : true,
          debug : !gulp.env.production
        }))
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('build/js'));
});

gulp.task('watch', function() {
  gulp.watch('src/js/**/*.js', ['js']);
  gulp.watch('src/style/**/*.scss', ['style']);
});

gulp.task('default',['serve', 'watch', 'style', 'js']);
