const webpackRules = require("./config/rules")
const webpackPlugins = require("./config/plugins")

module.exports = {
  module: {
    rules: webpackRules
  },
  plugins: webpackPlugins
}
