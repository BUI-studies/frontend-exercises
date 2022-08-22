import gulp from 'gulp'
import browserify from 'browserify'
import source from 'vinyl-source-stream'
import buffer from 'vinyl-buffer'

import { path } from '../config.js'

export const jsTask = () =>
  browserify(path.mainJS, { debug: true })
    .transform('babelify', { presets: ['@babel/preset-env'] })
    .bundle()
    .on('error', function browserifyError(error) {
      console.log(error.stack)
      this.emit('end')
    })
    .pipe(source('main.min.js'))
    .pipe(buffer())
    .pipe(gulp.dest(path.build.js))

export const jsWatch = () => gulp.watch(path.js, jsTask)
