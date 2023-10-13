/* eslint-env node */
const path = require('path');

module.exports = {
  entry: path.join(__dirname, '/src/main.ts'),
  output: {
    filename: 'app.bundle.js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Match .ts and .tsx files
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, '/'),
    },
    port: 8080,
    host: 'localhost',
    open: true, // Automatically open in the browser
    historyApiFallback: true, // Allows for using client-side routing
  },
};