/**
 * @Author zhangyi
 * @Date 2019/1/17
 **/
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config')

module.exports = webpackMerge(baseWebpackConfig, {
    mode: 'development',

    devtool: '#source-map',

    optimization: {
        namedModules: true, //取代插件中的 new webpack.NamedModulesPlugin()
        namedChunks: true
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
})
