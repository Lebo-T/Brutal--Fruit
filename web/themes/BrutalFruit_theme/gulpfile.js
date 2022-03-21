var gulp = require ('gulp');
var sass = require ('gulp-sass')(require('sass'));

gulp.task('sass', function(){
    return gulp.src('scss/custom.scss')
        .pipe(sass().on('Error', sass.logError))
        .pipe(gulp.dest('css'));

});

gulp.task('sass:watch', function(){
    gulp.watch('scss/custom.scss', ['sass']);
});

gulp.task('default', function(done){
    console.log('complete');

    done();
});