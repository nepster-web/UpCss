'use strict';

let gulp = require('gulp'),
    gulpLoadPlugins = require('gulp-load-plugins'),
    $ = gulpLoadPlugins(),

    publicPath = './public/',
    assetsPath = './assets/';


// HTML Build
gulp.task('html', function(callback) {
    return gulp.src(assetsPath + 'html/*.html')
        .pipe($.preprocess({context: {}}))
        .pipe(gulp.dest(publicPath));
});

// SCSS Build
gulp.task('sass', function() {
    return gulp.src(assetsPath + 'scss/build.scss')
        .pipe($.sourcemaps.init())
        .pipe($.sass().on('error', $.sass.logError))
        .pipe($.autoprefixer())
        .pipe($.sourcemaps.write())
        .pipe($.minifyCss())
        .pipe($.rename('app.min.css'))
        .pipe(gulp.dest(publicPath + 'css'));
});

// Watch files
gulp.task('watch', ['html', 'sass'], function() {
    gulp.watch(assetsPath + 'html/**/*.html', ['html']);
    gulp.watch(assetsPath + 'scss/**/*.scss', ['sass']);
});

// Build
gulp.task('default', ['html', 'sass']);