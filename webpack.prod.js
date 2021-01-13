var HtmlWebpackPlugin = require ("html-webpack-plugin");
const {merge} = require("webpack-merge");
const common = require("./webpack.config.js");
const path = require ("path");
const CleanWebPackPlugin = require("clean-webpack-plugin");

module.exports = merge(common, { //merge the file common with this content
    mode: "production", //to stop minifing default "production"
    output:{
        filename: "[name].[contenthash].bundle.js",//[contentHash] to avoid the catching of the file perfect for PWA no for stat sities
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new CleanWebPackPlugin.CleanWebpackPlugin()//To clean the dist folder every time we build
    ]
});