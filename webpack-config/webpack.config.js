const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// Paths
const PROJECT_ROOT = path.resolve(__dirname, '../');
const PATH_ENTRY = path.join(PROJECT_ROOT, 'src/');
const PATH_OUTPUT = path.join(PROJECT_ROOT, 'dist/');

// Parts
const parts = require('./webpack.parts');

// vars
const productName = 'zeppelin-element-library';
const pathsToCleanProduction = [`dist/${productName}.*`, 'dist/assets/fonts'];
// the clean options to use
const cleanOptions = {
  root: PROJECT_ROOT,
  verbose: true,
  dry: false
};

const commonConfig = merge([
  {
    entry: {
      // split entrypoints and add *.min.js for minimization

      // Scripts --------------------------------------------
      // for unminified output
      'zeppelin-element-library.js': path.join(PATH_ENTRY, 'bundle_source.js')
    },
    output: {
      // dynamic naming
      filename: '[name]',
      path: PATH_OUTPUT
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'demo.html',
        template: path.join(PATH_ENTRY, 'demo_template.html')

        // chunks: [
        //   'zeppelin-element-library.min.js',
        //   'zeppelin-element-library.css'
        // ]
      })
    ]
  },
  parts.loadScript(),
  parts.loadHandlebars(),
  parts.extractCSS(),
  parts.loadFonts()
]);

const productionConfig = merge([
  {
    entry: {
      // Scripts --------------------------------------------

      // for minified output
      'zeppelin-element-library.min.js': path.join(
        PATH_ENTRY,
        'bundle_source.js'
      )
    },
    plugins: [new CleanWebpackPlugin(pathsToCleanProduction, cleanOptions)]
  },
  parts.optimizationMinimizer('zeppelin-element-library.min.css')
]);

const developmentConfig = merge([parts.devServer()]);

module.exports = mode => {
  if (mode === 'production') {
    return merge(commonConfig, productionConfig, { mode });
  }

  return merge(commonConfig, developmentConfig, { mode });
};
