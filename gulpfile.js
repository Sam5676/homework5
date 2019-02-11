let gulp        = require('gulp'),
    sass        = require('gulp-sass');

gulp.task('sass', function(){
    return gulp.src('app/sass/**/*.{sass,scss}')
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(gulp.dest('app/styles'))
});

gulp.task('watch', function() {
    gulp.watch('app/sass/**/*.{sass,scss}' , gulp.parallel('sass'));
});

gulp.task('default', gulp.parallel('watch'));