const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack:{
    devServer: { // 自定义服务配置
      open: true, // 自动打开浏览器
      port: 3000,
      host:'127.0.0.1'
    }
  }
})
