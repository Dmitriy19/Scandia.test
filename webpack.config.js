const webpack = require('webpack');
//const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {

    entry: './js/app.js',

    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },

    module:{
        rules: [


            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [ 'babel-loader' ]
            },

            {
                test: /\.sass$/,
                use: [ 'style-loader', 'css-loader', 'postcss-loader', 'sass-loader' ]
            },

            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                            context: ''
                        }
                    }
                ]
            },

            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]',
                        context: ''
                    }
                }]
            }


        ]
    },
    plugins: [
     new webpack.ProvidePlugin({
     $: 'jquery',
     jQuery: 'jquery'
     }),
        //new ExtractTextPlugin('screen.css')
        //if you want to pass in options, you can do so:
        //new ExtractTextPlugin({
        //  filename: 'screen.css'
        //})
    ]
};

module.exports = config;