import webpack from 'webpack'
import path from 'path'

const name = 'CDN360DynamicAuth'

const production = process.env.NODE_ENV === 'production'

const config = {
  target: 'web',
  entry: [
    'immutable',
    './src/CDN360DynamicAuth.js'
  ],
  output:{
    path: path.join(__dirname,
      './build/com.quantil.CDN360DynamicAuth'),
    pathInfo: true,
    publicPath: '/build/',
    filename: name+'.js'
  },
  module: {
    loaders: [
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
