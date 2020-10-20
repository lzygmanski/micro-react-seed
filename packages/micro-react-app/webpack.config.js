/* eslint import/no-extraneous-dependencies: "off" */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('@lzygmanski/micro-react-config');

module.exports = (env, argv) => {
  const config = baseConfig(env, argv);

  return {
    ...config,
    plugins: [
      ...config.plugins,
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public/index.html'),
        filename: 'index.html',
        title: process.env.APP_TITLE || 'My app',
      }),
    ],
    // Your internal config
  };
};
