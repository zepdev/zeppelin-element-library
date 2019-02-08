// eslint-disable-next-line
const minify = require('@node-minify/core');
// eslint-disable-next-line
const cssnano = require('@node-minify/cssnano');
const path = require('path');

const PROJECT_ROOT = path.resolve(__dirname, '../');
const PATH_IO = path.join(PROJECT_ROOT, 'dist/');

minify({
  compressor: cssnano,
  input: path.join(PATH_IO, 'zeppelin-element-library.css'),
  output: path.join(PATH_IO, 'zeppelin-element-library.min.css'),
  // eslint-disable-next-line
  callback: function(err, min) {}
});
