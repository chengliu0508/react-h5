Page({
  data: {
    current:0,
    userinfo:{}
  },
  onLoad(){
     this.setNavTitle()

     this.init()
  },
  init() {
    const _this = this
    wx.login({
      success: res => {
        if (res.code) {
          wx.request({
            url: 'https://www.szzxh.top/api/saler/login',
            data: {
              salerOpenid: res.code
            },
            success(res) {
              if (res.data) {
                console.log('用户信息',res.data)
                if(res.data.code === 1){
                  wx.reLaunch({
                    url: '/pages/edit/login?type=register',
                  })
                }else{
                  _this.setData({
                    userinfo:res.data.userinfo
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
      path: '/pages/share/share?code='
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