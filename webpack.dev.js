const {merge} = require("webpack-merge");
const common = require("./webpack.config.js");
const path = require ("path");

module.exports = merge(common, { //merge the file common with this content
    mode: "development", //to stop minifing default "production"
    output:{
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
});