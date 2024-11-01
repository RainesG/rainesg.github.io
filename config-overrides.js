const {
  override,
  addWebpackAlias,
  addWebpackModuleRule,
  addWebpackPlugin,
  setWebpackPublicPath,
} = import("customize-cra");
const path = import("path");
const speedMeasurePlugin = import("speed-measure-webpack-plugin");

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
