const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
    output: {
        path: path.resolve(__dirname,'public'),
    },
    plugins: [
        new CopyWebpackPlugin ([
            { from: 'src/html/index.html', to: 'index.html' },
        ])
    ]
}