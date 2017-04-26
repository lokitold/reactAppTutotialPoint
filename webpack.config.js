const path = require('path');
console.log(path.resolve(__dirname));

var config = {
    entry: './main.js',

    output: {
        path: path.resolve(__dirname),
        filename: 'index.js',
    },

    devServer: {
        inline: true,
        port: 8083
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',

                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}

module.exports = config;