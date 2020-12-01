/* eslint import/no-extraneous-dependencies: "off" */
const baseConfig = require('@lzygmanski/micro-react-config/lib/jest.config');

module.exports = {
  ...baseConfig,
  setupFilesAfterEnv: ['<rootDir>src/setupTests.js'],
  // Your internal config
};
