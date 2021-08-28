Page({
  data: {
    nopermision: false,
  },
  onLoad() {
    this.init()
  },
  init() {
    const _this = this
    wx.login({
      success: res => {
        if (res.code) {
          getApp().globalData.code = res.code
          wx.request({
            url: 'https://www.szzxh.top/api/customer/login',
            method:'post',
            header: {
              'content-type': 'application/x-www-form-urlencoded' // 默认值
            },
            data: {
              customerOpenid: '123456' //res.code
            },
            success(res) {
              if (res.data) {
                console.log('用户信息',res.data)
                if (res.data.code == 1 || res.data.msg == '用户未注册') {
                  let currenturl = getApp().getCurrentPages()
                  
                    wx.reLaunch({
                      url: '/pages/register/register',
                    })
                  // if (currenturl.code) {
                  // } else {
                  //   _this.setData({
                  //     nopermision: true
                  //   })
                  // }
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
})