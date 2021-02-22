const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = ({ prod }) => {
    return {
        mode: prod ? 'production' : 'development',
        entry: {
            main: path.resolve(__dirname, './src/index.js')
        },
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: `[name].bundle.[hash].js`,
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: ['babel-loader'],
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader'],
                }
            ],
        },
        resolve: {
            extensions: ['*', '.js', '.jsx'],
        },
        devServer: {
            contentBase: path.resolve(__dirname, './dist'),
            hot: true,
            port: 8666,
        },
        devtool: 'eval-cheap-module-source-map',
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, './src/index.html'),
            }),
            new webpack.HotModuleReplacementPlugin()
        ],
    }
};