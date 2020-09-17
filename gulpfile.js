var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    minify = require('gulp-minify');



// css task
gulp.task('css', async function () {
    return gulp.src('src/Assets/sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: "compressed"
        }).on('erorr', sass.logError))
        .pipe(autoprefixer('last 2 version'))
        .pipe(concat('main.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('src/Assets/css'))
})

//js task
// gulp.task('js', async function () {
//     return gulp.src('src/js/*.js')
//         .pipe(sourcemaps.init())
//         .pipe(concat('main.js'))
//         .pipe(minify())
//         .pipe(sourcemaps.write('.'))
//         .pipe(gulp.dest('public/js'))
// });

// watch task
gulp.task('watch', async function () {
    gulp.watch('src/Assets/sass/**/*.scss', gulp.series('css'));
    // gulp.watch('src/js/*.js', gulp.series('js'));
});

//defaullt task
gulp.task('default', gulp.series('watch'));