const { merge } = require('webpack-merge');
const { DefinePlugin } = require('webpack');
const { ModuleFederationPlugin } = require('webpack').container;

const commonConfig = require('./webpack.common');

const devConfig = {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    port: 5003,
    historyApiFallback: true,
    open: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'auth',
      filename: 'remoteEntry.js',
      exposes: {
        './authApp': './src/bootstrap.js',
      },
    }),
    new DefinePlugin({
      PRODUCTION: JSON.stringify(false),
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
