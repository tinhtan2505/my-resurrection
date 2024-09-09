import HtmlWebPackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin, {
  loader as _loader,
} from 'mini-css-extract-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'

export default () => {
  const clientBundleConfig = {
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      fallback: {
        crypto: require.resolve('crypto-browserify'),
        stream: require.resolve('stream-browserify'),
      },
    },
    mode: 'development',
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          exclude: /(node_modules|bower_components|public\/)/,
        },
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: /(node_modules|bower_components|public\/)/,
        },
        {
          test: /\.scss$/, // Apply this rule to .scss files
          use: [
            'style-loader', // Injects styles into DOM
            'css-loader', // Translates CSS into CommonJS
            'sass-loader', // Compiles Sass to CSS
          ],
        },
        {
          test: /\.less$/,
          use: [
            _loader,
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                url: false,
              },
            },
            {
              loader: 'less-loader',
              options: {
                lessOptions: {
                  javascriptEnabled: true,
                },
              },
            },
          ],
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            _loader,
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                url: false,
              },
            },
            {
              loader: 'sass-loader',
            },
          ],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset',
          generator: {
            filename: 'fonts/[name][ext][query]',
          },
        },
        {
          test: [/\.svg$/, /\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
          type: 'asset',
          generator: {
            filename: 'images/[name][ext][query]',
          },
        },
      ],
    },
    stats: {
      children: true,
    },
    entry: {
      index: './src/App/index.jsx',
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebPackPlugin({
        template: './src/App/index.html',
        filename: './index.html',
      }),
      new MiniCssExtractPlugin({
        filename: 'css/[name].bundle.css',
      }),
    ],
  }
  return [clientBundleConfig]
}
