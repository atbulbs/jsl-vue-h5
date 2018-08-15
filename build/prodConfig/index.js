const entry = require('./entry')
const output = require('./output')
const rules = require('./rules')
const plugins = require('./plugins')
const optimization = require('./optimization')
const externals = require('./externals')

const prodConfig = {
  entry,
  output,
  module: {
    rules
  },
  plugins,
  optimization,
  externals
}

module.exports = prodConfig
