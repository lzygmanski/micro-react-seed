/* eslint import/no-extraneous-dependencies: "off" */
const baseConfig = require('@lzygmanski/micro-react-config');

module.exports = (env, argv) => ({
  ...baseConfig(env, argv),
  externals: {
    react: 'react',
    reactDOM: 'react-dom',
  },
  // Your internal config
});
