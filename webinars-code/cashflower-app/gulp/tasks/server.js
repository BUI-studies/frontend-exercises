import browserSync from 'browser-sync'
import { path } from '../config.js'

const server = callback => {
  browserSync.create().init({
    server: {
      baseDir: path.root
    },
    files: [
      path.build.html,
      path.build.css,
      path.build.js,
      {
        match: path.build.img,
        fn() {
          this.reload()
        }
      }
    ]
  })

  callback()
}

export default server
