
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');


module.exports = {
  resolve: {
    fallback: {
      os: false,
      crypto: false,
    },
    plugins: [
      new NodePolyfillPlugin()
    ]
  }
};