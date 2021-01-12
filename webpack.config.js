const path = require ("path");
module.exports = {
    mode: "development", //to stop minifing default "production"
    //devtool: "none", //changed since webpack 5, past the code as the original *decreases performance if you don't read this file better delete this line
    entry: "./src/index.js",
    output:{
        filename: "main.[contentHash].js",//[contentHash] to avoid the catching of the file perfect for PWA no for stat sities
        path: path.resolve(__dirname, "dist")
    },
    //Hot to use SCSS
    module: {
        rules:[
            {
                test: /\.scss$/, //file extension
                use: ["style-loader", "css-loader", "sass-loader"] //loaders to use
                //[Inyects style into DOM,   Turns CSS in to Javascript,   Transpile SASS in to CSS]
                //last executes first [3th,2nd,1st...]       
            }
        ]
    }
};