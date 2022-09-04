const { path } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // devtool: none -> removes the eval business (just lets you read better whats going on behind the scenes)
  entry: {
    index: "./src/index.js",
    menu: "./src/pages/menu.js",
    home: "./src/pages/home.js",
    about: "./src/pages/about.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Paddy's Pub",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
