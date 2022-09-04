const path = require("path");
const common = require("./webpack.common.js");
const {merge} = require("webpack-merge");

module.exports = merge(common, {
  // mode -> development makes webpack stop minifying the output files
  mode: "development",
  // devtool: none -> removes the eval business (just lets you read better whats going on behind the scenes)
//   devtool: "inline-source-map",
//   devServer: {
//     static: "./dist",
//   },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
});