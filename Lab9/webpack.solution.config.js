var path = require('path');

module.exports = {
  entry: {
    app: ['./solution.js']
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    historyApiFallback: true,
    hot: false,
    inline: true,
    progress: false,
    noInfo: false
  },
  debug: true,
  eslint: {
    emitError: true
  },

  // devtool: 'inline-source-map',
  devtool: 'eval-source-map',
  module: {    
    loaders: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        loaders: [
          'babel-loader?optional[]=runtime&stage=0'
        ]
      },
      {test: /\.js$/, loader: "eslint-loader", exclude: /node_modules/}
    ]
  }
};
