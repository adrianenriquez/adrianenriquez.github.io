var gulp = require('gulp');
var less = require('gulp-less');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

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
        'resources/assets/vendor/owl-carousel/owl.carousel.min.js',
        'bower_components/countUp.js/dist/countUp.min.js',
        'bower_components/waypoints/lib/jquery.waypoints.min.js',
        'bower_components/fastclick/lib/fastclick.js'
    ])
    .pipe(gulp.dest('public/js/vendor'));
});

// BUILD
gulp.task('build', function(){

    // CSS
    gulp.src('public/css/app.css')
        .pipe(minifyCss())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('public/dist/css'));

    // Copy Fonts
    gulp.src('public/fonts/*')
    .pipe(gulp.dest('public/dist/fonts'));

    // JS Concat
    gulp.src([
            'public/js/config.js',
            'public/js/main.js',
            'public/js/app.js',
            'public/js/directives.js',

            'public/js/controllers/home.js',
            'public/js/controllers/work.js',
            'public/js/controllers/section.js'
        ])
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public/dist/js'));
});

// WATCH
gulp.task('watch', function(){
    gulp.watch('resources/assets/less/**', ['less']);
});
    
    
    

    
    