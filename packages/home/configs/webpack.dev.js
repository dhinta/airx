const { merge } = require('webpack-merge');
const { DefinePlugin } = require('webpack');
const { ModuleFederationPlugin } = require('webpack').container;

const commonConfig = require('./webpack.common');

const devConfig = {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    port: 5002,
    historyApiFallback: true,
    open: true,
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
      PRODUCTION: JSON.stringify(false),
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
