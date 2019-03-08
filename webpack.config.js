const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname,'public'),
        filename: 'bundle.js',
    },
    modules: {
        rules: [
            {
                enforce: 'pre',
                test: /.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'eslint-loader'
            },
            {
                test: /.(js|jsx)$/,
                exclude: /node_modules/,
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
            { from: 'src/html/index.html', to: 'index.html' },
        ]),
    ]
}