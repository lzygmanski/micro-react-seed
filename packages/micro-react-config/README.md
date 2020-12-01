# `@lzygmanski/micro-react-config`

> Simple config package for react applications and modules

## Usage

### Babel config

In your jest.config.js

```js
const baseConfig = require('@lzygmanski/micro-react-config/lib/jest.config');

module.exports = {
  ...baseConfig,
  setupFilesAfterEnv: ['<rootDir>src/setupTests.js'],
  // Your internal config
};
```

### Babel config

In your babel.config.js

```js
const baseConfig = require('@lzygmanski/micro-react-config/lib/babel.config');

module.exports = {
  ...baseConfig,
  // Your internal config
};
```

### Postcss config

In your postcss.config.js

```js
const baseConfig = require('@lzygmanski/micro-react-config/lib/postcss.config');

module.exports = {
  ...baseConfig,
  // Your internal config
};
```

### Webpack config

In your webpack.config.js

```js
const baseConfig = require('@lzygmanski/micro-react-config');

module.exports = (env, argv) => ({
  ...baseConfig(env, argv),
  // Your internal config
});
```

Module config

```js
const baseConfig = require('@lzygmanski/micro-react-config');

module.exports = (env, argv) => ({
  ...baseConfig(env, argv),
  externals: {
    react: 'react',
    reactDOM: 'react-dom',
  },
});
```

Application config

```js
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
  };
};
```
