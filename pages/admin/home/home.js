// admin/home/home.js
Component({
  properties: {
    userinfo:{
      type:Object,
      default:{nickName:'xiaoming'}
    }
  },

  data: {
    qrcode:'',
  },
  pageLifetimes:{
    show(){
      console.log('getApp().globalData',getApp().globalData)
      this.setData({
        qrcode:getApp().globalData.qrcode
      })
    },
  },
  attached(){

  },
  methods: {
    edit(){
      wx.navigateTo({
        url: '/pages/edit/login',
      })
    }
  }
})
