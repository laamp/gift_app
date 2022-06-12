var path = require('path');

module.exports = {
  mode: 'development',
  target: 'web',
  entry: './client/src/index.js',
  output: {
    path: path.resolve(__dirname, 'client', 'public'),
    filename: 'bundle.js',
  },
  devServer: {
    port: "3000",
    static: ["./client/public"],
    open: true,
    hot: true,
    liveReload: true,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json', '*']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};
