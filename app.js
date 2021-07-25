// app.js
App({
  onLaunch() {
    wx.getShareInfo({
      success: res => {
        console.log('wx.getShareInfo',res)
      }
    })
  },
  globalData: {
    code:0,
    phone:'',
    userInfo: null
  },
  getCurrentPages: function(){
    　　var pages = getCurrentPages();    //获取加载的页面
    　　var currentPage = pages[pages.length - 1];  //获取当前页面的对象
    　　var url = currentPage.route;  //当前页面url
    　　var options = currentPage.options;   //获取url中所带的参数
    　　return {
          url,
          ...options
        }
    }
})
