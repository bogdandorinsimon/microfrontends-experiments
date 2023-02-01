const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 8081,
  },
  plugins: [
    new ModuleFederationPlugin({
      // identical to the string from remotes url: 'products@url'
      name: "products",
      filename: "remoteEntry.js",
      // decide which parts are exposed
      exposes: {
        // so if in the host, ProductsIndex is imported, we will give the src/index file
        "./ProductsIndex": "./src/index",
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
