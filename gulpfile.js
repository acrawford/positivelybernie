var gulp = require('gulp');

gulp.task('default', function() {
    return gulp.src('./index.html')
        .pipe(gulp.dest('./dist/'));
});
