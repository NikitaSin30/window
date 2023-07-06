const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
   context: __dirname,
   entry: path.resolve(__dirname,'src', 'index.ts'),
   output: {
    path: path.resolve(__dirname, 'dist'),
    clean:true,
    filename: '[name].[contenthash].js',
   },
   plugins:[
    new HtmlWebpackPlugin({
    template:path.resolve(__dirname,'src','index.html')
   }),
    new MiniCssExtractPlugin({
    filename: '[name].[contenthash].css',

   })],
   module: {
    rules: [
        {
            test:/\.html$/i,
            use:[ 'html-loader']
        },
        {
            test:/\.css$/i,
            use:[
                MiniCssExtractPlugin.loader,
                'css-loader',
            ]
        },
        {
            test: /\.ts$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets:['@babel/preset-typescript']
                }
            }
        },
    ]
   },
   resolve: {
    extensions: ['.ts']
   },
   devtool: 'source-map',
   mode: 'production',
   node: {
    __dirname: false,
    __filename: false,
   },
};
