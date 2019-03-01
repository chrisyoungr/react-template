const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'public'),
        filename: 'bundle.js',
    },
    plugins: [
        new CopyWebpackPlugin ([
            { from: 'src/html/index.html', to: 'index.html' },
        ])
    ]
}