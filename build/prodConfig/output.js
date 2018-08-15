const resolve = require('../utils/resolve')

const outputConfig = {
  path: resolve('dist'),
  publicPath: '',
  filename: 'jsl-vue-h5.min.js',
  library: 'JslVueH5',
  libraryTarget: 'umd',
  umdNamedDefine: true
}

module.exports = outputConfig
