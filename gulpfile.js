var gulp = require('gulp'),
    connect = require('gulp-connect'),
    del = require('del'),
    minifyHTML = require('gulp-minify-html'),
    less = require('gulp-less'),
    minifyCSS = require('gulp-minify-css'),
    ghPages = require('gulp-gh-pages');

var distDir = './dist/',
    devHtmlPath = ['./index.html'],
    devLessPath = ['./less/*.less'];

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

gulp.task('build', ['clean', 'cname', 'html', 'less']);

gulp.task('deploy', ['build'], function() {
    return gulp.src(distDir + '**/*')
        .pipe(ghPages({
            branch: 'gh-pages',
            message: 'Build and deploy',
    }));
});
