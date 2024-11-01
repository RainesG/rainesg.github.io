const {
  override,
  addWebpackAlias,
  addWebpackModuleRule,
  addWebpackPlugin,
  setWebpackPublicPath,
} = require("customize-cra");
const path = require("path");
const speedMeasurePlugin = require("speed-measure-webpack-plugin");

module.exports = override(
  // {
  //   allowImportingTsExtensions: true,
  // },
  addWebpackModuleRule({
    test: /\.svg$/,
    use: "@svgr/webpack",
  }),
  addWebpackPlugin(new speedMeasurePlugin()),
  addWebpackAlias({ "@": path.resolve("./src") }),
  setWebpackPublicPath("./")
);
