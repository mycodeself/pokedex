const path = require('path');

module.exports = {
  entry: [
    './src/index.js',
    './assets/scss/index.scss'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/build')
  },
  module: {

    rules: [
        {
          test: /\.scss$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'bundle.css',
              }
            },
            {
              loader: 'extract-loader'
            },
            {
              loader: 'css-loader'
            },
            {
              loader: 'postcss-loader'
            },
            {
              loader: 'sass-loader'
            }
          ]
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: "babel-loader"
        }, {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: "babel-loader"
        }
      ],
  }
};