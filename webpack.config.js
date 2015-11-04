var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './src/app.jsx',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.jsx$/, exclude: /(node_modules|bower_components)/, loader: 'babel' },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules') }
    ]
  },
  externals: {
    'react': 'React',
    'underscore': '_'
  },
  plugins: [
    new ExtractTextPlugin('style.css', { allChunks: true })
  ]
}