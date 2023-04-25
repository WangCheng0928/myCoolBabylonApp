const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js'
  },
  devServer: {
    static: './dist',
    port: 4000
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'development',
      template: './index.html'
    }),
    new CopyWebpackPlugin(
      {
        patterns: [
          {
            from: path.join(__dirname, "./scene.babylon"),
            to: path.join(__dirname, "./dist/scene.babylon")
          }
        ]
      }
    ),
    new webpack.ProvidePlugin({
      earcut: 'earcut'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      // {
      //   test: /\.babylon/,
      //   type: 'asset/resource'
      // }
    ]
  },
  optimization: {
    runtimeChunk: 'single',
  },
}