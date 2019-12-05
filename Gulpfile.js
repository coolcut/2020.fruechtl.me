const gulp = require("gulp");
const sass = require("gulp-sass");
const cssnano = require('gulp-cssnano');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('css', function() {
  return gulp.src('./src/scss/main.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(cssnano())
    .on('error', sass.logError)
    .pipe(gulp.dest('./css'));
});

gulp.task("watch", function() {
  gulp.watch('./src/scss/**/*.scss', gulp.parallel('css'));
});

gulp.task('build', gulp.parallel('css'));
