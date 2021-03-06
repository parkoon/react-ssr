const path = require('path')
const webpackNodeExternals = require('webpack-node-externals')

module.exports = {
    target: 'node',
    entry: './server.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/build'
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
                options: {
                    presets: [
                        [
                            '@babel/preset-env',
                            {
                                targets: { browsers: ['last 2 versions'] }
                            }
                        ],
                        '@babel/preset-react'
                    ],
                    plugins: [
                        '@babel/plugin-proposal-class-properties',
                        'transform-es2015-modules-commonjs'
                        // [
                        //     '@babel/plugin-transform-runtime',
                        //     {
                        //         regenerator: true
                        //     }
                        // ]
                    ]
                }
            }
        ]
    },
    externals: [webpackNodeExternals()]
}
