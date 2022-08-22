import gulp from 'gulp'
import dartSass from 'sass'
import gulpSass from 'gulp-sass'

import { path } from '../config.js'

const sass = gulpSass(dartSass)

export const scssTask = () =>
  gulp
    .src(path.scss)
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest(path.build.css))

export const stylesWatch = () => gulp.watch(path.scss, scssTask)
