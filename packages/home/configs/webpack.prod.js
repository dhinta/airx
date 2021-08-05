const { merge } = require('webpack-merge');
const { DefinePlugin } = require('webpack');
const { ModuleFederationPlugin } = require('webpack').container;

const commonConfig = require('./webpack.common');

const prodConfig = {
  mode: 'production',
  devtool: 'source-map',
  output: {
    filename: '[name].[contenthash].js',
    clean: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'home',
      filename: 'remoteEntry.js',
      exposes: {
        './homeApp': './src/bootstrap.js',
      },
    }),
    new DefinePlugin({
      PRODUCTION: JSON.stringify(true),
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
