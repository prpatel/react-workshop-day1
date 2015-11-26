var path = require('path');

module.exports = {
  entry: {
    app: ['./app.js']
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
    progress: true,
    proxy: {
            '/lunches': {
                target: 'http://connect-js.com:3000/',
                secure: false,
            }
          }
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        loaders: [
          'babel-loader?optional[]=runtime&stage=0'
        ]
      }
    ]
  }
};
