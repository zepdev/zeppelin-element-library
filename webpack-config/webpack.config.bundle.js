const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// Paths
const PROJECT_ROOT = path.resolve(__dirname, '../');
const PATH_ENTRY = path.join(PROJECT_ROOT, 'src/');
const PATH_OUTPUT = path.join(PROJECT_ROOT, 'dist/');

// misc vars
const devMode = process.env.NODE_ENV !== 'production';
const productName = 'zeppelin-element-library';

const pathsToClean = [`dist/${productName}.*`, 'dist/assets/fonts'];
// the clean options to use
const cleanOptions = {
  root: PROJECT_ROOT,
  verbose: true,
  dry: false
};

/**
 * TODO:
 * copy/create folders with relevant content to dist for use in ZDS
 * create ES5 version of code and provide it as --legacy
 * https://hackernoon.com/how-to-publish-your-package-on-npm-7fc1f5aae600
 *
 * !! npm package must provide dist folder for users to use lib in products + src/ and all necessary files for contributionrs !! -> add to files array in package.json
 *  */

module.exports = {
  mode: devMode ? 'development' : 'production',
  entry: {
    // split entrypoints and add *.min.js for minimization

    // Scripts --------------------------------------------
    // for unminified output
    'zeppelin-element-library.js': path.join(PATH_ENTRY, 'bundle_source.js'),

    // for minified output
    'zeppelin-element-library.min.js': path.join(PATH_ENTRY, 'bundle_source.js')
  },
  output: {
    // dynamic naming
    filename: '[name]',
    path: PATH_OUTPUT
  },

  plugins: [
    new CleanWebpackPlugin(pathsToClean, cleanOptions),
    new MiniCssExtractPlugin({
      filename: 'zeppelin-element-library.css'
    }),
    new HtmlWebpackPlugin({
      filename: 'demo.html',
      template: path.join(PATH_ENTRY, 'demo_template.html'),
      chunks: ['zeppelin-element-library.min.js']
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
      },
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
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true, // set to true if you want JS source maps

        // don't minify zeppelin-element-library.js
        chunkFilter: chunk => chunk.name !== 'zeppelin-element-library.js'
      })
    ]
  }
};
