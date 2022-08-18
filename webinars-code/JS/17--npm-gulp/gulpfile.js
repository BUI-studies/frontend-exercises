import gulp from 'gulp'
import dartSass from 'sass'
import gulpSass from 'gulp-sass'
import bs from 'browser-sync'
import clean from 'gulp-clean'

const sass = gulpSass(dartSass)
const browserSync = bs.create()

const htmlTask = () => gulp.src('./src/*.html').pipe(gulp.dest('build'))

const imgTask = () =>
  gulp.src('./src/assets/img/**/*').pipe(gulp.dest('build/img'))

const fontsTask = () =>
  gulp.src('./src/assets/fonts/**/*').pipe(gulp.dest('build/fonts'))

const jsTask = () => gulp.src('./src/js/**/*').pipe(gulp.dest('build/js'))

const scssTask = () =>
  gulp
    .src('./src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('build/css'))

const serve = callback => {
  browserSync.init({
    server: {
      baseDir: './build'
    },
    files: [
      `build/*.html`,
      `build/css/*.css`,
      `build/js/*.js`,
      {
        match: `build/img/**/*`,
        fn() {
          this.reload()
        }
      }
    ]
  })

  callback()
}

const cleanTask = () => gulp.src('build', { allowEmpty: true }).pipe(clean())

gulp.task(
  'default',
  gulp.series(cleanTask, htmlTask, imgTask, fontsTask, jsTask, scssTask, serve)
)

gulp.watch('./src/*.html', htmlTask)
gulp.watch('./src/scss/**/*', scssTask)
gulp.watch('./src/assets/img/**/*', imgTask)
gulp.watch('./src/assets/fonts/**/*', fontsTask)
gulp.watch('./src/js/**/*', jsTask)

export const watch = gulp.series(
  cleanTask,
  htmlTask,
  imgTask,
  fontsTask,
  jsTask,
  scssTask,
  serve
)
