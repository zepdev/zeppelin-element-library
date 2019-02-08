const path = require('path');
const merge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const configBundle = require('./webpack.config.bundle');

// Paths
const PROJECT_ROOT = path.resolve(__dirname, '../');
const PATH_ENTRY = path.join(PROJECT_ROOT, 'src/');
const PATH_OUTPUT = path.join(PROJECT_ROOT, 'dist/');

const pathsToClean = ['dist/library'];

const cleanOptions = {
  root: PROJECT_ROOT,
  verbose: true,
  dry: false
};

module.exports = merge.smartStrategy({})(configBundle, {
  plugins: [
    new CleanWebpackPlugin(pathsToClean, cleanOptions),
    new CopyWebpackPlugin([
      {
        from: path.join(PATH_ENTRY, 'elements'),
        to: path.join(PATH_OUTPUT, 'library/elements')
      },
      {
        from: path.join(PATH_ENTRY, 'blocks'),
        to: path.join(PATH_OUTPUT, 'library/blocks')
      }
    ])
  ]
});
