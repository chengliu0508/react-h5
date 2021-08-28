// pages/webview/webview.js
Page({

  data: {
     url:'https://www.wyxcl1.xyz'
  },

  onLoad: function (options) {

  },


  binderror(e){
    console.log('webview error',e)
  }
})