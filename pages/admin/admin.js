Page({
  data: {
    current:0
  },
  onLoad(){
     this.setNavTitle()
  },
  onShareAppMessage() {
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve({
          title: '获取销售页面'
        })
      }, 2000)
    })
    return {
      title: '销售页面',
      path: '/pages/admin/admin',
      promise 
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