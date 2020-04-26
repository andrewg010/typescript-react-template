const config = require('./webpack.config.js')

config.mode = 'development'
config.entry.push('react-hot-loader/patch', 'webpack-hot-middleware/client')
config.devtool = 'cheap-module-eval-source-map'
config.resolve.alias['react-dom'] = '@hot-loader/react-dom'

module.exports = config
