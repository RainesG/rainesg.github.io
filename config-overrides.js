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
  addWebpackModuleRule({
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      "style-loader",
      // Translates CSS into CommonJS
      "css-loader",
      // Compiles Sass to CSS
      "sass-loader",
    ],
  }),
  addWebpackPlugin(new speedMeasurePlugin()),
  addWebpackAlias({ "@": path.resolve("./src") }),
  // setWebpackPublicPath("./")
);
