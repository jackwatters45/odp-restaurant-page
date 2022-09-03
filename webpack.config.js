const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // mode -> development makes webpack stop minifying the output files
  mode: "development",
  // devtool: none -> removes the eval business (just lets you read better whats going on behind the scenes)
  entry: {
    index: "./src/index.js",
    menu: "./src/menu.js",
    home: "./src/home.js",
    contact: "./src/contact.js",
  },
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Charlie's Milk Steaks",
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
