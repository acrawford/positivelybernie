var gulp = require('gulp')
    ghPages = require('gulp-gh-pages');

gulp.task('default', function() {});

gulp.task('deploy', function() {
    return gulp.src('./index.html')
        .pipe(gulp.dest('./dist/'));
    return gulp.src('./dist/**/*')
        .pipe(ghPages({
            branch: 'gh-pages',
            message: 'Deployment at [timestamp].',
        }));
});
