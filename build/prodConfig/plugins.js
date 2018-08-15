const commonPlugins = require('../commonPlugins')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const prodPlugins = [
  new MiniCssExtractPlugin({
    filename: 'jsl-vue-h5.min.css'
  })
]

const pluginsConfig = [...commonPlugins, ...prodPlugins]

module.exports = pluginsConfig
