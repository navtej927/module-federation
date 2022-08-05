const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        loader: require.resolve("babel-loader"),
      }
    ],
  },
  devServer: {
    port: 3002,
    historyApiFallback: true
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "pdp",
      filename: "remoteEntry.js",
      remotes: {
        home: "home@http://localhost:3001/remoteEntry.js"
      },
      exposes: {
      },
      shared: ["react", "react-dom"]
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    })
  ]
}