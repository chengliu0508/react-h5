Page({
  data: { 
    code:0,
    userInfo: {}, 
    hasUserInfo: false,
  }, 
  onLoad(){
    wx.navigateTo({
      url: '/pages/login/login?code=12456',
    })
  },
  // 事件处理函数 
  bindViewTap(e) { 
    let url = e.target && e.target.dataset && e.target.dataset.url
    wx.navigateTo({ 
      url: `../${url}/${url}`
    }) 
  }, 
  getUserProfile(e) { 
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗 
    wx.getUserProfile({ 
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写 
      success: (res) => { 
        console.log('getUserProfile',res) 
        getApp().globalData.hasUserInfo = true
        getApp().globalData.userInfo = res.userInfo

        this.setData({ 
          code:getApp().globalData.code,
          userInfo: res.userInfo, 
          hasUserInfo: true 
        }) 
      } 
    }) 
  }
})