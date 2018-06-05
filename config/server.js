module.exports = {
  notify: false,
  port: 9001,
  server: {
    baseDir: ['.tmp', 'app'],
    routes: {
      '/bower_components': 'bower_components'
    }
  }
}
