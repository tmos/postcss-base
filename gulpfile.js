/**
 * Declaration
 */

/** Base */
var gulp = require('gulp'),
    plumber = require('gulp-plumber');
/** Css */
var sourcemaps = require('gulp-sourcemaps'),
    postcss = require('gulp-postcss'),
    postcssPlugins = [
    require('postcss-nesting'),
    require('postcss-mixins'),
    require('postcss-simple-vars'),
    require('postcss-easings'),
    require('postcss-custom-media'),
    require("css-mqpacker"),
    require('cssnano')({safe:true}),
    require('autoprefixer')({browsers: ['last 2 version']})
];
/** Files access */
var files = {
        css_input : 'styles/postcss/styles.css',
        css_output : 'styles/css/'
    };

/**
 * Tasks
 */
gulp.task('css', function() {
    gulp.src(files.css_input)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(postcss(postcssPlugins))
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest(files.css_output));
});

gulp.task('default', ['css'], function() {
    gulp.watch(files.css_input, ['css']);
});