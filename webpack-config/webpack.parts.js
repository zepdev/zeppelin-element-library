const webpack = require('webpack');
const path = require('path');

// Paths
const PROJECT_ROOT = path.resolve(__dirname, '../');
const PATH_OUTPUT = path.join(PROJECT_ROOT, 'dist/');

exports.devServer = ({ host, port } = {}) => ({
  devServer: {
    contentBase: PATH_OUTPUT,
    stats: 'errors-only',
    index: 'demo.html',
    host, // Defaults to `localhost`
    port, // Defaults to 8080
    open: 'Google Chrome',
    overlay: true
  }
});

exports.loadScript = ({ include, exclude } = {}) => ({
  module: {
    rules: [
      {
        test: /\.js$/,
        include,
        exclude,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
});

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

exports.extractCSS = () => ({
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'zeppelin-element-library.css',
      chunkFilename: '[id].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: true,
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true }
          }
        ]
      }
    ]
  }
});

exports.loadFonts = () => ({
  module: {
    rules: [
      {
        test: /\.(ttf|woff|woff2|eot|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1,
              name: './assets/fonts/[name].[ext]'
            }
          }
        ]
      }
    ]
  }
});

exports.loadHandlebars = () => ({
  module: {
    rules: [{ test: /\.(hbs|handlebars)$/i, loader: 'handlebars-loader' }]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        handlebarsLoader: {}
      }
    })
  ]
});

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

exports.optimizationMinimizer = excludeFileName => ({
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true, // set to true if you want JS source maps

        // exclude uglification
        chunkFilter: chunk => {
          // Exclude uglification for the named chunk
          if (chunk.name === excludeFileName) {
            return false;
          }
          return true;
        }
      })
    ]
  }
});
