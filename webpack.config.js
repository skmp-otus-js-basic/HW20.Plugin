const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const mode = process.env.NODE_ENV;

module.exports = {
  entry: {
    index: [path.resolve(__dirname, "src", "js", "index.js")],
    feedback: [path.resolve(__dirname, "src", "js", "feedback.js")],
    entries: [path.resolve(__dirname, "src", "js", "entries.js")],
    entry: [path.resolve(__dirname, "src", "js", "entry.js")],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    clean: true,
    environment: {
      arrowFunction: false,
    },
  },
  devtool: mode === "production" ? "source-map" : "eval-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "html", "index.html"),
      filename: "index.html",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "html", "feedback.html"),
      filename: "feedback.html",
      chunks: ["feedback"],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "html", "entries.html"),
      filename: "entries.html",
      chunks: ["entries"],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "html", "entry.html"),
      filename: "entry.html",
      chunks: ["entry"],
    }),
    new MiniCssExtractPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/plugins/carousel/images"),
          to: path.resolve(__dirname, "dist/images"),
        },
        {
          from: path.resolve(__dirname, "src/html/images"),
          to: path.resolve(__dirname, "dist/images"),
        },
      ],
    }),
  ],
  optimization: {
    minimizer: [`...`, new CssMinimizerPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(s*)css$/, // match any .scss or .css file,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext]",
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
  devServer: {
    compress: true,
    port: 9000,
  },
};
