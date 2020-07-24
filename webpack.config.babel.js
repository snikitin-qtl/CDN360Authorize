import webpack from 'webpack'
import path from 'path'

const name = 'CDN360DynamicAuth'

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
    './src/CDN360DynamicAuth.js'
  ],
  output:{
    path: path.join(__dirname,
      './build/com.quantil.CDN360DynamicAuth'),
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
