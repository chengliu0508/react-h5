Page({
  data: {
    permisioncode: 1,
  },
  onLoad() {
    this.init()
  },
  init() {
    const _this = this
    wx.login({
      success: res => {
        console.log("wx.login" ,res)
        if (res.code) {
          getApp().globalData.code = res.code
          wx.request({
            url: 'https://www.szzxh.top/api/customer/login',
            method:'post',
            header: {
              'content-type': 'application/x-www-form-urlencoded' // 默认值
            },
            data: {
              customerOpenid: res.code
            },
            success(res) {
              if (res.data) {
                console.log('用户信息',res.data,getApp().getCurrentPages() )
                if (res.data.code == 1 || res.data.msg == '用户未注册') {
                  let currenturl = getApp().getCurrentPages()     
                  getApp().globalData.saler_id = currenturl.code         
                    _this.setData({
                      permisioncode: currenturl.code?3:2,
                    })
                } else {
                  getApp().globalData.userInfo = res.data
                  wx.reLaunch({
                    url: '/pages/webview/webview',
                  })
                }
              } else {
                console.log('用户接口未正确返回信息！～')
              }
            },
            fail(res) {
              console.log('获取用户接口失败！～')
              _this.init()
            }
          })
        }
      },
    })
  },

  //微信用户一键登录
  getUserPhone(e){
    console.log('getUserPhone',e.detail)
    if(e.detail.errMsg.indexOf('ok')>-1 && e.detail.encryptedData){
      getApp().globalData.encryptedData = e.detail.encryptedData
      getApp().globalData.sessionKey = e.detail.cloudID
      getApp().globalData.iv = e.detail.iv
      wx.reLaunch({
        url: '/pages/register/register',
      })
    }
  },

  //手机号码登录
  getUserPhone2(e){
    getApp().globalData.needphone = true
    this.getUserPhone(e)
  }
})