/* eslint import/no-extraneous-dependencies: "off" */
const baseConfig = require('@lzygmanski/micro-react-config');

module.exports = (env, argv) => ({
  ...baseConfig(env, argv),
  externals: {
    react: 'react',
    reactDOM: 'react-dom',
    redux: 'redux',
    'react-redux': 'react-redux',
    lodash: {
      commonjs: 'lodash',
      amd: 'lodash',
      root: '_',
    },
  },
});
