const resolve = require('../utils/resolve')
const isDev = require('../utils/isDev')

const resolveConfig = {
  extensions: ['.js', '.vue', '.styl', '.json', '.jsx'],
  alias: {
    'vue': isDev ? 'vue/dist/vue.js' : 'vue/dist/vue.runtime.min.js',
    '@': resolve('src'),
    'components': resolve('src/components'),
    'pages': resolve('src/pages'),
    'js': resolve('src/assets/js'),
    'libs': resolve('src/libs'),
    'styles': resolve('src/assets/styles'),
    'images': resolve('src/assets/images')
  }
}

module.exports = resolveConfig
