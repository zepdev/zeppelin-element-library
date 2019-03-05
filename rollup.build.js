const rollup = require("rollup");
const babel = require("rollup-plugin-babel");
const resolve = require("rollup-plugin-node-resolve");
const { uglify } = require("rollup-plugin-uglify");
const path = require("path");

const defaultPlugins = [
  resolve({
    browser: true
  }),
  babel({
    exclude: "node_modules/**"
  })
];

const inputOptions = {
  input: "src/bundle_source.js",
  plugins: defaultPlugins
};
const outputOptions = {
  file: path.resolve(__dirname, "bundle/zeppelin-element-library.js"),
  format: "iife",
  name: "ZEL"
};

const options = [
  // standard output
  { input: inputOptions, output: outputOptions },

  /*
  // ESM output (module)
  {
    input: {
      ...inputOptions,
      plugins: [resolve()]
    },
    output: {
      ...outputOptions,
      format: "esm",
      file: path.resolve(__dirname, "bundle/zeppelin-element-library.esm.js")
    }
  },

  // CJS output
  {
    input: inputOptions,
    output: {
      ...outputOptions,
      format: "cjs",
      file: path.resolve(__dirname, "bundle/zeppelin-element-library.cjs.js")
    }
  },

  // UMD output (main)
  {
    input: inputOptions,
    output: {
      ...outputOptions,
      format: "umd",
      file: path.resolve(__dirname, "bundle/zeppelin-element-library.umd.js")
    }
  },
 */
  // uglified output
  {
    input: { ...inputOptions, plugins: [...defaultPlugins, uglify({})] },
    output: {
      ...outputOptions,
      file: path.resolve(__dirname, "bundle/zeppelin-element-library.min.js")
    }
  }
];

// Regular bundle
async function build(_inputOptions, _outputOptions) {
  // create a bundle
  const bundle = await rollup.rollup(_inputOptions);
  // generate code
  const { output } = await bundle.generate(_outputOptions);

  for (const chunkOrAsset of output) {
    if (chunkOrAsset.isAsset) {
      // For assets, this contains
      // {
      //   isAsset: true,                 // signifies that this is an asset
      //   fileName: string,              // the asset file name
      //   source: string | Buffer        // the asset source
      // }
      console.log("Asset", chunkOrAsset);
    } else {
      // For chunks, this contains
      // {
      //   code: string,                  // the generated JS code
      //   dynamicImports: string[],      // external modules imported dynamically by the chunk
      //   exports: string[],             // exported variable names
      //   facadeModuleId: string | null, // the id of a module that this chunk corresponds to
      //   fileName: string,              // the chunk file name
      //   imports: string[],             // external modules imported statically by the chunk
      //   isDynamicEntry: boolean,       // is this chunk a dynamic entry point
      //   isEntry: boolean,              // is this chunk a static entry point
      //   map: string | null,            // sourcemaps if present
      //   modules: {                     // information about the modules in this chunk
      //     [id: string]: {
      //       renderedExports: string[]; // exported variable names that were included
      //       removedExports: string[];  // exported variable names that were removed
      //       renderedLength: number;    // the length of the remaining code in this module
      //       originalLength: number;    // the original length of the code in this module
      //     };
      //   },
      //   name: string                   // the name of this chunk as used in naming patterns
      // }
      console.log("Chunk", chunkOrAsset.modules);
    }
  }

  // or write the bundle to disk
  await bundle.write(_outputOptions);
}

for (let key in options) {
  let value = options[key];
  build(value.input, value.output);
}
