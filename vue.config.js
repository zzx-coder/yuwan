module.exports = {
  devServer: {
    proxy: {
      '/yuwan': {
        target: 'http://39.98.225.168:9090/',
        ws: true,
        changeOrigin: true
      },
      '/admin':{
        target: 'http://devht.hryouxi.com/',
        ws: true,
        changeOrigin: true
      }
    }
  }
}