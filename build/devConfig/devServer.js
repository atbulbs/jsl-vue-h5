const devServerConfig = {
  host: 'localhost',
  port: 8003,
  overlay: {
    errors: true
  },
  historyApiFallback: true,
  hot: true,
  open: true,
  openPage: 'jsl-vue-h5/home'
}

module.exports = devServerConfig
