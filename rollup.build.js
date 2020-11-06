const rollup = require('rollup');
const babel = require('rollup-plugin-babel');
const json = require('rollup-plugin-json');
const resolve = require('rollup-plugin-node-resolve');
const { uglify } = require('rollup-plugin-uglify');
const path = require('path');

const defaultPlugins = [
  resolve({
    browser: true
  }),
  babel({
    exclude: 'node_modules/**'
    // externalHelpers: true
  }),
  json({
    // All JSON files will be parsed by default,
    // but you can also specifically include/exclude files
    exclude: ['node_modules/**'],
    // include: ["src/**"],

    // ignores indent and generates the smallest code
    compact: true // Default: false
  })
];

const inputOptions = {
  input: './src/core/zel.js',
  plugins: defaultPlugins
};
const outputOptions = {
  file: path.resolve(__dirname, 'bundle/zel.js'),
  format: 'iife',
  name: 'ZEL',
};

const options = [
  // standard output
  { input: inputOptions, output: outputOptions },

  // ESM output (module)
  {
    input: {
      ...inputOptions,
      plugins: [
        ...defaultPlugins,
        resolve({
          mainFields: ["module", "main"],
          browser: true,
          extensions: ['.js', '.json'],
          jail: '/src/',
          modulesOnly: true
        }),
        babel({
          exclude: 'node_modules/**'
        })
      ]
    },
    output: {
      ...outputOptions,
      format: 'esm',
      file: path.resolve(__dirname, 'bundle/zel.esm.js')
    }
  },

  // CJS output
  {
    input: inputOptions,
    output: {
      ...outputOptions,
      format: 'cjs',
      file: path.resolve(__dirname, 'bundle/zel.cjs.js')
    }
  },

  // UMD output (main)
  {
    input: inputOptions,
    output: {
      ...outputOptions,
      format: 'umd',
      file: path.resolve(__dirname, 'bundle/zel.umd.js')
    }
  },

  // uglified output
  {
    input: { ...inputOptions, plugins: [...defaultPlugins, uglify({})] },
    output: {
      ...outputOptions,
      file: path.resolve(__dirname, 'bundle/zel.min.js')
    }
  }
];

// Regular bundle
async function build(_inputOptions, _outputOptions) {
  // create a bundle
  const bundle = await rollup.rollup(_inputOptions);

  // or write the bundle to disk
  await bundle.write(_outputOptions);
}

for (const key in options) {
  const value = options[key];
  build(value.input, value.output).then(console.log);
}
