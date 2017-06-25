var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/App.js'
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-2'],
          plugins: ['transform-object-assign']
        }
      }
    ]
  },
  stats: {
    colors: true
  },
  devtool: 'source-map'
};

