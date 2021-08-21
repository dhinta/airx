const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const { ProvidePlugin } = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, '../src/index.js'),
  mode: 'production',
  output: {
    filename: './index.js',
    path: path.resolve(__dirname, '../dist'),
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  externals: [nodeExternals()],
  resolve: {
    extensions: ['*', '.js', '.css'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: {
                filter: (url, resourcePath) => !url.includes('/images'),
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              useRelativePaths: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ProvidePlugin({
      React: 'react',
      ReactDOM: 'react-dom',
    }),
  ],
};
