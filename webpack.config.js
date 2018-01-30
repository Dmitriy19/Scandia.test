const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
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

            //Компиляция в screen.css.
            {
                test: /\.sass$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader',
                        options: {
                        // If you are having trouble with urls not resolving add this setting.
                        // See https://github.com/webpack-contrib/css-loader#url
                            url: false,
                            minimize: false,
                            sourceMap: true,
                            importLoaders: 1
                        }
                    },

                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: true
                            }
                        },

                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }


                    ]
                })
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
        new ExtractTextPlugin('screen.css')
        //if you want to pass in options, you can do so:
        //new ExtractTextPlugin({
        //  filename: 'screen.css'
        //})
    ]
};

module.exports = config;