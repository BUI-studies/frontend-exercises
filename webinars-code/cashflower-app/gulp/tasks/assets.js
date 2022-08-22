import gulp from 'gulp'
import bs from 'browser-sync'

import { path } from '../config.js'

const browserSync = bs.create()

const imgTask = () => gulp.src(path.img).pipe(gulp.dest(path.build.img))
const fontsTask = () => gulp.src(path.fonts).pipe(gulp.dest(path.build.fonts))

export const assetsTask = gulp.parallel(imgTask, fontsTask)

export const assetsWatch = () => gulp.watch(path.assets, assetsTask)
