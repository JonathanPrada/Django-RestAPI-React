var gulp = require('gulp');
var minifyCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');

gulp.task('minify-css', function (){
    return gulp.src('C:/Users/Broski/PycharmProjects/Music/static/css/*.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('C:/Users/Broski/PycharmProjects/Music/static/build/css/'))
});

gulp.task('uglify', function() {
    return gulp.src('C:/Users/Broski/PycharmProjects/Music/static/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('C:/Users/Broski/PycharmProjects/Music/static/build/js/'))
});

gulp.task('minify', ['minify-css', 'uglify']);
