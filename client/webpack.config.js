const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')



module.exports = {
   context: __dirname,
   entry: path.resolve(__dirname,'src', 'index.ts'),
   output: {
    path: path.resolve(__dirname, 'dist'),
    clean:true,
    filename: '[name].[contenthash].js',
   },
   plugins:[new HtmlWebpackPlugin({
    template:path.resolve(__dirname,'src','index.html')
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
                'style-loader',
                'css-loader',
                {loader:'postcss-loader',
                options:{
                    postcssOptions: {
                        plugins: [
                            ['postcss-preset-env']
                        ]
                    }
                }},
            ]
        },
        {
            test: /\.ts$/,
            exclude: /node_modules/,
            use: {
                loader: 'ts-loader'
            }
        },

    ]
   },
   resolve: {
    extensions: ['.ts']
   },
   devtool: 'source-map',
   devServer: {
   hot: true,
},
   mode: 'development',
   node: {
    __dirname: false,
    __filename: false,
   },
};
