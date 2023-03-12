/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.join(__dirname, "build"),
    filename: "index.[contenthash].bundle.js",
    publicPath: "/",
  },
  devtool: "source-map",
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  devServer: {
    historyApiFallback: true,
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg|ico)$/,
        use: ["file-loader"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "static", "index.html"),
      favicon: path.join(__dirname, "static", "favicon.ico"),
    }),
    new CopyPlugin({
      patterns: [{ from: "static/_redirects" }],
    }),
  ],
};
