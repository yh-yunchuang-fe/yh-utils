/**
 * @Author zhangyi
 * @Date 2019/1/17
 **/
const path = require('path')
const webpack = require('webpack')
const webpackDevServer = require('webpack-dev-server')
const devWebpackConfig = require('./webpack.dev.config')
const pkg = require('../package.json')


const port = pkg.port || 4003
const options = {
    contentBase: path.join(__dirname, '../dist'),
    host: '0.0.0.0',
    stats: { colors: true },
    hot: true,
    noInfo: false,
    historyApiFallback: true,
    disableHostCheck: true,
}
webpackDevServer.addDevServerEntrypoints(devWebpackConfig, options)
const compiler = webpack(devWebpackConfig)
const server = new webpackDevServer(compiler, options)
server.listen(port, '0.0.0.0', function(err) {
    if (err) {
        console.error(err)
    }
    console.log('\n-------------\n')
    console.log(`http://127.0.0.1:${port}/index.html`)
})
