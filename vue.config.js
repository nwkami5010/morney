/* eslint-disable */      //解决eslint报错
const path = require('path')

module.exports = {
    
    chainWebpack: config => {
        const dir = path.resolve(__dirname, 'src/assets/icons')

        config.module
            .rule('svg-sprite')
            .test(/\.svg$/)
            .include.add(dir).end()//包含icons 目录
            .use('svg-sprite-loader').loader('svg-sprite-loader').options({extract: false}).end()//加载mod，添加选项（不需要解析出文件）
            .use('svgo-loader').loader('svgo-loader')
            .tap(options => ({...options, plugins: [{removeAttrs: {attrs: 'fill'}}]}))
            .end()
        config.plugin('svg-sprite').use(require('svg-sprite-loader/plugin'), [{plainSprite: true}])
        config.module.rule('svg').exclude.add(dir)
    }
}