/* eslint import/no-extraneous-dependencies: "off" */
require('dotenv').config();

const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, argv) => {
  // eslint-disable-next-line
  const isProduction = argv.mode === 'production';

  return {
    entry: './src/index.js',
    output: {
      filename: '[name].js',
      path: path.resolve(process.cwd(), 'dist'),
      publicPath: '/',
      library: {
        type: 'umd',
      },
    },
    devServer: {
      contentBase: path.resolve(process.cwd(), 'dist'),
      historyApiFallback: true,
      host: '0.0.0.0',
      hotOnly: true,
    },
    devtool: 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
        },
        {
          test: /\.s[ac]ss$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
        },
        {
          test: /\.less$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader'],
        },
        {
          test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
          type: 'asset/inline',
        },
      ],
    },
    resolve: { extensions: ['*', '.js', '.jsx'] },
    plugins: [
      new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
      new MiniCssExtractPlugin({
        filename: '[name].css',
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      }),
    ],
    optimization: {
      minimizer: [`...`, new CssMinimizerPlugin()],
    },
  };
};
