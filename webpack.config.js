var HtmlWebpackPlugin = require ("html-webpack-plugin");
const path = require ("path");

module.exports = {
    //devtool: "none", //changed since webpack 5, past the code as the original *decreases performance if you don't read this file better delete this line
    entry: "./src/index.js",
    //How to use SCSS
    module: {
        rules:[
            {
                test: /\.scss$/, //file extension
                use: ["style-loader", "css-loader", "sass-loader"] //loaders to use
                //[Inyects style into DOM,   Turns CSS in to Javascript,   Transpile SASS in to CSS]
                //last executes first [3th,2nd,1st...]       
            }
        ]
    },
    //Plugins: this is to generate an HTML file with the main.[contentHash].js script added
    plugins: [ 
        new HtmlWebpackPlugin(
            {
                template: "./src/template.html" //Use our HTML file to generate HTML index.html by default
            }
        )
    ] 
};