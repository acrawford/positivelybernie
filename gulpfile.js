var gulp = require('gulp'),
    connect = require('gulp-connect'),
    del = require('del'),
    minifyHTML = require('gulp-minify-html'),
    less = require('gulp-less'),
    minifyCSS = require('gulp-minify-css'),
    include = require("gulp-include"),
    uglify = require('gulp-uglify'),
    ghPages = require('gulp-gh-pages');

var distDir = './dist/',
    devHtmlPath = ['./templates/pages/index.html'],
    devLessDir = ['./less/*.less'],
    devLessMain = ['./less/main.less'],
    devScriptsDir = ['./js/*.js'],
    devScriptsMain = ['./js/main.js'];

gulp.task('default', ['build', 'connect', 'watch']);

gulp.task('connect', function() {
    connect.server({
        port: 8080,
        root: distDir,
        livereload: true,
    });
});

gulp.task('watch', function() {
    gulp.watch(devHtmlPath, ['build']);
    gulp.watch(devLessDir, ['build']);
    gulp.watch(devScriptsDir, ['build']);
});

gulp.task('clean', function() {
    return del([distDir]);
});

gulp.task('cname', ['clean'], function() {
    return gulp.src('./CNAME')
        .pipe(gulp.dest(distDir));
});

gulp.task('html', ['clean'], function() {
    return gulp.src(devHtmlPath)
        .pipe(minifyHTML())
        .pipe(gulp.dest(distDir))
        .pipe(connect.reload());
});

gulp.task('less', ['clean'], function() {
    return gulp.src(devLessMain)
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(gulp.dest(distDir + 'css/'))
        .pipe(connect.reload());
});

gulp.task('scripts', ['clean'], function() {
    return gulp.src(devScriptsMain)
        .pipe(include())
        .pipe(uglify({
            preserveComments: 'license',
        }))
        .pipe(gulp.dest(distDir + 'js/'))
        .pipe(connect.reload());
});

gulp.task('build', ['cname', 'html', 'less', 'scripts']);

gulp.task('deploy', ['build'], function() {
    return gulp.src(distDir + '**/*')
        .pipe(ghPages({
            branch: 'gh-pages',
            message: 'Build and deploy',
    }));
});
