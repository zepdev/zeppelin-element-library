const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

//Paths
const PROJECT_ROOT = path.resolve(__dirname, "../");
const PATH_ENTRY = path.join(PROJECT_ROOT, "src/");
const PATH_OUTPUT = path.join(PROJECT_ROOT, "dist/bundled/");

//misc vars
const devMode = process.env.NODE_ENV !== "production";

//TODO:  add compression plugin, minify css files

module.exports = {
  mode: devMode ? "development" : "production",
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
  },
  output: {
    // dynamic naming
    filename: "[name]",
    path: PATH_OUTPUT
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles/zeppelin-element-library.css"
    })
  ],

  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: { url: false, sourceMap: true }
          },
          {
            loader: "sass-loader",
            options: { sourceMap: true }
          }
        ]
      }
    ]
  },

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true, // set to true if you want JS source maps

        //don't minify zeppelin-element-library.js
        chunkFilter: chunk =>
          chunk.name !== "scripts/zeppelin-element-library.js"
      })
    ]
  }
};
