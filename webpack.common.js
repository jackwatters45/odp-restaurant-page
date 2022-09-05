const path  = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // devtool: none -> removes the eval business (just lets you read better whats going on behind the scenes)
  entry: {
    index: "./src/index.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      title: "Paddy's Pub",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
    ],
  },
};
