var path = require('path');

module.exports = {
  context: __dirname,
  mode: 'development',
  target: 'web',
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'client', 'public'),
    filename: 'bundle.js',
  },
  devServer: {
    port: "3000",
    static: ["./client/public"],
    open: true,
    hot: true,
    liveReload: true
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
          loader: 'babel-loader',
          query: {
            presets: ['@babel/env', '@babel/react']
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      }
    ]
  }
};
