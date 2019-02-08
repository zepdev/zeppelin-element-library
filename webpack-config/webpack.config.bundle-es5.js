const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// Paths
const PROJECT_ROOT = path.resolve(__dirname, '../');
const PATH_ENTRY = path.join(PROJECT_ROOT, 'src/');
const PATH_OUTPUT = path.join(PROJECT_ROOT, 'dist/');

// misc vars
const devMode = process.env.NODE_ENV !== 'production';
const productName = 'zeppelin-element-library--legacy';
const pathsToClean = [`dist/${productName}.*`];

// the clean options to use
const cleanOptions = {
  root: PROJECT_ROOT,
  verbose: true,
  dry: false
};

module.exports = {
  mode: devMode ? 'development' : 'production',
  entry: {
    // split entrypoints and add *.min.js for minimization

    // Scripts --------------------------------------------
    // for unminified output
    'zeppelin-element-library--legacy.js': path.join(
      PATH_ENTRY,
      'bundle_source.js'
    ),

    // for minified output
    'zeppelin-element-library--legacy.min.js': path.join(
      PATH_ENTRY,
      'bundle_source.js'
    )
  },
  output: {
    // dynamic naming
    filename: '[name]',
    path: PATH_OUTPUT
  },

  plugins: [new CleanWebpackPlugin(pathsToClean, cleanOptions)],

  module: {
    rules: [
      { test: /\.(sa|sc|c)ss$/, loader: 'ignore-loader' },
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

        // don't minify zeppelin-element-library--legacy.js
        chunkFilter: chunk =>
          chunk.name !== 'zeppelin-element-library--legacy.js'
      })
    ]
  }
};
