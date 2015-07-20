var gulp = require('gulp');
var less = require('gulp-less');

// LESS
gulp.task('less', function() {
    gulp.src('resources/assets/less/app.less')
        .pipe(less())
        .pipe(gulp.dest('public/css'));
});

// COPY
gulp.task('copy', function(){
    // Fonts
    gulp.src([
        'bower_components/bootstrap/dist/fonts/*',
        'bower_components/font-awesome/fonts/*'
    ])
    .pipe(gulp.dest('public/fonts/'));

    // JS
    gulp.src([
        'bower_components/jquery/dist/jquery.min.*',
        'bower_components/bootstrap/dist/js/bootstrap.min.js',
        'bower_components/angular*/**/*min.*{js,map}',
        'bower_components/owl.carousel/dist/owl.carousel.min.js'
    ])
    .pipe(gulp.dest('public/js/vendor'));
});

// WATCH
gulp.task('watch', function(){
    gulp.watch('resources/assets/less/**', ['less']);
});
