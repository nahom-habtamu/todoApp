const path = require('path');
const HWP = require('html-webpack-plugin');

module.exports = {
    entry : './src/index.js',
    output : {
        path :path.resolve(__dirname,'dist'),
        filename : 'bundle.js',
        publicPath : ''
    },
    devtool : 'cheap-module-eval-source-map',
    module : {
        rules : [
            {
                test : /\.js$/,
                exclude : /node_modules/,
                use : {
                    loader : "babel-loader"
                },
            }, 

            {
                test : /\.html$/,
                use : {
                    loader : "html-loader"
                }
            },

            {
                test : /\.css$/i,
                use : [

                   'style-loader',
                   'css-loader'

                ]
            },

            {
                test: /\.(png|jpe?g|gif)$/,
                use : { 
                    loader: "url-loader?limit=8000&name=images/[name].[ext]"
                }
            }
        ]
    },
    plugins: [
        new HWP({
            template: __dirname + '/public/index.html',
            filename: 'index.html',
        }),

    ]
};