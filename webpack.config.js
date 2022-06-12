const path = require("path");
const HtmlWebpackplugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/front/index.tsx",
  output: {
    path: path.join(__dirname, "dist/"),
    publicPath: "/",
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: "ts-loader"
        }
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader"
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackplugin({
      template: './public/index.html'
    })
  ]
};
