'use strict';

const webpack = require('webpack');
const path = require('path');

const bundleFolder = "./wwwroot/assets/";
const srcFolder = "./App/";

const adminSpaIndex = './front/admin/src/index.jsx';
const paymentSpaIndex = './front/payment/src/index.jsx';

module.exports = {
  entry: { 'admin': adminSpaIndex, 'payment': paymentSpaIndex },
  devtool: "source-map",
  output: {
    filename: "[name].bundle.js",
    publicPath: 'assets/',
    path: path.resolve(__dirname, bundleFolder)
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        query: {
          presets: ["es2015", "stage-0", "react"]
        } 
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(jpe?g|gif|png)$/,
        loader: "file-loader"
      }
    ]
  },
  plugins: [
  ]
};