const {
    override,
    addWebpackAlias,
    addWebpackModuleRule
} = require('customize-cra')
const path = require('path')

module.exports = override(
    // add an alias for "page" imports
    addWebpackAlias({
        pages: path.resolve(__dirname, "src/pages")
    }),
    addWebpackModuleRule({
        test: /\.svg$/,
        use: '@svgr/webpack'
    })
);