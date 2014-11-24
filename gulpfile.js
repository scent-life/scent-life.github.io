var gulp = require('gulp'),
    less = require('gulp-less'),
    livereload = require('gulp-livereload');

var homePath  = './',
    stylePath = homePath + '/css';

gulp.task('less', function() {
    return gulp.src(stylePath + '/*.less')
        .pipe(less({
            compress: true
        }))
        .pipe(gulp.dest(stylePath));
});

gulp.task('watch', function() {
    gulp.watch(stylePath + '/*.less', ['less']);
    gulp.watch(stylePath + '/*.css').on('change', livereload.changed);
    gulp.watch(homePath  + '/*.html').on('change', livereload.changed);
});

gulp.task('default', [
    'less',
    'watch'
]);
