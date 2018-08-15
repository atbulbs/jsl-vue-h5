const webpack = require('webpack')
const commonPlugins = require('../commonPlugins')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const prodPlugins = [
  new MiniCssExtractPlugin({
    filename: 'jsl-vue-h5.min.css'
  }),
  new webpack.NamedChunksPlugin()
]

const pluginsConfig = [...commonPlugins, ...prodPlugins]

module.exports = pluginsConfig
