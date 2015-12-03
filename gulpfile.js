var gulp = require('gulp'),
    del = require('del'),
    ghPages = require('gulp-gh-pages');

var distDir = './dist/';

gulp.task('default', function() {});

gulp.task('clean', function() {
    del([distDir + '**']);
});

gulp.task('html', function() {
    gulp.src('./index.html')
        .pipe(gulp.dest(distDir));
});

gulp.task('build', ['clean', 'html']);

gulp.task('deploy', ['build'], function() {
    return gulp.src(distDir + '**/*')
        .pipe(ghPages({
            branch: 'gh-pages',
            message: 'Build and deploy',
    }));
});
