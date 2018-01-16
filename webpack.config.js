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


            /*{
             test: /(\.css|\.sass)$/,
             exclude: /node_modules/,
             use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
             fallback: 'style-loader',
             // Could also be write as follow:
             // use: 'css-loader?modules&importLoader=2&sourceMap&localIdentName=[name]__[local]___[hash:base64:5]!sass-loader'
             use: [
             {
             loader: 'css-loader',
             query: {
             modules: true,
             sourceMap: true,
             importLoaders: 2,
             localIdentName: '[name]__[local]___[hash:base64:5]'
             }
             },
             {
             loader : 'sass-loader',
             options: {
             sourceMap: true
             }
             },
             {
             loader : 'postcss-loader',
             options: {
             plugins: function () {
             return [
             require("autoprefixer")
             ];
             }
             }
             }
             ]
             })),
             },*/

            //Компиляция в screen.css.
            /*{test: /\.sass$/,
            use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
                         use: [{
                         loader: 'css-loader',
                         options: {
             // If you are having trouble with urls not resolving add this setting.
             // See https://github.com/webpack-contrib/css-loader#url
             url: false,
             minimize: false,
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
             },*/
            /*{
             test: /\.sass$/,
             use: ExtractTextPlugin.extract({
             fallback: 'style-loader',
             use: ['css-loader', 'sass-loader']
             })
             },*/
            {
             test: /\.sass$/,
             use: [ 'style-loader', 'css-loader', 'sass-loader' ]
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