'use strict';

let gulp = require('gulp'),
    gulpLoadPlugins = require('gulp-load-plugins'),
    $ = gulpLoadPlugins(),

    publicPath = './public/',
    assetsPath = './assets/';


// HTML Build
gulp.task('html', function(done) {
    gulp.src(assetsPath + 'html/*.html')
        .pipe($.preprocess({context: {}}))
        .pipe(gulp.dest(publicPath));

    done();
});

// SCSS Build
gulp.task('sass', function(done) {
    gulp.src( assetsPath + 'scss/_build/**/*.scss')
        .pipe($.sass().on('error', $.sass.logError))
        .pipe($.autoprefixer())
        .pipe($.cleanCss())
        .pipe($.rename({
            suffix: ".min"
        }))
        .pipe(gulp.dest(publicPath + 'css'));

    done();
});

// Watch files
gulp.task('watch', ['html', 'sass'], function(done) {
    gulp.watch(assetsPath + 'html/**/*.html', ['html']);
    gulp.watch(assetsPath + 'scss/**/*.scss', ['sass']);

    done();
});

// Build
gulp.task('default', ['html', 'sass']);