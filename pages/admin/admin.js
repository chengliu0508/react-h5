Page({
  data: {
    current:0,
    userinfo:{},
    customers:[]
  },
  onLoad(){
     this.setNavTitle()
     this.init()
  },
  init() {
    const _this = this
    wx.login({
      success: res0 => {
        if (res0.code) {
          getApp().globalData.code = res0.code
          wx.request({
            method:'POST',
            url: 'https://www.szzxh.top/api/saler/login',
            header:{
              'content-type' : 	'application/x-www-form-urlencoded'
            },
            data: {
              salerOpenid: '123456',//res0.code
            },
            success(res1) {
              if (res1.data) {
                console.log('用户信息',res1.data)
                if(res1.data.code === 1){
                  wx.navigateTo({
                    url: '/pages/edit/login?type=register',
                  })
                }else{
                  getApp().globalData.qrcode = res1.data.user.qrcode
                  _this.setData({
                    userinfo:res1.data.user,
                    customers:res1.data.customers
                  })
                }
              }
            },
            fail(res) {
              console.log('获取销售用户接口失败！～')
            }
          })
        }
      },
    })
  },
  onShareAppMessage() {
    return {
      title: '房产页面',
      path: '/pages/share/share?code=123456'
    }
  },
  setNavTitle(current){
    current = current || this.current
    wx.setNavigationBarTitle({
      title: current?'访客':"我的名片"
    })
  },
  currentChange(e){
    let current = e.detail
    this.setNavTitle(current)
    this.setData({
      current
    })
  }
});