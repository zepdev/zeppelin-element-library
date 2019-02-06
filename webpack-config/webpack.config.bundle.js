const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

//Paths
const PROJECT_ROOT = path.resolve(__dirname, "../");
const PATH_ENTRY = path.join(PROJECT_ROOT, "src/");
const PATH_OUTPUT = path.join(PROJECT_ROOT, "dist/bundled/");

//TODO:  add compression plugin, fix scss export

module.exports = {
  mode: "production",
  entry: {
    // split entrypoints and add *.min.js for minimization

    // Scripts --------------------------------------------
    // for unminified output
    "scripts/zeppelin-element-library.js": path.join(
      PATH_ENTRY,
      "bundle_source.js"
    ),

    //for minified output
    "scripts/zeppelin-element-library.min.js": path.join(
      PATH_ENTRY,
      "bundle_source.js"
    )

    // TOFIX:
    // // Styles --------------------------------------------
    // // for unminified output
    // "styles/zeppelin-element-library.css": path.join(
    //   PATH_ENTRY,
    //   "bundle_source.scss"
    // ),

    // // for minified output
    // "styles/zeppelin-element-library.min.css": path.join(
    //   PATH_ENTRY,
    //   "bundle_source.scss"
    // )
  },
  output: {
    // dynamic naming
    filename: "[name]",
    path: PATH_OUTPUT
  },

  // TOFIX:
  // module: {
  //   rules: [
  //     {
  //       test: /\.scss$/,
  //       use: [
  //         "style-loader", // creates style nodes from JS strings
  //         "css-loader", // translates CSS into CommonJS
  //         "sass-loader" // compiles Sass to CSS, using Node Sass by default
  //       ]
  //     }
  //   ]
  // },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        //don't minify zeppelin-element-library.js
        chunkFilter: chunk =>
          chunk.name !== "scripts/zeppelin-element-library.js"
      })
    ]
  }
};
