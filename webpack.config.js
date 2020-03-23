var path = require("path");
const webpack = require("webpack");
const publicPath = "/dist/build/";
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  //Content
  entry: "./index.js",
  // A SourceMap without column-mappings ignoring loaded Source Maps.
  devtool: "cheap-module-source-map",
  plugins: [
    
    //simplifies creation of HTML files to serve your webpack bundles. This is especially useful for webpack bundles that include a hash in the filename which changes every compilation. You can either let the plugin generate an HTML file for you, supply your own template using lodash templates or use your own loader.
    new HtmlWebpackPlugin({
      title: "Cupcake"
    }),
    
    new webpack.HotModuleReplacementPlugin()
  ],

  output: {
    path: path.join(__dirname, publicPath),
    filename: "[name].bundle.js",
    publicPath: publicPath,
    sourceMapFilename: "[name].map"
  },

  devServer: {
    port: 3000,
    host: "localhost",
  
    historyApiFallback: true,
    noInfo: false,
    stats: "minimal",
    publicPath: publicPath,
    contentBase: path.join(__dirname, publicPath),
   
    hot: true
  },
  module: {
    rules: [
      {
        // For pure CSS (without CSS modules)
        test: /\.css$/i,
        exclude: /\.module\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        // For CSS modules
        test: /\.module\.css$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.js|.jsx?$/,
        exclude: /(node_modules)/,
        loaders: ["babel-loader"]
      }
    ]
  }
};
