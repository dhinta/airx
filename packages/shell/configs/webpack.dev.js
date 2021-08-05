const { DefinePlugin } = require('webpack');
const { merge } = require('webpack-merge');
const { ModuleFederationPlugin } = require('webpack').container;

const commonConfig = require('./webpack.common');

const devConfig = {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    port: 5000,
    historyApiFallback: true,
    open: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'host',
      remotes: {
        '@airx-header': 'header@http://localhost:5001/remoteEntry.js',
      },
    }),
    new DefinePlugin({
      PRODUCTION: JSON.stringify(false),
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
