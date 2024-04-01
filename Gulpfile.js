const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const sourcemaps = require('gulp-sourcemaps')
const imagemin = require('gulp-imagemin')

function style() {
    return gulp.src('./source/style/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('build/style/'))
}

function images() {
    return gulp.src('./source/imgs/*.png')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/imgs'))
}

exports.default = gulp.parallel(style, images)

exports.watch = function() {
    gulp.watch('./source/style/*.scss', gulp.series(style, images))
}
