/**
 * @Author zhangyi
 * @Date 2019/1/21
 **/
const gulp = require('gulp')
const babel = require('gulp-babel')

gulp.task('build:lib', () =>
    gulp.src('../src/lib/**/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('../lib'))
);
