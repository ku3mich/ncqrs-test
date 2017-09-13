var gulp = require('gulp');
var less = require('gulp-less');
var minifyCSS = require('gulp-csso');
var minifyJs = require('gulp-minify');
var clean = require('gulp-clean');
var concatJs = require('gulp-concat');
var rename = require('gulp-rename');

function toWWW(dir) {
    return gulp.dest(`wwwroot/${dir}`);
}

gulp.task('css', ['css:clean'], function () {
    return Promise.all([
        gulp
            .src('Frontend/bootstrap.less')
            .pipe(less())
            .pipe(minifyCSS())
            .pipe(rename({
                suffix: '.min'
            }))
            .pipe(toWWW('css')),
        gulp
            .src('node_modules/bootstrap/fonts/*')
            .pipe(toWWW('css/fonts'))]
    );
});

//gulp.task("js:clean", function () {
//    return gulp
//        .src("wwwroot/js")
//        .pipe(clean());
//});

gulp.task("css:clean", function () {
    return gulp
        .src("wwwroot/css")
        .pipe(clean());
});

gulp.task('js', function () {
    return Promise.all([
        gulp.src([
            'node_modules/requirejs/require.js'
        ])
            .pipe(minifyJs({
                ext: {
                    src: '.js',
                    min: '.min.js'
                },
                noSource: true
            }))
            .pipe(toWWW('js')),
        gulp.src([
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/angular/angular.min.js',
            'node_modules/angular/angular.min.js.map',
            'node_modules/angular-bootstrap/ui-bootstrap.min.js',
            'node_modules/bootstrap/dist/js/bootstrap.min.js',
            'node_modules/domready/ready.min.js'
        ], function () {
        })
            .pipe(toWWW('js'))
    ]);
});

gulp.task('build', ['css', 'js']);