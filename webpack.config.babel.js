import webpack from 'webpack'
import path from 'path'

const name = 'CDN360Authorize'

const config = {
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  target: 'web',
  mode: 'production',
  entry: [
    'immutable',
    './src/CDN360Authorize.js'
  ],
  output:{
    path: path.join(__dirname,
      './build/com.quantil.CDN360Authorize'),
    publicPath: '/build/',
    filename: name+'.js'
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, 'src'),
        ],
        test: /\.jsx?$/,
      }
    ]
  }
}
module.exports = config
