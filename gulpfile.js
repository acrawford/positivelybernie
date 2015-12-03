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
    devHtmlPath = ['./index.html'],
    devLessPath = ['./less/main.less'],
    devScriptsPath = ['./js/main.js'];

gulp.task('default', ['build', 'connect', 'watch']);

gulp.task('connect', function() {
    connect.server({
        port: 8080,
        root: distDir,
        livereload: true,
    });
});

gulp.task('watch', function() {
    gulp.watch(devHtmlPath, ['html']);
    gulp.watch(devLessPath, ['less']);
    gulp.watch(devScriptsPath, ['scripts']);
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
    return gulp.src(devLessPath)
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(gulp.dest(distDir + 'css/'))
        .pipe(connect.reload());
});

gulp.task('scripts', ['clean'], function() {
    return gulp.src(devScriptsPath)
        .pipe(include())
        .pipe(uglify({
            preserveComments: 'license',
        }))
        .pipe(gulp.dest(distDir + 'js/'))
        .pipe(connect.reload());
});

gulp.task('build', ['clean', 'cname', 'html', 'less', 'scripts']);

gulp.task('deploy', ['build'], function() {
    return gulp.src(distDir + '**/*')
        .pipe(ghPages({
            branch: 'gh-pages',
            message: 'Build and deploy',
    }));
});
