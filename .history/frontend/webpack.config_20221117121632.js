const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports= {

    entry: './src/index.jsx', 
    output:{
        path: __dirname + '/piblic',
        filename: './app.js'
    },
    devServer:{
        port: 8080,
        contentBases: './public',
    },
    resolve:{
        extensions: ['', '.js', '.jsx'],
        alias:{
            mdules: __dirname + 'node_modules'
        }
    },
    plugins:[
        new ExtractTextPlugin('app.css')   
    ],
    module:{
        loaders:[{
            test: /.js[x]?$/,
            loader: 'babel-loader',
            exclusive: /node_modules/,
            query:{
                presets: ['es2015', 'react'],
                plugins:['transform-object-rest-spread']
            }
        },{
            test:/\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        },{
            test: /\.wolf|.wolf2|.ttf|.eot|.svg*.*$/,
            loader:'file'
        }]
    }

}
