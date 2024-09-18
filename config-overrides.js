const {
  override,
  addWebpackAlias,
  addWebpackModuleRule,
  addWebpackPlugin,
} = require("customize-cra");
const path = require("path");

module.exports = override(
  {
    allowImportingTsExtensions: true,
  },
  addWebpackModuleRule({
    test: /\.svg$/,
    use: "@svgr/webpack",
  }),
  addWebpackPlugin({
    use: "speed-measure-webpack-plugin",
  })
);
