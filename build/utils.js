/**
 * @author zhangyi
 * @date 2018/9/28
 */
const path = require('path')
// eslint-disable-next-line
const colors = require('colors')
const fs = require('fs-extra')

exports.resolve = function (dir) {
    return path.join(__dirname, '..', dir)
}


exports.validProject = function(projectName) {
    if (!projectName) {
        console.log('You must enter projectName'.red)
        return ''
    }

    const projectDir = `src/${projectName}`

    if (!fs.pathExistsSync(projectDir)) {
        console.log(`-- ${projectDir} is empty! --`.red)
        return ''
    }
    return projectName
}

