/**
 * @Author zhangyi
 * @Date 2019/1/17
 **/
const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const { resolve } = require('./utils')

const devMode = process.env.NODE_ENV === 'development'

const getCssLoader = (cssLoaderOptions) => {
    let cssLoader = [
        { loader: devMode ? 'style-loader' : MiniCssExtractPlugin.loader },
        { loader: 'css-loader' }
    ]

    if (cssLoaderOptions) {
        cssLoader[1].options = cssLoaderOptions
    }

    cssLoader.push({
        loader: 'px2rem-loader',
        options: {
            remUnit: 37.5,
            remPrecision: 8
        }
    })
    cssLoader.push({
        loader: 'postcss-loader',
        options: {
            config: {
                path: path.join(__dirname, '../postcss.config.js')
            }
        }
    })
    return cssLoader
}

const cssLoader = getCssLoader()
const lessLoader = cssLoader.concat({
    loader: 'less-loader',
})

module.exports = {
    entry: {
        app: `./src/index.js`
    },

    output: {
        path: resolve('dist/'),
        publicPath: '/',
        filename: 'js/[name].[hash:4].js',
        chunkFilename: 'js/[name].chunk.js'
    },

    resolve: {
        alias: {
            '@components': resolve('src/components'),
            '@containers': resolve('src/containers'),
            '@lib': resolve('src/lib')
        },
        extensions: ['*', '.js', '.jsx']
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: [resolve('src')],
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                include: [
                    resolve('src'),
                    resolve('node_modules'),
                ],
                use: cssLoader
            },
            {
                test: /\.less$/,
                include: [
                    resolve('src'),
                ],
                use: lessLoader
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: `img/[name].[hash:4].[ext]`
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'file-loader',
                options: {
                    limit: 8192,
                    name: `img/[name].[hash:4].[ext]`
                }
            },
            {
                test: /\.(ogg|mp3|wav|mpe?g)$/i,
                loader: 'file-loader',
                options: {
                    name: `img/[name].[hash:4].[ext]`
                }
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin([`dist/`], {
            root: path.resolve(__dirname, '..')
        }),
        new MiniCssExtractPlugin({
            filename: `css/[name].[hash:4].css`,
            chunkFilename: `css/[id].[hash:4].css`
        }),
        // new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new HtmlWebpackPlugin({
            filename: `index.html`,
            template: `src//index.html`
        })
    ]
}
