const devServerConfig = {
  host: 'localhost',
  port: 8007,
  overlay: {
    errors: true
  },
  historyApiFallback: true,
  hot: true,
  open: true,
  openPage: 'jsl-vue-h5/home'
}

module.exports = devServerConfig
