var gulp = require('gulp'),
    sass = require('gulp-sass'),
    globally = require('gulp-sass-glob');

gulp.task('sass', function () {
    return gulp
        .src('sass/**/*.scss')
        .pipe(globally())
        .pipe(sass({sourceComments: true, errLogToConsole: true, outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('sass/**/*.scss', ['sass']);
});