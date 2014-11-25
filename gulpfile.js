var gulp = require('gulp'),
    less = require('gulp-less'),
    livereload = require('gulp-livereload'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

var homePath  = './',
    stylePath = homePath + '/css';

gulp.task('less', function() {
    return gulp.src(stylePath + '/*.less')
        .pipe(less({
            compress: true
        }))
        .pipe(gulp.dest(stylePath))
        .pipe(reload({stream:true}));
});

gulp.task('watch', function() {
    gulp.watch(stylePath + '/*.less', ['less']);
    gulp.watch(stylePath + '/*.css').on('change', livereload.changed);
    gulp.watch(homePath  + '/*.html').on('change', livereload.changed);
});

// Static server
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: './'
        }
    });
});

gulp.task('dev', [
    'less',
    'watch',
    'browser-sync'
]);

gulp.task('default', [
    'less',
    'watch'
]);
