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
            test: /.js[x]?$/
        }]
    }

}
