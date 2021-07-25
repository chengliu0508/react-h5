// pages/share/share.js
Page({
  data: {
    admincode:''
  },
  onLoad: function (options) {
    let currenturl = getApp().getCurrentPages()
    if(currenturl.code){
      this.setData({
        admincode:currenturl.code
      })
      console.log('销售端分享的code为：' + currenturl.code)
      wx.navigateToMiniProgram({
        appId: '', //客户端小程序appid
        path: 'pages/login/login?code=' + currenturl.code,
        extraData: {
          foo: 'bar'
        },
        envVersion: 'develop',
        success(res) {
          // 打开成功
        }
      })
    }
  },
  onReady: function () {

  },
})