// pages/webview/webview.js
Page({

  data: {
     url:'https://www.ydvr.xyz/build'
  },

  onLoad: function (options) {
     this.setData({
      url:'https://www.ydvr.xyz/build?openId=' + getApp().globalData.openId
     })
  },


  binderror(e){
    console.log('webview error',e)
  }
})