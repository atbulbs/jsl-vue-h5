const webpack = require('webpack')
const HTMLPlugin = require('html-webpack-plugin')
const commonPlugins = require('../commonPlugins')
const resolve = require('../utils/resolve')

const devPlugins = [
  new webpack.HotModuleReplacementPlugin(),
  new HTMLPlugin({
    template: resolve('build/template.html'),
    minify: {
      minifyCSS: true,
      minifyJS: true
    },
    chunksSortMode: 'none'
  })
]

const pluginsConfig = [...commonPlugins, ...devPlugins]

module.exports = pluginsConfig
