const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname,'public'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /.(js|jsx)$/,
                exclude: /node_module/,
                loader: 'eslint-loader'
            },
            {
                test: /.(js|jsx)$/,
                exclude: /node_module/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                    plugins:['@babel/plugin-proposal-class-properties']
                },
            },
            {
                test: /.(css)$/,
                use: [{
                    loader: "style-loader"
                    }, {
                        loader: "css-loader", options: {
                        sourceMap: true
                    }
                }]
            },
        ]
    },
    plugins: [
        new CopyWebpackPlugin ([
            {from: 'src/img', to: 'img'},
            {from: 'src/css', to: 'css', ignore: [ '*.scss' ]},
            {from: 'src/html'}
        ]),
    ]
}