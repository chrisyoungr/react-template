const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname,'public'),
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: path.join(__dirname,'public'),
        compress: true,
        historyApiFallback: true,
        port: 9005,
        proxy: [{
            path: `/api/v1/*`,
            target: `http://localhost:3013`,
        }],
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