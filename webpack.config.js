var path = require('path');
var dotenv = require('dotenv').config();

module.exports = {
  mode: 'development',
  target: 'web',
  entry: './client/src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'client', 'public'),
    filename: 'bundle.js',
  },
  devServer: {
    port: process.env.WEBPACK_PORT,
    static: ['./client/public'],
    open: false,
    hot: true,
    liveReload: true,
    proxy: {
      '/api': {
        target: `http://localhost:${process.env.PORT}`,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.tsx', '.ts'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
    ],
  },
};
