var gulp = require('gulp'),
    del = require('del'),
    ghPages = require('gulp-gh-pages');

var distDir = './dist/';

gulp.task('default', function() {});

gulp.task('clean', function() {
    return del([distDir + '**']);
});

gulp.task('cname', function() {
    return gulp.src('./CNAME')
        .pipe(gulp.dest(distDir));
});

gulp.task('html', function() {
    return gulp.src('./index.html')
        .pipe(gulp.dest(distDir));
});

gulp.task('build', ['clean', 'cname', 'html']);

gulp.task('deploy', ['build'], function() {
    return gulp.src(distDir + '**/*')
        .pipe(ghPages({
            branch: 'gh-pages',
            message: 'Build and deploy',
    }));
});
