const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    //publicPath: "heep://localhost:3001"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        loader: require.resolve("babel-loader"),
      }
    ],
  },
  devServer: {
    port: 3001,
    historyApiFallback: true
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "home",
      filename: "remoteEntry.js",
      remotes: {
      },
      exposes: {
        "./Header": "./src/Header.js"
      },
      shared: ["react", "react-dom"]
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    })
  ]
}