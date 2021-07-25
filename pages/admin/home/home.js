// pages/admin/home/home.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  data: {
    qrcode:'',
    userInfo: {nickName:'xiaoming'}, 
  },

  attached(){
    if(getApp().globalData.userInfo && getApp().globalData.userInfo.nickName){
      this.setData({ 
        userInfo: getApp().globalData.userInfo,
        hasUserInfo: true
      }) 
    }
     this.requestCompany()
  },
  methods: {
    requestCompany (){
      wx.request({
        url: 'https://www.szzxh.top/api/saler/getCompany', //仅为示例，并非真实的接口地址
        data: {
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success (res) {
          console.log(res.data)
        }
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
            userInfo: res.userInfo, 
            hasUserInfo: true 
          }) 
        } 
      }) 
    },
    edit(){
      wx.navigateTo({
        url: '../regester',
      })
    }
  }
})
