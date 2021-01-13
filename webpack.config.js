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
            },
            {
                test: /\.html$/,
                use: ["html-loader"] //Scann the html files as a text files
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        publicPath: "./", //To avoud path errors? 
                        name: "[name].[ext]",
                        //outputPath: "imgs" //Don't know how to custom output
                       
                    
                    }
                } //When returns the releative path of the file
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