const webpack = require('webpack'),
path=require('path')

const vendors = [
    'react',
    'react-dom',
    'react-router-dom',
    'mobx-react',
]

module.exports = {
    output: {
        path:  path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        library: '[name]',
    },
    entry: {
        'lib': vendors,
    },
    plugins: [
        new webpack.DllPlugin({
            path: 'manifest.json',
            name: '[name]',
            context: __dirname,
        }),
    ],
}