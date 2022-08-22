import gulp from 'gulp'
import clean from 'gulp-clean'
import bs from 'browser-sync'

import { path } from '../config.js'

const browserSync = bs.create()

export const cleanBuild = () =>
  gulp.src(path.build.self, { allowEmpty: true }).pipe(clean())

export const htmlWatch = () => gulp.watch(path.html, browserSync.reload)
