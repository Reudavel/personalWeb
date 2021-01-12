const path = require ("path");
module.exports = {
    mode: "development", //to stop minifing default "production"
    //devtool: "none", //changed since webpack 5, past the code as the original *decreases performance if you don't read this file better delete this line
    entry: "./src/index.js",
    output:{
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules:[
            {
                test: /\.css$/, //file extension
                use: ["style-loader", "css-loader"] //loaders to use
                //[inyects css int to DOM, transform css in to javascript]
                //last executes first [3th,2nd,1st...]       
            }
        ]
    }
};