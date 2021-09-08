// pages/share/share.js
Page({
  data: {
    adminstatus:0 // 1,2
  },
  onLoad: function (options) {
    let currenturl = getApp().getCurrentPages()
    if(currenturl.openId){
      this.setData({
        adminstatus:1
      })
      console.log('销售端分享的code为：' + currenturl.openId)
      this.gotoLogin()
    }
  },
  //跳转至客户端
  gotoLogin(){
    let currenturl = getApp().getCurrentPages()
    let _this = this
    wx.navigateToMiniProgram({
      appId: 'wx018abda72e8c7421', //客户端小程序appid
      path: '/pages/index/index?saler_id=' + currenturl.openId,
      envVersion: 'develop',
      success(res) {
        // 打开成功
      },
      fail(){
        wx.showToast({
          title: '点击重试!',
        })
        _this.setData({
          adminstatus:2
        })
      }
    })
  }
})