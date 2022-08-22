import gulp from 'gulp'
import server from './gulp/tasks/server.js'
import { assetsTask, assetsWatch } from './gulp/tasks/assets.js'
import { cleanBuild, htmlWatch } from './gulp/tasks/clean.js'
import { jsTask, jsWatch } from './gulp/tasks/script.js'
import { scssTask, stylesWatch } from './gulp/tasks/styles.js'

export const build = gulp.series(cleanBuild, assetsTask, jsTask, scssTask)

export const watch = gulp.series(
  build,
  server,
  gulp.parallel(htmlWatch, stylesWatch, jsWatch, assetsWatch)
)
