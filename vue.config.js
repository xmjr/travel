const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/travel/'
    : '/',
    outputDir: 'travel',
    lintOnSave: true,
    chainWebpack: (config)=>{
        config.resolve.alias
            .set('@$', resolve('src'))
            .set('assets',resolve('src/assets'))
            .set('components',resolve('src/components'))
            .set('layout',resolve('src/layout'))
            .set('base',resolve('src/base'))
            .set('static',resolve('src/static'))
            .set('common',resolve('src/views/common'))
    },
    devServer: {
        host: '0.0.0.0',
        port: 8083,   // 配置端口
        https: false,
        hotOnly: false,
        open: true,   // 自动开启浏览器
        compress: true,   // 开启压缩
        // 配置多个代理
        proxy: {
            // 当使用'/api'路径时，启用target这里写的服务器
            '/api': {
                target: 'http://localhost:80',
                ws: true,
                changeOrigin: true
            },
            '/foo': {
                target: '<other_url>'
            }
        }
    }
}