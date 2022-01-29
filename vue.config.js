const path = require('path')
module.exports = {
    // 基本路径
    publicPath: process.env.NODE_ENV === 'production' ? '':'/',
    // 输出文件目录
    outputDir:process.env.NODE_ENV === 'production' ? 'dist' : 'devdist',
    // 是否在保存的时候检查
    lintOnSave:true,
    css :{
        extract:true,
        sourceMap:false,
        loaderOptions:{
            sass:{
                prependData: `@import "~@/styles/common.scss";`
            }
        }
    }
}