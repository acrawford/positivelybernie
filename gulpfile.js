var gulp = require('gulp')
    ghPages = require('gulp-gh-pages');

gulp.task('default', function() {});

gulp.task('build', function() {
    return gulp.src('./index.html')
        .pipe(gulp.dest('./dist/'));
});

gulp.task('deploy', ['build'], function() {
    return gulp.src('./dist/**/*')
        .pipe(ghPages({
            branch: 'gh-pages',
            message: 'Build and deploy',
    }));
});
