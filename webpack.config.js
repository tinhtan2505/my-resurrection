const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

module.exports = (env) => {
  const clientBundleConfig = {
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx"],
      fallback: {
        crypto: require.resolve("crypto-browserify"),
        stream: require.resolve("stream-browserify"),
      },
    },
    mode: "development",
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: "babel-loader",
          exclude: /(node_modules|bower_components|public\/)/,
        },
        {
          test: /\.tsx?$/,
          loader: "ts-loader",
          exclude: /(node_modules|bower_components|public\/)/,
        },
        {
          test: /\.less$/,
          use: [
            "style-loader", // Tạo thẻ <style> trong HTML
            "css-loader", // Đọc CSS từ file
            "postcss-loader", // Chạy CSS qua PostCSS (bao gồm Tailwind)
            "less-loader", // Biên dịch Less thành CSS
          ],
          include: path.resolve(__dirname, "src"),
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
                url: false,
              },
            },
            {
              loader: "sass-loader",
            },
          ],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: "asset",
          generator: {
            filename: "fonts/[name][ext][query]",
          },
        },
        {
          test: [/\.svg$/, /\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
          type: "asset",
          generator: {
            filename: "images/[name][ext][query]",
          },
        },
      ],
    },
    stats: {
      children: true,
    },
    entry: {
      index: "./src/index.jsx",
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebPackPlugin({
        template: "./public/index.html",
        filename: "./index.html",
      }),
      new MiniCssExtractPlugin({
        filename: "css/[name].bundle.css",
      }),
    ],
  };
  return [clientBundleConfig];
};
